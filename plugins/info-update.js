let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `
┌─「 ?????? 」
│📮Info Update ada di Website ya!!
│
❏────
`
const templateButtons = [
    {index: 1, urlButton: {displayText: 'Link', url: 'https://fangzbot.websites.co.in/'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['infoupdate']
handler.tags = ['update']
handler.command = /^infoupdate$/i

export default handler