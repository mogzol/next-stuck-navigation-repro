import { sleep } from "@/util/sleep";

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  await sleep(100); // Simulate async work

  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
