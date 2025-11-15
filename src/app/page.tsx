import { RefreshButton } from "@/components/RefreshButton";
import { SlowListItem } from "@/components/SlowListItem";
import { sleep } from "@/util/sleep";

const GARBAGE_ITEMS = Number(process.env.GARBAGE_ITEMS ?? 60);

function garbage(length: number) {
  let result = "";

  for (let i = 0; i < length; i++) {
    const randomOffset = Math.floor(Math.random() * 94);
    const asciiCode = 33 + randomOffset;
    result += String.fromCharCode(asciiCode);
  }

  return result;
}

export const dynamic = "force-dynamic";

export default async function Page() {
  await sleep(100); // Simulate async work

  return (
    <div>
      {`Press the refresh button below with your network monitor open. Observe that sometimes the
        request for the new page will finish, but it will never get rendered, and the loading
        indicator from the <RefreshButton /> component stays visible indefinitely.`}
      <br />
      <br />
      {`This doesn't always happen. If it doesn't happen after the first few tries, fully refresh
        the page and try again. You may have more luck if you set your network request throttling to
        "Fast 4G", and/or try adjusting the "GARBAGE_ITEMS" env variable before starting the server.
        It is initially set to "60", which usually triggers the issue on my machine (2019 i9 MacBook
        Pro).`}
      <br />
      <br />
      <RefreshButton />
      <br />
      <br />
      Rendered at: {new Date().toISOString()}
      <br />
      <br />
      Garbage data to increase page size and render time:
      <ul style={{ fontSize: "8px" }}>
        {[...new Array(GARBAGE_ITEMS)].map((_, count) => (
          <SlowListItem key={count}>{garbage(100)}</SlowListItem>
        ))}
      </ul>
    </div>
  );
}
