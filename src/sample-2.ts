import { Repo } from "@automerge/automerge-repo";

type T = { count: number };

const repo = new Repo();
const handle = repo.create<T>({ count: 0 });
console.log("doc:", handle.doc());

await handle.whenReady();
repo.delete(handle.documentId);
