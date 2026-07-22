import { useEffect, useState } from "react";

export type Breakpoint = "sm" | "md" | "xl";

export const BREAKPOINTS = {
  sm: 0, // 0 - 819px
  md: 820, // 820 - 1279px
  xl: 1280, // 1280px+
} as const;

export function useResponsive(): Breakpoint {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>("xl");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < BREAKPOINTS.md) {
        setBreakpoint("sm");
      } else if (width < BREAKPOINTS.xl) {
        setBreakpoint("md");
      } else {
        setBreakpoint("xl");
      }
    };

    // Set initial breakpoint
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return breakpoint;
}

export function isBreakpoint(current: Breakpoint, target: Breakpoint): boolean {
  return current === target;
}

export function isBreakpointOrLarger(
  current: Breakpoint,
  target: Breakpoint
): boolean {
  const breakpointOrder: Breakpoint[] = ["sm", "md", "xl"];
  return (
    breakpointOrder.indexOf(current) >= breakpointOrder.indexOf(target)
  );
}
