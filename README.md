# next-stuck-navigation-repro

This repo contains a minimal app to reproduce an issue with Next.js navigation where the page can get stuck and not render the new page after calling router navigation methods, like `router.refresh()` or `router.push()`.

Note that the issue **does not happen** when running in dev mode (or at least I haven't been able to reproduce it). So to reproduce the issue, **you must run the production build**.

## Reproduction Steps

1. Run `pnpm install`
2. Run `pnpm run build`
3. Run `pnpm run start`
4. Open the page in your browser and follow the instructions on the page to reproduce the issue.
    - If you are unable to reproduce the issue, try starting the app with a different `GARBAGE_ITEMS` value, such as `100` or `20` (the default is `60`): `GARBAGE_ITEMS=100 pnpm run start`
    - You may also have better luck if you change your network request throttling to "Fast 4G"
    - You can also stop the issue from occurring (or at least reduce it) by using a slower request throttling
