"use client";

import { useTransition } from "react";

import { useRouter } from "next/navigation";

export function RefreshButton() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  // Other router navigation methods, such as .replace() and .push() also trigger the issue.
  // It also doesn't need to be in a transition, that's only being used here to show a loading
  // indicator to make the issue more obvious.
  const refresh = () => startTransition(() => router.refresh());

  return isPending ? (
    <>
      <div
        style={{
          position: "fixed",
          inset: "0",
          textAlign: "center",
          lineHeight: "100vh",
          background: "#FFFA",
        }}
      >
        <progress />
      </div>
      Loading...
    </>
  ) : (
    <button onClick={refresh}>Refresh</button>
  );
}
