"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import GraduationInvitation from "@/components/GraduationInvitation";

function GraduationContent() {
  const searchParams = useSearchParams();
  const recipient = searchParams.get("to") || "Tamu Undangan";

  return <GraduationInvitation recipient={recipient} />;
}

export default function BedelPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gradient-to-br from-amber-50 to-green-50 flex items-center justify-center">Loading...</div>}>
      <GraduationContent />
    </Suspense>
  );
}
