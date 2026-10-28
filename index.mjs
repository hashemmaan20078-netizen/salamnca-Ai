import { Client, GatewayIntentBits, ActivityType } from "discord.js";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

// أيدي الرومات المحددة
const salamncaRoom = "<#1562122437418684467>";
const northRulesRoom = "<#1545505134153302137>";

client.once("ready", () => {
  // تعيين البايو أو الحالة الخاصة بالبوت (النشاط)
  client.user.setActivity("By: 506u1", { type: ActivityType.Playing });
  console.log(`تم تسجيل الدخول بنجاح - بوت عصابة salamnca جاهز!`);
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  // التحقق إذا تم منشن البوت
  if (message.mentions.has(client.user)) {
    const userMsg = message.content.toLowerCase();

    // 1. إذا سأل من صنعك
    if (
      userMsg.includes("مين صنعك") ||
      userMsg.includes("صانعك") ||
      userMsg.includes("من صنعك") ||
      userMsg.includes("المبرمج")
    ) {
      await message.channel.send(
        `تم صنعي وتطويري بواسطة العبقري **506u1** لأجل عيون عصابة salamnca في سيرفر نورث آر بي MTA!`
      );
    }
    // 2. الرد الافتراضي برومات العصابة والقوانين
    else {
      await message.channel.send(
        `أهلاً بك يا ${message.author.username} في أراضي عصابة **salamnca** ضمن سيرفر **نورث آر بي (MTA)**!\n\n` +
          `🔥 **روم عصابة salamnca:** ${salamncaRoom}\n` +
          `📜 **روم قوانين سيرفر نورث آر بي والعصابات:** ${northRulesRoom}\n\n` +
          `• الالتزام التام بالرول بلاي ومنع الخروج عن الشخصية.\n` +
          `• طاعة الأوامر والولاء لزعيم وأعضاء salamnca.`
      );
    }
  }
});

client.login(
  "MTU2NTAzOTMwNTQ0Mzc3NDU5NA.GkPjjG.JT3tJomrGDE_VgTozyDbQbG4DChjqJXW_KaRCE"
);
