import { forwardRef } from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@/utils/cn";
import type { ButtonProps } from "@/types/components";

const variantStyles: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-primary text-primary-foreground shadow-[0_18px_50px_rgba(15,118,110,0.24)] hover:bg-primary-hover hover:shadow-[0_20px_60px_rgba(15,118,110,0.28)]",
  secondary:
    "bg-secondary text-secondary-foreground hover:opacity-90 shadow-md",
  ghost: "bg-transparent text-foreground hover:bg-surface/80",
  outline:
    "border-2 border-primary/20 text-primary bg-transparent hover:bg-primary/10 hover:border-primary/40",
};

const sizeStyles: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "h-9 px-4 text-sm gap-1.5",
  md: "h-11 px-6 text-sm gap-2",
  lg: "h-13 px-8 text-base gap-2.5",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      loading = false,
      icon: Icon,
      iconPosition = "left",
      className,
      children,
      disabled,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        type="button"
        disabled={disabled || loading}
        className={cn(
          "inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          variantStyles[variant],
          sizeStyles[size],
          className,
        )}
        {...props}
      >
        {loading ? (
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
        ) : (
          Icon &&
          iconPosition === "left" && (
            <Icon className="h-4 w-4 shrink-0" aria-hidden />
          )
        )}
        {children}
        {!loading && Icon && iconPosition === "right" && (
          <Icon className="h-4 w-4 shrink-0" aria-hidden />
        )}
      </button>
    );
  },
);

Button.displayName = "Button";
