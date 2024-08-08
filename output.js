//Thu Aug 08 2024 02:59:50 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
function ZzbApi_GetSign(_0x240ffc) {
  var _0x4e80bd = $.md5("zzb2020zzbAppSecretKey_zzb2020_" + _0x240ffc + "_zzb2020zzbAppSecretKey");
  return _0x4e80bd;
}
function ZzbApi_Decrypt(_0x31f244, _0x3f29c0, _0xcab54f) {
  if (!_0xcab54f) _0xcab54f = CryptoJS.enc.Utf8.parse("12343334ccABCDEF");
  if (!_0x3f29c0) _0x3f29c0 = CryptoJS.enc.Utf8.parse("AAADEF1234123412");
  let _0x2c4a5d = CryptoJS.enc.Hex.parse(_0x31f244);
  let _0x5ec378 = CryptoJS.enc.Base64.stringify(_0x2c4a5d);
  let _0x5b4560 = CryptoJS.AES.decrypt(_0x5ec378, _0xcab54f, {
    "iv": _0x3f29c0,
    "mode": CryptoJS.mode.CBC,
    "padding": CryptoJS.pad.Pkcs7
  });
  let _0x19a7eb = _0x5b4560.toString(CryptoJS.enc.Utf8);
  return _0x19a7eb.toString();
}
function ZzbApi_Encrypt(_0x5e90be, _0x32e73a, _0x515427) {
  if (!_0x515427) _0x515427 = CryptoJS.enc.Utf8.parse("12343334ccABCDEF");
  if (!_0x32e73a) _0x32e73a = CryptoJS.enc.Utf8.parse("AAADEF1234123412");
  let _0x38f9d5 = CryptoJS.enc.Utf8.parse(_0x5e90be);
  let _0x587729 = CryptoJS.AES.encrypt(_0x38f9d5, _0x515427, {
    "iv": _0x32e73a,
    "mode": CryptoJS.mode.CBC,
    "padding": CryptoJS.pad.Pkcs7
  });
  return _0x587729.ciphertext.toString().toUpperCase();
}
_0xody = "jsjiami.com.v6";