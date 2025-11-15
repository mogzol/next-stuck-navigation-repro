"use client";

const RENDER_TIME_MS = 10;

export function SlowListItem({ children }: { children: React.ReactNode }) {
  // eslint-disable-next-line react-hooks/purity
  const now = performance.now();
  // eslint-disable-next-line react-hooks/purity
  while (performance.now() - now < RENDER_TIME_MS) {}

  return <li>{children}</li>;
}
