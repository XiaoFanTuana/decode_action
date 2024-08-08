//Thu Aug 08 2024 02:57:32 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
try {
  chrome.runtime.sendMessage({
    "cmd": "contextMenuRemoveAll"
  });
} catch (_0x292610) {}
currentUrl = window.location.href;
currentUrl = encodeURIComponent(currentUrl);
chrome.runtime.sendMessage({
  "cmd": "Start",
  "currentUrl": currentUrl,
  "from": "zzb5.1"
});
_0xodc = "jsjiami.com.v6";