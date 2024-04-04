## To use this repo:

1. Make sure your Docker daemon is running.
2. `pnpm install`.
3. `pnpm get-ready`.
4. Open another terminal and run `pnpm go`.
5. Open `http://localhost:3000`.

### If you need to reset

Kill the terminals and run `pnpm reset`.

## Branches

`main`: Using `force-dynamic` to try to keep data fresh. (Doesn't work...)
`ppr`: Using `ppr` and `noStore()` to try to keep data fresh. (Doesn't work...)
`stale-times`: Using `staleTimes` to try to keep data fresh. (It's works!)

## Problem I'm having

I'd like to create "live updating RSC" such that the "viewer counts" you see in this application are kept relatively fresh. However, I'm having trouble getting consistency with the data across navigations.

### What works

1. The "viewer counts" on the channels' pages update every 3 seconds while you are on the page. Great!
2. If you **do** wait those three seconds, the data is fresh when you navigate back to the homepage. Great!
3. If you **don't** wait those three seconds, the data is stale when you navigate back to the homepage. Not great.

I've only been able to fix (3) by using the `staleTimes` configuration in `next.config.mjs`. This works, but seems like a rather large hammer for such a small nail.
