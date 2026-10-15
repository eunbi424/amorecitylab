/**
 * public/ 정적 파일 경로.
 * 정적 export(`images.unoptimized`)에서는 next/image가 basePath를 붙이지 않는다.
 * next.config.mjs의 basePath와 같은 값이어야 한다.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "/amorecitylab";

export function publicPath(src: string): string {
  if (!src.startsWith("/") || src.startsWith("//")) return src;
  if (src === basePath || src.startsWith(`${basePath}/`)) return src;
  return `${basePath}${src}`;
}
