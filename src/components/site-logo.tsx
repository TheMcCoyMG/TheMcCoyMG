import type { SVGProps } from "react";

export function SiteLogo({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      viewBox="0 0 160 96"
      role="img"
      aria-labelledby="ro-logo-title ro-logo-desc"
      {...props}
    >
      <title id="ro-logo-title">Rotimi Ogundele</title>
      <desc id="ro-logo-desc">RO lettermark with Rotimi Ogundele Solution wordmark</desc>
      <path d="M8 8h43c19 0 31 10 31 25 0 11-6 19-16 23l22 32H66L47 60H29v28H8V8Zm21 17v19h20c8 0 12-4 12-9.5S57 25 49 25H29Z" fill="currentColor" />
      <path d="M91 8h22l18 25 18-25h22l-29 40v40h-21V48L91 8Z" fill="currentColor" />
      <text x="9" y="95" fill="currentColor" fontFamily="Space Grotesk, sans-serif" fontSize="7" fontWeight="700" letterSpacing="2">ROTIMI OGUNDELE</text>
    </svg>
  );
}
