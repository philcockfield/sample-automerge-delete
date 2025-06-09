# Repo Delete Errors (Sample)

https://discord.com/channels/1200006940210757672/1202325266937159690/1381676169014935594

```bash
deno task sample-1
deno task sample-2
deno task sample-3
```

See `deno.json` for automerge versions.

### Runtime: Deno

```bash
curl -fsSL https://deno.land/install.sh | sh
deno --version
```

↓  
deno 2.3.5 (stable, release, aarch64-apple-darwin)  
v8 13.7.152.6-rusty  
typescript 5.8.3

## Sample-1

Immediate delete, before any `whenReady` waiting:

```bash
deno task sample-1
```

↓ Error:

```
caught whenready Error: Actor terminated without satisfying predicate
    at Object.complete (file:///<user>/Library/Caches/deno/npm/registry.npmjs.org/xstate/5.19.4/dist/xstate.cjs.js:953:13)
    at Actor.subscribe (file:///<user>/Library/Caches/deno/npm/registry.npmjs.org/xstate/5.19.4/dist/raise-5872b9e8.cjs.js:745:32)
    at file:///<user>/Library/Caches/deno/npm/registry.npmjs.org/xstate/5.19.4/dist/xstate.cjs.js:944:20
    at new Promise (<anonymous>)
    at waitFor (file:///<user>/Library/Caches/deno/npm/registry.npmjs.org/xstate/5.19.4/dist/xstate.cjs.js:891:10)
    at DocHandle.#statePromise (file:///<user>/Library/Caches/deno/npm/registry.npmjs.org/@automerge/automerge-repo/2.0.1/dist/DocHandle.js:149:16)
    at DocHandle.whenReady (file:///<user>/Library/Caches/deno/npm/registry.npmjs.org/@automerge/automerge-repo/2.0.1/dist/DocHandle.js:231:45)
    at DocSynchronizer.beginSync (file:///<user>/Library/Caches/deno/npm/registry.npmjs.org/@automerge/automerge-repo/2.0.1/dist/synchronizer/DocSynchronizer.js:162:14)
    at file:///<user>/Library/Caches/deno/npm/registry.npmjs.org/@automerge/automerge-repo/2.0.1/dist/synchronizer/CollectionSynchronizer.js:106:34
```

## Sample-2

After awaiting `whenReady()`:

```bash
deno task sample-2
```

↓ no error but emits

```
sync with peers threw an exception
```

## Sample-3 (Success)

Timer → no error.

```bash
deno task sample-3
```
