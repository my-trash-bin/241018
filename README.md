# test 241018

1. run `dev.sh`
2. open the page using browser
3. open developer tools, go to application tab, application/storage section
4. click anywhere in the page to write to opfs
5. enter below to clear data

```javascript
(async () => {
    await (await navigator.storage.getDirectory()).remove({ recursive: true });
})();
```
