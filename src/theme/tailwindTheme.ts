import { COLORS } from "../constants/colors";
import { FONT_FAMILY } from "../constants/typography";
import { RADIUS } from "../constants/radius";
import { SHADOWS } from "../constants/shadows";

const light = COLORS.light;

export const tailwindThemeExtend = {
  colors: {
    primary: {
      DEFAULT: light.primary,
      hover: light.primaryHover,
      foreground: "#FFFFFF",
    },
    secondary: {
      DEFAULT: light.secondary,
      foreground: "#FFFFFF",
    },
    accent: light.accent,
    background: light.background,
    surface: light.surface,
    foreground: light.textPrimary,
    muted: light.textMuted,
    "text-secondary": light.textSecondary,
    border: light.border,
  },
  fontFamily: {
    sans: [FONT_FAMILY.primary],
    display: [FONT_FAMILY.display],
    mono: [FONT_FAMILY.mono],
  },
  borderRadius: {
    sm: RADIUS.sm,
    md: RADIUS.md,
    lg: RADIUS.lg,
    xl: RADIUS.xl,
    "2xl": RADIUS["2xl"],
    "3xl": RADIUS["3xl"],
    pill: RADIUS.pill,
  },
  boxShadow: {
    glass: SHADOWS.glass,
    glow: SHADOWS.glow,
    "glow-lg": SHADOWS.glowLg,
    "card-hover": SHADOWS.cardHover,
  },
  backgroundImage: {
    "gradient-primary": `linear-gradient(135deg, ${light.gradientFrom}, ${light.gradientVia}, ${light.gradientTo})`,
    "gradient-radial": `radial-gradient(ellipse at top, ${light.heroGlow}, transparent 70%)`,
    "gradient-mesh": `radial-gradient(at 40% 20%, ${light.heroGlow} 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(85,157,204,0.15) 0px, transparent 50%)`,
  },
  animation: {
    float: "float 6s ease-in-out infinite",
    "fade-up": "fadeUp 0.6s ease-out forwards",
  },
  keyframes: {
    float: {
      "0%, 100%": { transform: "translateY(0)" },
      "50%": { transform: "translateY(-12px)" },
    },
    fadeUp: {
      from: { opacity: "0", transform: "translateY(24px)" },
      to: { opacity: "1", transform: "translateY(0)" },
    },
  },
  fontSize: {
    base: ["1.3rem", { lineHeight: "3.5rem" }],
  },
};
