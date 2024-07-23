//Tue Jul 23 2024 11:51:01 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const i1I11Iil = require("./env"),
  ill111li = require("querystring"),
  lll1I1l1 = require("got"),
  ili1IlI = new i1I11Iil(),
  IIli1i11 = 15000;
let II1iiiiI = "",
  III11l1l = "",
  liiii1l1 = 0,
  lliII1 = "",
  ililIlii = "",
  ill1I1ll = "",
  l1i1IiI1 = "",
  iII1llii = "",
  i1iIllIl = "",
  Il1lIl1 = "",
  lI111Ii1 = "",
  l1Ili1II = "",
  i11i1iIi = "https://npm.elemecdn.com/nanshen/favicon.ico",
  II1III1I = "",
  l11lIiIl = "Script",
  il1ll1 = "active",
  llilIli1 = "",
  IiilIliI = "",
  i1liIlI = "",
  iili1iIi = "",
  liiii1li = "",
  lli1il = "",
  ii1lll1l = "https://api.telegram.org",
  lli1111i = "",
  iIlI1ilI = "",
  Iili1ll = "",
  i1l1liil = "",
  lII1iIIl = "",
  lI1111 = "",
  iIliiiIi = "",
  li1l11ii = "",
  I11III11 = "",
  lllI1I1i = "",
  Ii11llIi = "",
  IiII1lii = "",
  IiliiII1 = "",
  I11lIi1I = "",
  l1II1ili = "",
  Ill11l1l = "",
  ll111liI = "",
  lI1Iil1 = "",
  Il11I1l1 = "",
  l1iiI1il = "",
  lI1Iiiil = "",
  I1l1I1iI = "",
  lIilI1i1 = "",
  i1iii1l1 = "",
  IIi1lII1 = "",
  lil1Iill = "",
  Iii1111 = "";
