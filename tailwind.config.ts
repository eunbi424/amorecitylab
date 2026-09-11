import type { Config } from "tailwindcss";
import design from "./citylab_design.json";

/**
 * `citylab_design.json` 은 사람이 읽는 `description` 필드를 함께 담고 있으므로
 * Tailwind 토큰으로 넘기기 전에 제거한다.
 */
function stripDocs<T>(value: T): T {
  if (Array.isArray(value)) return value.map(stripDocs) as unknown as T;
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value as Record<string, unknown>)
        .filter(([key]) => key !== "description")
        .map(([key, child]) => [key, stripDocs(child)]),
    ) as T;
  }
  return value;
}

const color = stripDocs(design.color);
const { scale: spacingScale, section, container } = design.spacing;
const { radius, shadow } = stripDocs(design.layout);

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    screens: design.breakpoints,
    extend: {
      colors: {
        primary: color.primary,
        secondary: color.secondary,
        accent: color.accent,
        surface: color.background,
        ink: color.text,
        line: color.border,
        state: color.state,
      },
      fontFamily: {
        sans: design.typography.fontFamily.sans,
        display: design.typography.fontFamily.display,
        mono: design.typography.fontFamily.mono,
      },
      fontSize: Object.fromEntries(
        Object.entries(design.typography.scale).map(([name, token]) => [
          name,
          [
            token.size,
            {
              lineHeight: token.lineHeight,
              letterSpacing: token.letterSpacing,
              fontWeight: String(token.weight),
            },
          ],
        ]),
      ) as Record<string, [string, { lineHeight: string; letterSpacing: string; fontWeight: string }]>,
      spacing: {
        ...spacingScale,
        section: section.paddingY,
        gutter: section.gutter,
      },
      maxWidth: {
        container: container.maxWidth,
        narrow: container.narrowMaxWidth,
        wide: container.wideMaxWidth,
      },
      borderRadius: radius,
      boxShadow: shadow,
      letterSpacing: {
        eyebrow: design.typography.scale.eyebrow.letterSpacing,
      },
      transitionTimingFunction: design.motion.easing,
      transitionDuration: design.motion.duration,
      keyframes: {
        rise: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fade: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        rise: `rise ${design.motion.duration.reveal} ${design.motion.easing.entrance} both`,
        fade: `fade ${design.motion.duration.slow} ${design.motion.easing.standard} both`,
      },
    },
  },
  plugins: [],
};

export default config;
