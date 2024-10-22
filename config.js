//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "arslanmdofficial@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923237045919@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl =
  process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website =
  process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923237045919";
global.owner = process.env.OWNER_NUMBER || "923237045919";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0VqTUdDM09tRjJmdFJOSm01Njc4WkdkU2xyd21sZkNIY1FJV3RVcVhVZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaWNycFpiTXZKcG44UkU3VjJyZFBhVHpQRXJsSUZmd2RFVVlUaDdkQkhXRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRTDZsYzBNaGFnODYvWDF2SmpUR29pdWEwQ2huL2NPbXR0SVFrWGxPNlZBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxbXI4RmlkTmhHVWREVTlYRDJCVktBSnhYdGZxaitYMlI0QVN6aVQ0bHdjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVGbVduOGdxbVJaZmh0NXRKTTVUZ1hqMTA3NEcrOGJiSDltT3RYL25ubXc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InV6S095VkM4bGdlMk9RK0VBM3F4Lys2NGxMVk1ZT2dZdXlGdUZxaGt5Q3c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUh2VllYcUZ2QlFiVjdnRktzanRDUTN4aGNKUWJ1K002dmN4Wm5xU0VWMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZE15MTRQRVV1a2J5Y2Rwc01PM2pFMmhXQklPNHp0OEpaT3g1Nm5BcVhCST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFGamtEcnV1eExSeGVjSUIydUJIdmF0TGh5RkpRTE16ZUNDK2x3Wk1Sckc3ZzNid3BEWUhNRGFoaUR0NGtvNldCalgyU0g2WWM4MjdTZmxvTm96ZEN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NSwiYWR2U2VjcmV0S2V5IjoiMVpQc2tFYmdLSE9GS0g1NlpLbk1IYm52WTNyZ3JGUG1PWmU5T003WUp4RT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOlt7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMyMzcwNDU5MTlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNUZDRTU1RUFBQUJBMTA4NjhGNkY2QUQxOUY0QTVBOTUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyOTM1MDY5MH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoic180YW1aOTBSUVNNejl0TVpsMlVMZyIsInBob25lSWQiOiJjNDUzYjcxZC01ZWJiLTQ2OWMtYjhiYS04ZGE4NTlmNGExYTQiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUFIZ01BYWtZOE05aWsyYlppTWYrTGhqMUNNPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkpWSEs4RmJiMWJoRzBCaWxFVERDWnA4MGNXVT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJBTlo3RkNGOCIsIm1lIjp7ImlkIjoiOTIzMjM3MDQ1OTE5OjE0QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkFyc2xhbk1EIOKImiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSnlhekxBRkVJK1l6N2dHR0E0Z0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoicXVaWkM3d2tSc3JkZ3JEK2tJN05vOGRZVVJSalpzZGx4MWhwbGZUbG5Ccz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiUy95RCtodDljdyt5anRWUWFXeHd1bWdRMnpRTmUyMzI4cTlFb3VTZTZRTWFveFhrK0kxYmhxYXp0bGVrVmp6eURDN1FtOWE3bzhFZHdiKzM5UW9rQXc9PSIsImRldmljZVNpZ25hdHVyZSI6IjVTbFJOaXFSYnEwcXJCWEI4ck9iU2tjY0dEdkZBT2szRldYSzd0dHhzMTB1VHJkV1kwUnQ1VHdiWVpLaG1jYjhoL0tLSVNwbUJaNlJpajIzYnlkTENRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMjM3MDQ1OTE5OjE0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmFybVdRdThKRWJLM1lLdy9wQ096YVBIV0ZFVVkyYkhaY2RZYVpYMDVad2IifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjkzNTA2ODUsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBREthIn0=";
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-A R S L A N -Md",
  author: process.env.PACK_AUTHER || "ArslanMD",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "A R S L A N -Md",
  ownername: process.env.OWNER_NAME || "ArslanMD",
  errorChat: process.env.ERROR_CHAT || "923237045919",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "ArslanMD").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
