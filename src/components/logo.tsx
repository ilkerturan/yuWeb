
"use client";

import Image from "next/image";

export function Logo() {
  return (
    <div className="relative w-full h-full">
      <Image
        src="/images/logo.png"
        alt="yuPregnancy Logo"
        fill
        className="object-contain"
        priority
      />
    </div>
  );
}
