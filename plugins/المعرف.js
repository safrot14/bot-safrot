let handler = async (m, { conn, command, text }) => {
let pp = imagen4;
let love = `
*✥━─━⌬〘𝑮𝑼𝑻𝑺-𝑩𝑶𝑻〙⌬━─━✥*

~*〘 معرف المطور 〙*~

*✥━─━⌬〘🍁〙⌬━─━✥*

*〚 المفضلات 〛*
❬ الانمي ❭
❬ البرمجه ❭
❬ البوكسينغ ❭
❬ الكمبيوتر ❭

*✥━─━⌬〘🍁〙⌬━─━✥*

*〚 تعريف عن نفسي 〛*
❬ 16 سنه ❭
❬ اسمي يوسف ❭
❬ من الدقهليه ❭
❬ لقبي غاتس ❭

*✥━─━⌬〘🍁〙⌬━─━✥*

*〚 ما اكرهه 〛*
❬ الي بتاع مصلحتو ❭
❬ المتكبر ❭
❬ الي بينافق ❭

*✥━─━⌬〘𝑮𝑼𝑻𝑺-𝑩𝑶𝑻〙⌬━─━✥*
`.trim()
let message = [
  image: pp,
  caption: love.trim(),
];
m.reply(message, null, { mentions: conn.parseMention(love) })}
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^(معرف|المعرف)$/i
export default handler
