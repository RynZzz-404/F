let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()

//------- NOMOR
  let nowner = `${nomorown.split`@`[0]}@s.whatsapp.net`
  let teksnomor = `${htki} *OWNER* ${htka}
â¢ @${nomorown.split`@`[0]} â¢
------- ${nameown} -------

ð® *Note:*
â¢ Owner tidak menerima save contact
â¢ Owner berhak blockir tanpa alasan
â¢ Berbicaralah yang sopan & tidak spam
â¢ Owner Hanya merespon yang berkaitan dengan BOT
â¢ No Telp
â¢ Chat gajelas = Block`

//------------ BIO
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `${htki} *BIODATA* ${htka}
*ð É´á´á´á´ Êá´á´* : Éªá´á´  Êá´á´
*âï¸ É´á´á´á´ á´á´¡É´á´Ê* : ð.ð¡ððªð· ðð­ð²ð½ððª ð
*âï¸ É¢á´É´á´á´Ê* : Laki - laki
*ð á´É¢á´á´á´* : Islam
*â° á´á´É´É¢É¢á´Ê Êá´ÊÉªÊ* : 12 á´É¢á´sá´á´s 1997
*ðºï¸ á´ÉªÉ´É¢É¢á´Ê* : ÉªÉ´á´á´É´á´sÉªá´ , á´á´á´¡á´ Êá´Êá´á´ , Êá´É´á´á´É´É¢ , á´Éªá´á´ÊÉª

âââââââ[ Éªá´á´  Êá´á´ ]âââââââ

ð· *ÉªÉ´sá´á´É¢Êá´á´:* ${sig}
ð *É¢Éªá´Êá´Ê:* ${sgh}
ð¥ *á´¡Êá´á´sá´á´á´* wa.me/${nomorown}
ð *á´¡á´ÊsÉªá´á´:* https://yannmd-ofc.blogspot.com/?m=1

`
  let teks = ' '
const sections = [
   {
	title: `${htjava} OWNER âââââââââÂ·â¢`,
	rows: [
	    {title: "ð± â¢ á´Ê É´á´á´Êá´Ê", rowId: ".owner nomor"},
	{title: "ð¨ â¢ ÊÉªá´á´á´á´á´", rowId: ".owner bio"},
	{title: "ð â¢ á´¡á´ÊsÉªá´á´", rowId: ".website"},
	{title: "ð â¢ sá´ÊÉªá´á´", rowId: ".sc"},
	]
    },{
	title: `${htjava} SUPPORT ME âââââââÂ·â¢`,
	rows: [
	    {title: "ð¹ â¢ á´á´É´á´sÉª", rowId: ".donasi"},
	{title: "ð â¢ sá´á´¡á´", rowId: ".sewa"},
	{title: "ð â¢ Êá´Ê á´Êá´á´Éªá´á´", rowId: ".premium"},
	]
  },
]

const listMessage = {
  text: teks,
  footer: null,
  title: `${htki} *OWNER* ${htka}`,
  buttonText: "Click Here !",
  sections
}

  try {
    if (/(creator|owner)/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'nomor':
          conn.reply(m.chat, teksnomor, m, { contextInfo: { mentionedJid: [nowner] }})
            break
            case 'bio':
          conn.sendHydrated(m.chat, teksbio, wm, ppown, "https://wa.me/" + nomorown, "ð¬ á´Êá´á´s", null,null, [["á´¡á´ÊsÉªá´á´", '.website'], [null, null],[null,null]], m)
            break
            
          default:
            return await conn.sendMessage(m.chat, listMessage, { quoted: m, contextInfo: { mentionedJid: [m.sender] }})
        }
    } else if (/aoaooaoaooaoa/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return conn.sendButton( m.chat, caption, wm, null, [`â®â° Menu`, `.menu`], m)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}

handler.help = ['owner', 'creaor']
handler.tags = ['main', 'info']
handler.command = /^(owner|creator)/i

export default handler
