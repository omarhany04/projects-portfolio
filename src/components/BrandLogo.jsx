import React from "react";

const sizeMap = {
  sm: {
    badge: "h-10 w-10 rounded-xl",
    wordmark: "text-lg tracking-[0.28em]",
    subtitle: "text-[10px] tracking-[0.28em]"
  },
  lg: {
    badge: "h-16 w-16 rounded-2xl",
    wordmark: "text-4xl tracking-[0.32em]",
    subtitle: "text-xs tracking-[0.32em]"
  }
};

const BrandLogo = ({ size = "sm", showWordmark = true, subtitle = null, className = "" }) => {
  const styles = sizeMap[size] || sizeMap.sm;

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div
        className={`glass relative overflow-hidden border border-accent/20 bg-gradient-to-br from-accent/15 via-neon-purple/10 to-neon-blue/15 ${styles.badge}`}
      >
        <img
          src="/mohamed.jpg"
          alt="Mohamed Aboabdallah"
          className="h-full w-full object-cover object-top"
        />
      </div>

      {showWordmark ? (
        <div className="leading-none">
          <p className={`font-display font-bold uppercase text-white ${styles.wordmark}`}>
            <span className="gradient-text">Mohamed</span>
          </p>
          {subtitle ? (
            <p className={`mt-1 font-mono uppercase text-white/35 ${styles.subtitle}`}>{subtitle}</p>
          ) : null}
        </div>
      ) : null}
    </div>
  );
};

export default BrandLogo;