process.env.GOTIFY_URL && (II1iiiiI = process.env.GOTIFY_URL);
process.env.GOTIFY_TOKEN && (III11l1l = process.env.GOTIFY_TOKEN);
process.env.GOTIFY_PRIORITY && (liiii1l1 = process.env.GOTIFY_PRIORITY);
process.env.GOBOT_URL && (lliII1 = process.env.GOBOT_URL);
process.env.GOBOT_TOKEN && (ililIlii = process.env.GOBOT_TOKEN);
process.env.GOBOT_QQ && (ill1I1ll = process.env.GOBOT_QQ);
process.env.PUSH_KEY && (l1i1IiI1 = process.env.PUSH_KEY);
process.env.DEER_KEY && (iII1llii = process.env.DEER_KEY, i1iIllIl = process.env.DEER_URL);
process.env.CHAT_URL && (Il1lIl1 = process.env.CHAT_URL);
process.env.CHAT_TOKEN && (lI111Ii1 = process.env.CHAT_TOKEN);
process.env.QQ_SKEY && (QQ_SKEY = process.env.QQ_SKEY);
process.env.QQ_MODE && (QQ_MODE = process.env.QQ_MODE);
if (process.env.BARK_PUSH) {
  process.env.BARK_PUSH.indexOf("https") > -1 || process.env.BARK_PUSH.indexOf("http") > -1 ? l1Ili1II = process.env.BARK_PUSH : l1Ili1II = "https://api.day.app/" + process.env.BARK_PUSH;
  process.env.BARK_ICON && (i11i1iIi = process.env.BARK_ICON);
  process.env.BARK_SOUND && (II1III1I = process.env.BARK_SOUND);
  process.env.BARK_GROUP && (l11lIiIl = process.env.BARK_GROUP);
  process.env.BARK_LEVEL && (il1ll1 = process.env.BARK_LEVEL);
  process.env.BARK_URL && (llilIli1 = process.env.BARK_URL);
} else l1Ili1II && l1Ili1II.indexOf("https") === -1 && l1Ili1II.indexOf("http") === -1 && (l1Ili1II = "https://api.day.app/" + l1Ili1II);
process.env.TG_BOT_TOKEN && (IiilIliI = process.env.TG_BOT_TOKEN);
process.env.TG_USER_ID && (i1liIlI = process.env.TG_USER_ID);
if (process.env.TG_PROXY_AUTH) lli1il = process.env.TG_PROXY_AUTH;
if (process.env.TG_PROXY_HOST) iili1iIi = process.env.TG_PROXY_HOST;
if (process.env.TG_PROXY_PORT) liiii1li = process.env.TG_PROXY_PORT;
if (process.env.TG_API_HOST) ii1lll1l = process.env.TG_API_HOST;
process.env.DD_BOT_TOKEN && (lli1111i = process.env.DD_BOT_TOKEN, process.env.DD_BOT_SECRET && (iIlI1ilI = process.env.DD_BOT_SECRET));
process.env.QYWX_ORIGIN ? Iili1ll = process.env.QYWX_ORIGIN : Iili1ll = "https://qyapi.weixin.qq.com";
process.env.QYWX_KEY && (i1l1liil = process.env.QYWX_KEY);
process.env.QYWX_AM && (lII1iIIl = process.env.QYWX_AM);
process.env.IGOT_PUSH_KEY && (lI1111 = process.env.IGOT_PUSH_KEY);
process.env.PUSH_PLUS_TOKEN && (iIliiiIi = process.env.PUSH_PLUS_TOKEN);
process.env.PUSH_PLUS_USER && (li1l11ii = process.env.PUSH_PLUS_USER);
process.env.WXPUSHER_TOKEN && (I11III11 = process.env.WXPUSHER_TOKEN);
process.env.WXPUSHER_UID && (lllI1I1i = process.env.WXPUSHER_UID);
process.env.AIBOTK_KEY && (Ii11llIi = process.env.AIBOTK_KEY);
process.env.AIBOTK_TYPE && (IiII1lii = process.env.AIBOTK_TYPE);
process.env.AIBOTK_NAME && (IiliiII1 = process.env.AIBOTK_NAME);
process.env.FSKEY && (I11lIi1I = process.env.FSKEY);
process.env.SMTP_SERVICE && (l1II1ili = process.env.SMTP_SERVICE);
process.env.SMTP_EMAIL && (Ill11l1l = process.env.SMTP_EMAIL);
process.env.SMTP_PASSWORD && (ll111liI = process.env.SMTP_PASSWORD);
process.env.SMTP_NAME && (lI1Iil1 = process.env.SMTP_NAME);
process.env.PUSHME_KEY && (Il11I1l1 = process.env.PUSHME_KEY);
process.env.CHRONOCAT_URL && (l1iiI1il = process.env.CHRONOCAT_URL);
process.env.CHRONOCAT_QQ && (I1l1I1iI = process.env.CHRONOCAT_QQ);
process.env.CHRONOCAT_TOKEN && (lI1Iiiil = process.env.CHRONOCAT_TOKEN);
process.env.WEBHOOK_URL && (lIilI1i1 = process.env.WEBHOOK_URL);
process.env.WEBHOOK_BODY && (i1iii1l1 = process.env.WEBHOOK_BODY);
process.env.WEBHOOK_HEADERS && (IIi1lII1 = process.env.WEBHOOK_HEADERS);
process.env.WEBHOOK_METHOD && (lil1Iill = process.env.WEBHOOK_METHOD);
process.env.WEBHOOK_CONTENT_TYPE && (Iii1111 = process.env.WEBHOOK_CONTENT_TYPE);
async function i11iIlll(IllIi1li, l11i1iiI, ilI1Ilil = {}, lIIIliIi = "\n本脚本免费使用：https://github.com/sudojia/scripts") {
  l11i1iiI += lIIIliIi;
  let iIiI1iI = process.env.SKIP_PUSH_TITLE;
  if (iIiI1iI) {
    if (iIiI1iI.split("\n").includes(IllIi1li)) {
      console.info(IllIi1li + "在SKIP_PUSH_TITLE环境变量内，跳过推送！");
      return;
    }
  }
  await Promise.all([lli1ili(IllIi1li, l11i1iiI), li1illI1(IllIi1li, l11i1iiI), IiII1il1(IllIi1li, l11i1iiI)]);
  IllIi1li = IllIi1li.match(/.*?(?=\s?-)/g) ? IllIi1li.match(/.*?(?=\s?-)/g)[0] : IllIi1li;
  await Promise.all([I1IliilI(IllIi1li, l11i1iiI, ilI1Ilil), iiI1iIi(IllIi1li, l11i1iiI), IillIII(IllIi1li, l11i1iiI), i1Ili1il(IllIi1li, l11i1iiI), Iii111II(IllIi1li, l11i1iiI), l1IiIIli(IllIi1li, l11i1iiI, ilI1Ilil), lii1lIi(IllIi1li, l11i1iiI), iIIilIi1(IllIi1li, l11i1iiI), ilIl1IlI(IllIi1li, l11i1iiI), Ii1Il1ll(IllIi1li, l11i1iiI), liillii(IllIi1li, l11i1iiI), Ii1i11(IllIi1li, l11i1iiI), llII1l11(IllIi1li, l11i1iiI), l11ii11l(IllIi1li, l11i1iiI, ilI1Ilil), liiiil(IllIi1li, l11i1iiI), lllI1iII(IllIi1li, l11i1iiI)]);
}
function iIIilIi1(ilI1Ii1, I11ll1il) {
  return new Promise(II1iI1Il => {
    if (II1iiiiI && III11l1l) {
      const IiiiIlI1 = {
        "url": II1iiiiI + "/message?token=" + III11l1l,
        "body": "title=" + encodeURIComponent(ilI1Ii1) + "&message=" + encodeURIComponent(I11ll1il) + "&priority=" + liiii1l1,
        "headers": {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      };
      ili1IlI.post(IiiiIlI1, (iiIiIiI, l1Il1l, lIIlil1i) => {
        try {
          iiIiIiI ? (console.log("\ngotify发送通知调用API失败！！\n"), console.log(iiIiIiI)) : (lIIlil1i = JSON.parse(lIIlil1i), lIIlil1i.id ? console.log("\ngotify发送通知消息成功🎉\n") : console.log(lIIlil1i.message + "\n"));
        } catch (Ill1il11) {
          ili1IlI.logErr(Ill1il11, l1Il1l);
        } finally {
          II1iI1Il();
        }
      });
    } else II1iI1Il();
  });
}
function lii1lIi(ilIiIIIi, i11l1i1i) {
  return new Promise(IIIllI11 => {
    if (lliII1) {
      const l1iIII1 = {
        "url": lliII1 + "?access_token=" + ililIlii + "&" + ill1I1ll,
        "json": {
          "message": ilIiIIIi + "\n" + i11l1i1i
        },
        "headers": {
          "Content-Type": "application/json"
        },
        "timeout": IIli1i11
      };
      ili1IlI.post(l1iIII1, (llIIIiiI, iiIIll11, iI1il111) => {
        try {
          if (llIIIiiI) console.log("\n发送go-cqhttp通知调用API失败！！\n"), console.log(llIIIiiI);else {
            iI1il111 = JSON.parse(iI1il111);
            if (iI1il111.retcode === 0) console.log("\ngo-cqhttp发送通知消息成功🎉\n");else iI1il111.retcode === 100 ? console.log("\ngo-cqhttp发送通知消息异常: " + iI1il111.errmsg + "\n") : console.log("\ngo-cqhttp发送通知消息异常\n" + JSON.stringify(iI1il111));
          }
        } catch (l1111) {
          ili1IlI.logErr(l1111, iiIIll11);
        } finally {
          IIIllI11(iI1il111);
        }
      });
    } else IIIllI11();
  });
}
function lli1ili(IiIIl11i, ii11li1) {
  return new Promise(IIii1IIi => {
    if (l1i1IiI1) {
      ii11li1 = ii11li1.replace(/[\n\r]/g, "\n\n");
      const lIii1i1 = {
        "url": l1i1IiI1.includes("SCT") ? "https://sctapi.ftqq.com/" + l1i1IiI1 + ".send" : "https://sc.ftqq.com/" + l1i1IiI1 + ".send",
        "body": "text=" + IiIIl11i + "&desp=" + ii11li1,
        "headers": {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        "timeout": IIli1i11
      };
      ili1IlI.post(lIii1i1, (i1Il1IiI, ilIliIi, iIii1II) => {
        try {
          if (i1Il1IiI) console.log("\n发送通知调用API失败！！\n"), console.log(i1Il1IiI);else {
            iIii1II = JSON.parse(iIii1II);
            if (iIii1II.errno === 0 || iIii1II.data.errno === 0) console.log("\nserver酱发送通知消息成功🎉\n");else iIii1II.errno === 1024 ? console.log("\nserver酱发送通知消息异常: " + iIii1II.errmsg + "\n") : console.log("\nserver酱发送通知消息异常\n" + JSON.stringify(iIii1II));
          }
        } catch (liliiii1) {
          ili1IlI.logErr(liliiii1, ilIliIi);
        } finally {
          IIii1IIi(iIii1II);
        }
      });
    } else IIii1IIi();
  });
}
function Ii1Il1ll(l1iI1IiI, iiiIiIl1) {
  return new Promise(iIil1Iil => {
    if (iII1llii) {
      iiiIiIl1 = encodeURI(iiiIiIl1);
      const i1il1 = {
        "url": i1iIllIl || "https://api2.pushdeer.com/message/push",
        "body": "pushkey=" + iII1llii + "&text=" + l1iI1IiI + "&desp=" + iiiIiIl1 + "&type=markdown",
        "headers": {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        "timeout": IIli1i11
      };
      ili1IlI.post(i1il1, (i1I1lIi, iII1liII, iiiiI11l) => {
        try {
          i1I1lIi ? (console.log("\n发送通知调用API失败！！\n"), console.log(i1I1lIi)) : (iiiiI11l = JSON.parse(iiiiI11l), iiiiI11l.content.result.length !== undefined && iiiiI11l.content.result.length > 0 ? console.log("\nPushDeer发送通知消息成功🎉\n") : console.log("\nPushDeer发送通知消息异常\n" + JSON.stringify(iiiiI11l)));
        } catch (il11iiii) {
          ili1IlI.logErr(il11iiii, iII1liII);
        } finally {
          iIil1Iil(iiiiI11l);
        }
      });
    } else iIil1Iil();
  });
}
function ilIl1IlI(iI11ll1I, iIiI1liI) {
  return new Promise(IlIi1il => {
    if (Il1lIl1 && lI111Ii1) {
      iIiI1liI = encodeURI(iIiI1liI);
      const iIIl1l = {
        "url": "" + Il1lIl1 + lI111Ii1,
        "body": "payload={\"text\":\"" + iI11ll1I + "\n" + iIiI1liI + "\"}",
        "headers": {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      };
      ili1IlI.post(iIIl1l, (iiIil1i, li1iIiii, il1i1il) => {
        try {
          iiIil1i ? (console.log("\n发送通知调用API失败！！\n"), console.log(iiIil1i)) : (il1i1il = JSON.parse(il1i1il), il1i1il.success ? console.log("\nChat发送通知消息成功🎉\n") : console.log("\nChat发送通知消息异常\n" + JSON.stringify(il1i1il)));
        } catch (ili1llll) {
          ili1IlI.logErr(ili1llll);
        } finally {
          IlIi1il(il1i1il);
        }
      });
    } else IlIi1il();
  });
}
function I1IliilI(iI1l1ll, il1iIIl1, iIi1II1l = {}) {
  return new Promise(ii1iI11I => {
    if (l1Ili1II) {
      const ill1i1I1 = {
        "url": l1Ili1II + "/" + encodeURIComponent(iI1l1ll) + "/" + encodeURIComponent(il1iIIl1) + "?icon=" + i11i1iIi + "&sound=" + II1III1I + "&group=" + l11lIiIl + "&level=" + il1ll1 + "&url=" + llilIli1 + "&" + ill111li.stringify(iIi1II1l),
        "headers": {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        "timeout": IIli1i11
      };
      ili1IlI.get(ill1i1I1, (i1il111l, ll1lllli, IliIiIiI) => {
        try {
          i1il111l ? (console.log("\nBark APP发送通知调用API失败！！\n"), console.log(i1il111l)) : (IliIiIiI = JSON.parse(IliIiIiI), IliIiIiI.code === 200 ? console.log("\nBark APP发送通知消息成功🎉\n") : console.log(IliIiIiI.message + "\n"));
        } catch (IilI1i1) {
          ili1IlI.logErr(IilI1i1, ll1lllli);
        } finally {
          ii1iI11I();
        }
      });
    } else ii1iI11I();
  });
}
function iiI1iIi(l1l1IIil, liIill11) {
  return new Promise(lll1lIl => {
    if (IiilIliI && i1liIlI) {
      const IilII1l1 = {
        "url": ii1lll1l + "/bot" + IiilIliI + "/sendMessage",
        "json": {
          "chat_id": "" + i1liIlI,
          "text": l1l1IIil + "\n\n" + liIill11,
          "disable_web_page_preview": true
        },
        "headers": {
          "Content-Type": "application/json"
        },
        "timeout": IIli1i11
      };
      if (iili1iIi && liiii1li) {
        const {
            HttpProxyAgent: lliiiiII,
            HttpsProxyAgent: llI1lIIi
          } = require("hpagent"),
          iiiIil1l = {
            "keepAlive": true,
            "keepAliveMsecs": 1000,
            "maxSockets": 256,
            "maxFreeSockets": 256,
            "proxy": "http://" + lli1il + iili1iIi + ":" + liiii1li
          },
          IIlIl1I = new lliiiiII(iiiIil1l),
          IlIli1Ii = new llI1lIIi(iiiIil1l),
          il1illll = {
            "http": IIlIl1I,
            "https": IlIli1Ii
          };
        Object.assign(iiiIil1l, {
          "agent": il1illll
        });
      }
      ili1IlI.post(IilII1l1, (llIIlIlI, liIlIIIl, liII11Ii) => {
        try {
          if (llIIlIlI) console.log("\ntelegram发送通知消息失败！！\n"), console.log(llIIlIlI);else {
            liII11Ii = JSON.parse(liII11Ii);
            if (liII11Ii.ok) console.log("\nTelegram发送通知消息成功🎉。\n");else {
              if (liII11Ii.error_code === 400) console.log("\n请主动给bot发送一条消息并检查接收用户ID是否正确。\n");else liII11Ii.error_code === 401 && console.log("\nTelegram bot token 填写错误。\n");
            }
          }
        } catch (IIII1lI1) {
          ili1IlI.logErr(IIII1lI1, liIlIIIl);
        } finally {
          lll1lIl(liII11Ii);
        }
      });
    } else lll1lIl();
  });
}
function IillIII(iI1lillI, iIlI1lil) {
  return new Promise(IIl1l1Il => {
    const i1iilill = {
      "url": "https://oapi.dingtalk.com/robot/send?access_token=" + lli1111i,
      "json": {
        "msgtype": "text",
        "text": {
          "content": iI1lillI + "\n\n" + iIlI1lil
        }
      },
      "headers": {
        "Content-Type": "application/json"
      },
      "timeout": IIli1i11
    };
    if (lli1111i && iIlI1ilI) {
      const lll1li1I = require("crypto"),
        iliIil1l = Date.now(),
        ll1illI = lll1li1I.createHmac("sha256", iIlI1ilI);
      ll1illI.update(iliIil1l + "\n" + iIlI1ilI);
      const iII1II1l = encodeURIComponent(ll1illI.digest("base64"));
      i1iilill.url = i1iilill.url + "&timestamp=" + iliIil1l + "&sign=" + iII1II1l;
      ili1IlI.post(i1iilill, (i1i1IIiI, l1lI1l1l, iilII1ll) => {
        try {
          i1i1IIiI ? (console.log("\n钉钉发送通知消息失败！！\n"), console.log(i1i1IIiI)) : (iilII1ll = JSON.parse(iilII1ll), iilII1ll.errcode === 0 ? console.log("\n钉钉发送通知消息成功🎉。\n") : console.log(iilII1ll.errmsg + "\n"));
        } catch (i1iiIiIl) {
          ili1IlI.logErr(i1iiIiIl, l1lI1l1l);
        } finally {
          IIl1l1Il(iilII1ll);
        }
      });
    } else lli1111i ? ili1IlI.post(i1iilill, (lIi1IiI1, i1I1ii1l, IIIlll) => {
      try {
        lIi1IiI1 ? (console.log("\n钉钉发送通知消息失败！！\n"), console.log(lIi1IiI1)) : (IIIlll = JSON.parse(IIIlll), IIIlll.errcode === 0 ? console.log("\n钉钉发送通知消息完成。\n") : console.log(IIIlll.errmsg + "\n"));
      } catch (IIiiiliI) {
        ili1IlI.logErr(IIiiiliI, i1I1ii1l);
      } finally {
        IIl1l1Il(IIIlll);
      }
    }) : IIl1l1Il();
  });
}
function i1Ili1il(liiiIIii, lIIliiI) {
  return new Promise(ll1Ii1iI => {
    const I1iIIlI1 = {
      "url": Iili1ll + "/cgi-bin/webhook/send?key=" + i1l1liil,
      "json": {
        "msgtype": "text",
        "text": {
          "content": liiiIIii + "\n\n" + lIIliiI
        }
      },
      "headers": {
        "Content-Type": "application/json"
      },
      "timeout": IIli1i11
    };
    if (i1l1liil) {
      ili1IlI.post(I1iIIlI1, (il11I1ll, IiiiilIl, ll1I11II) => {
        try {
          il11I1ll ? (console.log("\n企业微信发送通知消息失败！！\n"), console.log(il11I1ll)) : (ll1I11II = JSON.parse(ll1I11II), ll1I11II.errcode === 0 ? console.log("\n企业微信发送通知消息成功🎉。\n") : console.log(ll1I11II.errmsg + "\n"));
        } catch (lI11IliI) {
          ili1IlI.logErr(lI11IliI, IiiiilIl);
        } finally {
          ll1Ii1iI(ll1I11II);
        }
      });
    } else {
      ll1Ii1iI();
    }
  });
}
function iiiI1I11(il1IiIlI) {
  const ll1i1Ii1 = lII1iIIl.split(",");
  if (ll1i1Ii1[2]) {
    const i11iiIl1 = ll1i1Ii1[2].split("|");
    let i1III1l1 = "";
    for (let ii1lii1 = 0; ii1lii1 < i11iiIl1.length; ii1lii1++) {
      const Illlilil = "签到号 " + (ii1lii1 + 1);
      il1IiIlI.match(Illlilil) && (i1III1l1 = i11iiIl1[ii1lii1]);
    }
    if (!i1III1l1) i1III1l1 = ll1i1Ii1[2];
    return i1III1l1;
  } else {
    return "@all";
  }
}
async function Iii111II(IiIi1I11, lli1liiI) {
  const IiII11il = 900;
  if (lli1liiI.length > IiII11il) {
    let ll1ill1I = lli1liiI.substr(0, IiII11il) + "\n==More==";
    await IIIl1i1(IiIi1I11, ll1ill1I);
    await Iii111II(IiIi1I11, lli1liiI.substr(IiII11il));
  } else return await IIIl1i1(IiIi1I11, lli1liiI);
}
function IIIl1i1(llIlIiiI, I1Iiliii) {
  return new Promise(iliIllll => {
    if (lII1iIIl) {
      const liilIIll = lII1iIIl.split(","),
        I1liIIl = {
          "url": Iili1ll + "/cgi-bin/gettoken",
          "json": {
            "corpid": "" + liilIIll[0],
            "corpsecret": "" + liilIIll[1]
          },
          "headers": {
            "Content-Type": "application/json"
          },
          "timeout": IIli1i11
        };
      ili1IlI.post(I1liIIl, (l1ll1li1, l1lIII1I, lilii1i1) => {
        let llii1liI = I1Iiliii.replace(/\n/g, "<br/>"),
          Ili1lIIl = JSON.parse(lilii1i1),
          II1i11i = Ili1lIIl.access_token,
          l1lIliI;
        switch (liilIIll[4]) {
          case "0":
            l1lIliI = {
              "msgtype": "textcard",
              "textcard": {
                "title": "" + llIlIiiI,
                "description": "" + I1Iiliii,
                "url": "https://github.com/whyour/qinglong",
                "btntxt": "更多"
              }
            };
            break;
          case "1":
            l1lIliI = {
              "msgtype": "text",
              "text": {
                "content": llIlIiiI + "\n\n" + I1Iiliii
              }
            };
            break;
          default:
            l1lIliI = {
              "msgtype": "mpnews",
              "mpnews": {
                "articles": [{
                  "title": "" + llIlIiiI,
                  "thumb_media_id": "" + liilIIll[4],
                  "author": "智能助手",
                  "content_source_url": "",
                  "content": "" + llii1liI,
                  "digest": "" + I1Iiliii
                }]
              }
            };
        }
        !liilIIll[4] && (l1lIliI = {
          "msgtype": "text",
          "text": {
            "content": llIlIiiI + "\n\n" + I1Iiliii
          }
        });
        l1lIliI = {
          "url": Iili1ll + "/cgi-bin/message/send?access_token=" + II1i11i,
          "json": {
            "touser": "" + iiiI1I11(I1Iiliii),
            "agentid": "" + liilIIll[3],
            "safe": "0",
            ...l1lIliI
          },
          "headers": {
            "Content-Type": "application/json"
          }
        };
        ili1IlI.post(l1lIliI, (i11lI1I, li1Ii11i, i1iiIlli) => {
          try {
            i11lI1I ? (console.log("\n成员ID:" + iiiI1I11(I1Iiliii) + "企业微信应用消息发送通知消息失败！！\n"), console.log(i11lI1I)) : (i1iiIlli = JSON.parse(i1iiIlli), i1iiIlli.errcode === 0 ? console.log("\n成员ID:" + iiiI1I11(I1Iiliii) + "企业微信应用消息发送通知消息成功🎉。\n") : console.log(i1iiIlli.errmsg + "\n"));
          } catch (i1ili1il) {
            ili1IlI.logErr(i1ili1il, li1Ii11i);
          } finally {
            iliIllll(i1iiIlli);
          }
        });
      });
    } else iliIllll();
  });
}
function l1IiIIli(i1IilIIi, lIli11ii, IilI11il = {}) {
  return new Promise(lII1iI1i => {
    if (lI1111) {
      const IiIiIiI = new RegExp("^[a-zA-Z0-9]{24}$");
      if (!IiIiIiI.test(lI1111)) {
        console.log("您所提供的IGOT_PUSH_KEY无效\n");
        lII1iI1i();
        return;
      }
      const liIllliI = {
        "url": "https://push.hellyw.com/" + lI1111.toLowerCase(),
        "body": "title=" + i1IilIIi + "&content=" + lIli11ii + "&" + ill111li.stringify(IilI11il),
        "headers": {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        "timeout": IIli1i11
      };
      ili1IlI.post(liIllliI, (li1llii1, l1il1ili, IliI11lI) => {
        try {
          if (li1llii1) console.log("\n发送通知调用API失败！！\n"), console.log(li1llii1);else {
            if (typeof IliI11lI === "string") IliI11lI = JSON.parse(IliI11lI);
            IliI11lI.ret === 0 ? console.log("\niGot发送通知消息成功🎉\n") : console.log("\niGot发送通知消息失败：" + IliI11lI.errMsg + "\n");
          }
        } catch (l111IiI) {
          ili1IlI.logErr(l111IiI, l1il1ili);
        } finally {
          lII1iI1i(IliI11lI);
        }
      });
    } else lII1iI1i();
  });
}
function li1illI1(il1li1l, lII11li) {
  return new Promise(l1IliI => {
    if (iIliiiIi) {
      lII11li = lII11li.replace(/[\n\r]/g, "<br>");
      const lIl1Ii11 = {
          "token": "" + iIliiiIi,
          "title": "" + il1li1l,
          "content": "" + lII11li,
          "topic": "" + li1l11ii
        },
        Iilllili = {
          "url": "https://www.pushplus.plus/send",
          "body": JSON.stringify(lIl1Ii11),
          "headers": {
            "Content-Type": " application/json"
          },
          "timeout": IIli1i11
        };
      ili1IlI.post(Iilllili, (I1l1i11I, II111liI, lIiI1I1i) => {
        try {
          I1l1i11I ? (console.log("\npush+发送" + (li1l11ii ? "一对多" : "一对一") + "通知消息失败！！\n"), console.log(I1l1i11I)) : (lIiI1I1i = JSON.parse(lIiI1I1i), lIiI1I1i.code === 200 ? console.log("\npush+发送" + (li1l11ii ? "一对多" : "一对一") + "通知消息完成。\n") : console.log("\npush+发送" + (li1l11ii ? "一对多" : "一对一") + "通知消息失败：" + lIiI1I1i.msg + "\n"));
        } catch (liiIiiI1) {
          ili1IlI.logErr(liiIiiI1, II111liI);
        } finally {
          l1IliI(lIiI1I1i);
        }
      });
    } else l1IliI();
  });
}
function IiII1il1(lll11lIl, l1lIiiI1) {
  return new Promise(l1iI1iII => {
    if (I11III11 && lllI1I1i) {
      l1lIiiI1 = l1lIiiI1.replace(/[\n\r]/g, "<br>");
      const IIIIilii = {
          "appToken": "" + I11III11,
          "uids": [lllI1I1i],
          "summary": "" + lll11lIl,
          "content": "" + l1lIiiI1,
          "contentType": 2,
          "url": "https://github.com/sudojia/scripts/"
        },
        IlIllIIl = {
          "url": "https://wxpusher.zjiecode.com/api/send/message",
          "body": JSON.stringify(IIIIilii),
          "headers": {
            "Content-Type": " application/json"
          },
          "timeout": IIli1i11
        };
      ili1IlI.post(IlIllIIl, (I11i111l, iII11l1l, Il11iiii) => {
        try {
          I11i111l ? console.error(I11i111l) : (Il11iiii = JSON.parse(Il11iiii), 1000 === Il11iiii.code ? console.log("\nwxpusher发送通知消息完成🎉\n") : console.log("\nwxpusher发送通知消息失败：" + Il11iiii.msg + "\n"));
        } catch (I1IlIlii) {
          ili1IlI.logErr(I1IlIlii, iII11l1l);
        } finally {
          l1iI1iII(Il11iiii);
        }
      });
    } else l1iI1iII();
  });
}
function liillii(i1lIIl1l, llIiiiii) {
  return new Promise(ilIlI1I1 => {
    if (Ii11llIi && IiII1lii && IiliiII1) {
      let lllIlliI = {},
        l11I1IIi = "";
      switch (IiII1lii) {
        case "room":
          l11I1IIi = "https://api-bot.aibotk.com/openapi/v1/chat/room", lllIlliI = {
            "apiKey": "" + Ii11llIi,
            "roomName": "" + IiliiII1,
            "message": {
              "type": 1,
              "content": "【青龙快讯】\n\n" + i1lIIl1l + "\n" + llIiiiii
            }
          };
          break;
        case "contact":
          l11I1IIi = "https://api-bot.aibotk.com/openapi/v1/chat/contact", lllIlliI = {
            "apiKey": "" + Ii11llIi,
            "name": "" + IiliiII1,
            "message": {
              "type": 1,
              "content": "【青龙快讯】\n\n" + i1lIIl1l + "\n" + llIiiiii
            }
          };
          break;
      }
      const ll1Iiiii = {
        "url": l11I1IIi,
        "json": lllIlliI,
        "headers": {
          "Content-Type": "application/json"
        },
        "timeout": IIli1i11
      };
      ili1IlI.post(ll1Iiiii, (llIli1, ii11III, I1iIilI1) => {
        try {
          llIli1 ? (console.log("\n智能微秘书发送通知消息失败！！\n"), console.log(llIli1)) : (I1iIilI1 = JSON.parse(I1iIilI1), I1iIilI1.code === 0 ? console.log("\n智能微秘书发送通知消息成功🎉。\n") : console.log(I1iIilI1.error + "\n"));
        } catch (I1iiliii) {
          ili1IlI.logErr(I1iiliii, ii11III);
        } finally {
          ilIlI1I1(I1iIilI1);
        }
      });
    } else ilIlI1I1();
  });
}
function Ii1i11(I1iIilI, lI1IIi1l) {
  return new Promise(IliIli1l => {
    if (I11lIi1I) {
      const liiii1ll = {
        "url": "https://open.feishu.cn/open-apis/bot/v2/hook/" + I11lIi1I,
        "json": {
          "msg_type": "text",
          "content": {
            "text": I1iIilI + "\n\n" + lI1IIi1l
          }
        },
        "headers": {
          "Content-Type": "application/json"
        },
        "timeout": IIli1i11
      };
      ili1IlI.post(liiii1ll, (Ill1iIlI, IilI1i1I, ll1i1l1) => {
        try {
          Ill1iIlI ? (console.log("\n发送通知调用API失败！！\n"), console.log(Ill1iIlI)) : (ll1i1l1 = JSON.parse(ll1i1l1), ll1i1l1.StatusCode === 0 || ll1i1l1.code === 0 ? console.log("\n飞书发送通知消息成功🎉\n") : console.log(ll1i1l1.msg + "\n"));
        } catch (il1l1lii) {
          ili1IlI.logErr(il1l1lii, IilI1i1I);
        } finally {
          IliIli1l(ll1i1l1);
        }
      });
    } else {
      IliIli1l();
    }
  });
}
async function llII1l11(l1liili1, IiI1i1il) {
  if (![Ill11l1l, ll111liI].every(Boolean) || !l1II1ili) {
    return;
  }
  try {
    const ill1i11l = require("nodemailer"),
      lil1i11i = ill1i11l.createTransport({
        "service": l1II1ili,
        "auth": {
          "user": Ill11l1l,
          "pass": ll111liI
        }
      }),
      IIiIiiII = lI1Iil1 ? "\"" + lI1Iil1 + "\" <" + Ill11l1l + ">" : Ill11l1l,
      iI1llIi1 = await lil1i11i.sendMail({
        "from": IIiIiiII,
        "to": IIiIiiII,
        "subject": l1liili1,
        "html": "" + IiI1i1il.replace(/\n/g, "<br/>")
      });
    lil1i11i.close();
    if (iI1llIi1.messageId) return console.log("\nSMTP发送通知消息成功🎉\n"), true;
    console.log("\nSMTP发送通知消息失败！！\n");
  } catch (iI11ill1) {
    console.log("\nSMTP发送通知消息出现错误！！\n");
    console.log(iI11ill1);
  }
}
function l11ii11l(II1IilI1, IliII1Il, ilii11li = {}) {
  return new Promise(iII1lliI => {
    if (Il11I1l1) {
      const illiI1l1 = {
        "url": "https://push.i-i.me?push_key=" + Il11I1l1,
        "json": {
          "title": II1IilI1,
          "content": IliII1Il,
          ...ilii11li
        },
        "headers": {
          "Content-Type": "application/json"
        },
        "timeout": IIli1i11
      };
      ili1IlI.post(illiI1l1, (l11iil1l, II1lIl1i, ii1iIll) => {
        try {
          l11iil1l ? (console.log("\nPushMeNotify发送通知调用API失败！！\n"), console.log(l11iil1l)) : ii1iIll === "success" ? console.log("\nPushMe发送通知消息成功🎉\n") : console.log("\n" + ii1iIll + "\n");
        } catch (iiiI111) {
          ili1IlI.logErr(iiiI111, II1lIl1i);
        } finally {
          iII1lliI(ii1iIll);
        }
      });
    } else {
      iII1lliI();
    }
  });
}
function liiiil(iiIIiill, llll) {
  return new Promise(IIIliili => {
    if (!lI1Iiiil || !I1l1I1iI || !l1iiI1il) {
      IIIliili();
      return;
    }
    let iI11l1Ii = I1l1I1iI.match(/user_id=(\d+)/g),
      Iill11l = I1l1I1iI.match(/group_id=(\d+)/g);
    const ii1111li = iI11l1Ii ? iI11l1Ii.map(iIllI => iIllI.split("=")[1]) : [],
      ll11i11 = Iill11l ? Iill11l.map(ill1IIl1 => ill1IIl1.split("=")[1]) : [],
      li111l = l1iiI1il + "/api/message/send",
      IIiIlIlI = {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + lI1Iiiil
      };
    for (const [IIlil1i1, lIil11Ii] of [[1, ii1111li], [2, ll11i11]]) {
      if (!lIil11Ii) {
        continue;
      }
      for (const II1Ilii1 of lIil11Ii) {
        const III1il1I = {
            "peer": {
              "chatType": IIlil1i1,
              "peerUin": II1Ilii1
            },
            "elements": [{
              "elementType": 1,
              "textElement": {
                "content": iiIIiill + "\n\n" + llll
              }
            }]
          },
          lililIi1 = {
            "url": li111l,
            "json": III1il1I,
            "headers": IIiIlIlI,
            "timeout": IIli1i11
          };
        ili1IlI.post(lililIi1, (llI1I1, IIII1lII, lil1lIIi) => {
          try {
            llI1I1 ? (console.log("\nChronocat发送QQ通知消息失败！！\n"), console.log(llI1I1)) : (lil1lIIi = JSON.parse(lil1lIIi), IIlil1i1 === 1 ? console.log("\nQQ个人消息:" + lIil11Ii + "推送成功！") : console.log("\nQQ群消息:" + lIil11Ii + "推送成功！"));
          } catch (IiIi1III) {
            ili1IlI.logErr(IiIi1III, IIII1lII);
          } finally {
            IIIliili(lil1lIIi);
          }
        });
      }
    }
  });
}
function i1liliI1(IIiI11i1, lIilIi1l, i11iIIiI) {
  if (IIiI11i1) {
    return IIiI11i1 = IIiI11i1.replaceAll("$title", lIilIi1l), IIiI11i1.replaceAll("$content", i11iIIiI);
  }
  return IIiI11i1;
}
function lllI1iII(iliiiiI1, Ii1il11) {
  return new Promise(lllI1IIi => {
    if (!lIilI1i1.includes("$title") && !i1iii1l1.includes("$title")) {
      lllI1IIi();
      return;
    }
    const Ii1l1l = li1Iilll(IIi1lII1),
      iIliI = Ili1liiI(i1iii1l1, Iii1111, Iiiii1I => i1liliI1(Iiiii1I, iliiiiI1, Ii1il11)),
      I1lIIIi1 = iiIl11ll(Iii1111, iIliI),
      IIllIl1l = {
        "method": lil1Iill,
        "headers": Ii1l1l,
        "allowGetBody": true,
        ...I1lIIIi1,
        "timeout": IIli1i11,
        "retry": 1
      };
    if (lil1Iill) {
      const II1il1Il = lIilI1i1.replaceAll("$title", encodeURIComponent(iliiiiI1)).replaceAll("$content", encodeURIComponent(Ii1il11));
      lll1I1l1(II1il1Il, IIllIl1l).then(Il111I1i => {
        try {
          Il111I1i.statusCode !== 200 ? console.log("\n自定义发送通知消息失败！！\n" + Il111I1i.body) : console.log("\n自定义发送通知消息成功🎉。\n" + Il111I1i.body);
        } catch (Ii1Iil11) {
          ili1IlI.logErr(Ii1Iil11, Il111I1i);
        } finally {
          lllI1IIi(Il111I1i.body);
        }
      });
    } else lllI1IIi();
  });
}
function i11Il11l(ll11illi, lIlIIIi1) {
  const iliiiII1 = /(\w+):\s*((?:(?!\n\w+:).)*)/g,
    ill1li11 = {};
  let lII1Ill;
  while ((lII1Ill = iliiiII1.exec(ll11illi)) !== null) {
    const [, Il1llli1, l1l1lII] = lII1Ill,
      IIlI1I1i = Il1llli1.trim();
    if (!IIlI1I1i || ill1li11[IIlI1I1i]) {
      continue;
    }
    let il1IilI = l1l1lII.trim();
    try {
      il1IilI = lIlIIIi1 ? lIlIIIi1(il1IilI) : il1IilI;
      const IiI1lll = JSON.parse(il1IilI);
      ill1li11[IIlI1I1i] = IiI1lll;
    } catch (iIllil1l) {
      ill1li11[IIlI1I1i] = il1IilI;
    }
  }
  return ill1li11;
}
function li1Iilll(IlliIii) {
  if (!IlliIii) return {};
  const lII11lII = {};
  let iil1i1l1, il1ll111, i1I1I1li;
  return IlliIii && IlliIii.split("\n").forEach(function Ii1i1ll(IIlI1ii1) {
    i1I1I1li = IIlI1ii1.indexOf(":");
    iil1i1l1 = IIlI1ii1.substring(0, i1I1I1li).trim().toLowerCase();
    il1ll111 = IIlI1ii1.substring(i1I1I1li + 1).trim();
    if (!iil1i1l1) {
      return;
    }
    lII11lII[iil1i1l1] = lII11lII[iil1i1l1] ? lII11lII[iil1i1l1] + ", " + il1ll111 : il1ll111;
  }), lII11lII;
}
function Ili1liiI(l1liillI, IilI1i1l, i11iil) {
  if (IilI1i1l === "text/plain" || !l1liillI) {
    return i11iil && l1liillI ? i11iil(l1liillI) : l1liillI;
  }
  const liIilli1 = i11Il11l(l1liillI, i11iil);
  switch (IilI1i1l) {
    case "multipart/form-data":
      return Object.keys(liIilli1).reduce((l1IiI11l, i1l1l11l) => {
        return l1IiI11l.append(i1l1l11l, liIilli1[i1l1l11l]), l1IiI11l;
      }, new FormData());
    case "application/x-www-form-urlencoded":
      return Object.keys(liIilli1).reduce((I1111Iii, IlliI111) => {
        return I1111Iii ? I1111Iii + "&" + IlliI111 + "=" + liIilli1[IlliI111] : IlliI111 + "=" + liIilli1[IlliI111];
      });
  }
  return liIilli1;
}
function iiIl11ll(I1Iill, IIll1Ii) {
  if (!IIll1Ii) return {};
  switch (I1Iill) {
    case "application/json":
      return {
        "json": IIll1Ii
      };
    case "multipart/form-data":
      return {
        "form": IIll1Ii
      };
    case "application/x-www-form-urlencoded":
    case "text/plain":
      return {
        "body": IIll1Ii
      };
  }
  return {};
}
function l1IIII1l(llIil1Ii, I1ll1il1, iI11iiiI, lI1I1liI) {
  if (!llIil1Ii.includes("$title") && !I1ll1il1.includes("$title")) {
    return {};
  }
  return {
    "formatUrl": llIil1Ii.replaceAll("$title", encodeURIComponent(iI11iiiI)).replaceAll("$content", encodeURIComponent(lI1I1liI)),
    "formatBody": I1ll1il1.replaceAll("$title", iI11iiiI).replaceAll("$content", lI1I1liI)
  };
}
module.exports = {
  "sendNotify": i11iIlll,
  "BARK_PUSH": l1Ili1II
};