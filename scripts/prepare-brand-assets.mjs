/**
 * 브랜드 원본 자산을 웹에서 쓸 형태로 가공한다. (일회성 유틸 · `node scripts/prepare-brand-assets.mjs`)
 *
 * 1) 연구원 공식 프로필 카드(1024x1024)에서 인물 영역만 잘라 3:4 포트레이트로 생성
 * 2) CITY LAB 로고(JPG · 흰 배경)를 배경 투명 PNG 2종(잉크/화이트)으로 변환
 */
import sharp from "sharp";
import { mkdir } from "node:fs/promises";

const CARDS = "public/researchers/cards";
const PORTRAITS = "public/researchers/portraits";
const BRAND = "public/brand";

/** 카드마다 인물 머리 높이가 조금씩 달라 크롭 박스를 개별 지정한다. (3:4 비율 유지) */
const cropBoxes = [
  { file: "ko-eunbi", left: 600, top: 445, width: 420, height: 560 },
  { file: "kim-jihye", left: 610, top: 450, width: 414, height: 552 },
  { file: "jo-min", left: 555, top: 390, width: 461, height: 615 },
  { file: "ko-sujeong", left: 570, top: 415, width: 442, height: 590 },
  { file: "kang-jiye", left: 590, top: 450, width: 416, height: 555 },
];

async function buildPortraits() {
  await mkdir(PORTRAITS, { recursive: true });
  for (const { file, ...box } of cropBoxes) {
    const out = `${PORTRAITS}/${file}.jpg`;
    const info = await sharp(`${CARDS}/${file}.png`)
      .extract(box)
      .resize(600, 800, { fit: "cover" })
      .jpeg({ quality: 90, mozjpeg: true })
      .toFile(out);
    console.log(`portrait  ${out}  ${info.width}x${info.height}`);
  }
}

async function buildLogos() {
  await mkdir(BRAND, { recursive: true });

  // 흰 여백을 잘라낸 뒤, 밝기를 반전해 알파 채널로 사용 → 글리프만 남는 투명 PNG
  const trimmed = await sharp(`${BRAND}/citylab-logo.jpg`)
    .trim({ background: "#ffffff", threshold: 15 })
    .toBuffer();

  const { data: gray, info } = await sharp(trimmed).greyscale().raw().toBuffer({ resolveWithObject: true });
  const alpha = Buffer.alloc(gray.length);
  for (let i = 0; i < gray.length; i += 1) alpha[i] = 255 - gray[i];

  const raw = { raw: { width: info.width, height: info.height, channels: 1 } };
  for (const [name, background] of [
    ["citylab-logo-ink", "#0B0C0C"],
    ["citylab-logo-white", "#FFFFFF"],
  ]) {
    const out = `${BRAND}/${name}.png`;
    await sharp({ create: { width: info.width, height: info.height, channels: 3, background } })
      .joinChannel(alpha, raw)
      .png()
      .toFile(out);
    console.log(`logo      ${out}  ${info.width}x${info.height}`);
  }
}

await buildPortraits();
await buildLogos();
