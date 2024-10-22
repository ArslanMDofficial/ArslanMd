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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK096RzQ1R284eG9xTXI1bURGRGlpeDN6Zmc4RVhaY2Q0RmR6SmlkQTcxOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZjRrRXpoMHNtd251RDhsdEozUlJ1MmtJK3RkWWZkY1U5YWNPL3hMRG9DZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHTCtPdGJiRnd4Wk9zQ2RPaXNldmtiOVRkaXlER29QNE0wSXhTUFRvRW1vPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnL1IzS2FSaE15elJjU3FrNmE2Mm5CeGxZajd1SGlkY2Fkd3FGVG5hWVVrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9GK1Q4eHVXZi8yQ2FpSjByVGlFbkYzUGx1ZmNTdFpqbmhmRWU3cFJQMjg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWdmlXMlh4bGNqTzN4SkhnUzBXVlVoQjMxMEp0RWZCOEZrWm02KzhYWDQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0dYcitzb01jc1BSclYyR1cwd3ZXb3E2VjVVVkNCVjdYbE9MWCtwNVpGUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL21BQ2t3V2hkY2xWdGwyc3BTMElSaHBYYllSUitzd2QwTXZibkFqbzVSdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5IMTFNODBTS1lSSVN3M0x4WCtwbjliV0UyMzIvamt5NHNlbW5UOGdvQTVMMnovZm4zaXlQbW5aRWF3TjZndW5pWDZyVElkYjNCVDNhYTViTHBiVER3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTY4LCJhZHZTZWNyZXRLZXkiOiJPdVhHazF3d0ZRMHE1bEJubmpEbHZtTEEvc0l4Y3U4cXc2RkhpZzJVYXlzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI4V1RKX3RwZ1R6V3AyZ0F2SXdBUk9nIiwicGhvbmVJZCI6ImExNzFhMTEzLTAxNjctNGUwMi05ODE4LWU4ZjFkMzM3YTA2ZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6TElQNzZaalowdFJnczlXU0IzcUpJcUVKdWM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiLzR4aVFFVmJ1WnpyMmxZOUd3d0JTcHgzdUU4PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik1LRjEyQjRYIiwibWUiOnsiaWQiOiI5MjMyMzcwNDU5MTk6MjJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQXJzbGFuTUQg4oiaIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKeWF6TEFGRVBUNDNiZ0dHQllnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJxdVpaQzd3a1JzcmRnckQra0k3Tm84ZFlVUlJqWnNkbHgxaHBsZlRsbkJzPSIsImFjY291bnRTaWduYXR1cmUiOiJNRmRMMEMzNDRubnIyN0l6ajlaWTZuRmlqMmhEbTYrY3RLTTIvUXBRdHFDRWtYd3R5eUpBTnN2TkQ4aDFYc0xsS3RxbUVjMU9RbVFPWXFrM2dEcGREZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoibTZCS1lIMkJaSEo4ZWZXM1lESUt5cWszQ2RiOFRsMG5HRVBkYzFrcE5ZTmJreFNhbWl1L1FWa0plcnpQSjZsck5rQjZDaGoveUNSNmVQc1FlOEFNREE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMyMzcwNDU5MTk6MjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYXJtV1F1OEpFYkszWUt3L3BDT3phUEhXRkVVWTJiSFpjZFlhWlgwNVp3YiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyOTU5MjQ1MCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFES1EifQ==";
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
