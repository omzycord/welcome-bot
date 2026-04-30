const { Client, GatewayIntentBits, WebhookClient, EmbedBuilder } = require("discord.js");

const BOT_TOKEN = process.env.BOT_TOKEN;
const WEBHOOK_URL = process.env.WEBHOOK_URL;

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers
  ]
});

const webhook = new WebhookClient({ url: WEBHOOK_URL });

client.once("clientReady", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on("guildMemberAdd", async (member) => {
  const welcomeText = `°‧ 𓆝 𓆟 𓆞 ·｡𝖂𝖊𝖑𝖈𝖔𝖒𝖊 𝖙𝖔 𝕾𝖍𝖆𝖗𝖒𝖐 °‧ 𓆝 𓆟 𓆞 ·｡

${member}

𝑯𝒆𝒚 𝒕𝒉𝒆𝒓𝒆, 𝒔𝒉𝒂𝒓𝒌 𝒆𝒏𝒕𝒉𝒖𝒔𝒊𝒂𝒔𝒕! 𝑾𝒆'𝒓𝒆 𝒂𝒃𝒔𝒐𝒍𝒖𝒕𝒆𝒍𝒚 𝒕𝒉𝒓𝒊𝒍𝒍𝒆𝒅 𝒕𝒐 𝒉𝒂𝒗𝒆 𝒚𝒐𝒖 𝒋𝒐𝒊𝒏 𝒐𝒖𝒓 𝒄𝒐𝒎𝒎𝒖𝒏𝒊𝒕𝒚!

☆⋆｡𖦹°‧★🪼⋆.ೃ࿔:･☆⋆｡𖦹°‧★🪼⋆.ೃ࿔:･

𝑮𝒆𝒕𝒕𝒊𝒏𝒈 𝒔𝒕𝒂𝒓𝒕𝒆𝒅 𝒊𝒔 𝒔𝒖𝒑𝒆𝒓 𝒆𝒂𝒔𝒚!

𝑯𝒆𝒂𝒅 𝒕𝒐 ⁠✩₊˚⋆rules — 𝑻𝒂𝒌𝒆 𝒂 𝒒𝒖𝒊𝒄𝒌 𝒑𝒆𝒆𝒌 𝒂𝒕 𝒐𝒖𝒓 𝒄𝒐𝒎𝒎𝒖𝒏𝒊𝒕𝒚 𝒈𝒖𝒊𝒅𝒆𝒍𝒊𝒏𝒆𝒔.

𝑽𝒆𝒓𝒊𝒇𝒚 𝒊𝒏 ⁠✩₊˚⋆verify — 𝑻𝒉𝒊𝒔 𝒉𝒆𝒍𝒑𝒔 𝒌𝒆𝒆𝒑 𝒐𝒖𝒓 𝒄𝒐𝒎𝒎𝒖𝒏𝒊𝒕𝒚 𝒔𝒂𝒇𝒆.

𝑮𝒓𝒂𝒃 𝒀𝒐𝒖𝒓 𝑹𝒐𝒍𝒆𝒔 𝒊𝒏 ⁠✩₊˚⋆roles — 𝑷𝒊𝒄𝒌 𝒓𝒐𝒍𝒆𝒔 𝒕𝒉𝒂𝒕 𝒎𝒂𝒕𝒄𝒉 𝒚𝒐𝒖𝒓 𝒊𝒏𝒕𝒆𝒓𝒆𝒔𝒕𝒔.`;

  const embed = new EmbedBuilder()
    .setColor("#00BFFF")
    .setDescription(welcomeText)
    .setImage("https://i.imgur.com/89WwlyR.jpeg") // BIG IMAGE
    .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
    .setFooter({ text: `Member #${member.guild.memberCount}` })
    .setTimestamp();

  await webhook.send({
    username: "chomps",
    avatarURL: "https://i.imgur.com/xTkyw1m.jpeg", // PFP
    embeds: [embed]
  });
});

client.login(BOT_TOKEN);
