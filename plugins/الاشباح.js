let handler = async (m, { conn, text, participants }) => {
let member = participants.map(u => u.id)
if(!text) {
var sum = member.length
} else {
var sum = text} 
var total = 0
var sider = []
for(let i = 0; i < sum; i++) {
let users = m.isGroup ? participants.find(u => u.id == member[i]) : {}
if((typeof global.db.data.users[member[i]] == 'undefined' || global.db.data.users[member[i]].chat == 0) && !users.isAdmin && !users.isSuperAdmin) { 
if (typeof global.db.data.users[member[i]] !== 'undefined'){
if(global.db.data.users[member[i]].whitelist == false){
total++
sider.push(member[i])}
}else {
total++
sider.push(member[i])}}}
if(total == 0) return conn.reply(m.chat, `*┇هــذه الــمـجـمـوعـه مــتـفـاعـلـه لــيـس بــهـا أشــبـاح┇*`, m) 
m.reply(`*┇الأعــضـاء الــتـي لا تــتـفـاعـل┇*\n\n*✧〔قــائـمـة الأشــبـاح〕✧*\n${sider.map(v => '  *اتــفـاعـل يــاض ☜* @' + v.replace(/@.+/, '')).join('\n')}`, null, { mentions: sider })}
handler.command = /^(verfantasmas|الاشباح|sider)$/i
handler.admin = true
handler.botAdmin = true
export default handler
