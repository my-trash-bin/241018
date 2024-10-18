function str2ab(str: string): ArrayBuffer {
  const buf = new ArrayBuffer(str.length * 2);
  const bufView = new Uint16Array(buf);
  for (let i = 0; i < str.length; i++) {
    bufView[i] = str.charCodeAt(i);
  }
  return buf;
}

onmessage = (e) => {
  (async (): Promise<void> => {
    const opfsRoot = await navigator.storage.getDirectory();
    const file = await opfsRoot.getFileHandle("test", { create: true });
    const access = await file.createSyncAccessHandle();
    access.write(str2ab("42"));
    access.flush();
    access.close();
    postMessage(42);
  })();
};
