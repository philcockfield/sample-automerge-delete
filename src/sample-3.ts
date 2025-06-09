import { Repo } from "@automerge/automerge-repo";
export const wait = (ms: number) => new Promise((_) => setTimeout(_, ms));
type T = { count: number };

const repo = new Repo();
const handle = repo.create<T>({ count: 0 });
console.log("doc:", handle.doc());

await handle.whenReady();
await wait(500);
repo.delete(handle.documentId);
