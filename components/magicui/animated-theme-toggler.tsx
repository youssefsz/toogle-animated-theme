"use client";

import { Moon, SunDim } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { flushSync } from "react-dom";
import { cn } from "@/lib/utils";

type props = {
  className?: string;
};

export const AnimatedThemeToggler = ({ className }: props) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);
  const [isSpinning, setIsSpinning] = useState<boolean>(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  // Initialize theme state on mount
  useEffect(() => {
    setMounted(true);
    const isDark = document.documentElement.classList.contains("dark");
    setIsDarkMode(isDark);
  }, []);

  const changeTheme = async () => {
    if (!buttonRef.current) return;

    // Blur the button immediately to remove focus
    buttonRef.current.blur();

    // Start spinning animation
    setIsSpinning(true);

    await document.startViewTransition(() => {
      flushSync(() => {
        const dark = document.documentElement.classList.toggle("dark");
        setIsDarkMode(dark);
      });
    }).ready;

    const { top, left, width, height } =
      buttonRef.current.getBoundingClientRect();
    const y = top + height / 2;
    const x = left + width / 2;

    const right = window.innerWidth - left;
    const bottom = window.innerHeight - top;
    const maxRad = Math.hypot(Math.max(left, right), Math.max(top, bottom));

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRad}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 700,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      },
    );

    // Stop spinning exactly when the transition completes
    setTimeout(() => {
      setIsSpinning(false);
    }, 700);
  };

  // Prevent hydration mismatch by not rendering theme-dependent content until mounted
  if (!mounted) {
    return (
      <button 
        ref={buttonRef} 
        className={cn(
          "group relative inline-flex items-center justify-center rounded-xl border-2 border-border bg-background/80 backdrop-blur-sm p-3 text-foreground shadow-lg shadow-black/5 dark:shadow-white/5 transition-all duration-300 hover:bg-accent hover:text-accent-foreground hover:scale-110 hover:shadow-xl hover:shadow-black/10 dark:hover:shadow-white/10 focus:outline-none focus:ring-4 focus:ring-primary/30 focus:ring-offset-2 dark:focus:ring-offset-background cursor-pointer active:scale-95",
          "before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-br before:from-white/20 before:via-transparent before:to-primary/20 before:opacity-0 before:transition-opacity before:duration-300 group-hover:before:opacity-100",
          className
        )}
        aria-label="Switch theme"
        suppressHydrationWarning
      >
        <div className="relative z-10">
          <Moon className="h-6 w-6 transition-transform duration-300 hover:rotate-12 drop-shadow-sm" />
        </div>
      </button>
    );
  }

  return (
    <button 
      ref={buttonRef} 
      onClick={changeTheme} 
      className={cn(
        "group relative inline-flex items-center justify-center rounded-xl border-2 border-border bg-background/80 backdrop-blur-sm p-3 text-foreground shadow-lg shadow-black/5 dark:shadow-white/5 transition-all duration-300 hover:bg-accent hover:text-accent-foreground hover:scale-110 hover:shadow-xl hover:shadow-black/10 dark:hover:shadow-white/10 focus:outline-none focus:ring-4 focus:ring-primary/30 focus:ring-offset-2 dark:focus:ring-offset-background cursor-pointer active:scale-95",
        "before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-br before:from-white/20 before:via-transparent before:to-primary/20 before:opacity-0 before:transition-opacity before:duration-300 group-hover:before:opacity-100",
        className
      )}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      <div className="relative z-10">
        {isDarkMode ? (
          <SunDim 
            className={cn(
              "h-6 w-6 transition-transform duration-300 hover:rotate-12 drop-shadow-sm",
              isSpinning && "theme-toggle-spin"
            )} 
          />
        ) : (
          <Moon 
            className={cn(
              "h-6 w-6 transition-transform duration-300 hover:rotate-12 drop-shadow-sm",
              isSpinning && "theme-toggle-spin"
            )} 
          />
        )}
      </div>
    </button>
  );
};
