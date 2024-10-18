import "./style.css";

import WorkerFactory from "./worker?worker";

const worker: Worker = WorkerFactory();

window.addEventListener("click", () => {
  worker.postMessage(42);
});

worker.addEventListener("message", () => {
  (async () => {
    const opfsRoot = await navigator.storage.getDirectory();
    const fileHandle = await opfsRoot.getFileHandle("test", { create: true });
    const file = await fileHandle.getFile();
    console.log(await file.text());
  })();
});
