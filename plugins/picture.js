// Tolong jangan bully saya bang,, saya cuman mau bisnis :)

let uploadImage = require('../lib/uploadImage')
let fetch = require('node-fetch')
let util = require('util')

let handler = async(m, { conn, args }) => {
try {
gay = `sayang`

  if (!m.quoted) throw `Tag Fotonya ` + gay // org gay

    await m.reply(`*[❗] TES*`)
  let q = m.quoted ? m.quoted : m
  let media = await q.download()
  let img = await uploadImage(media)
  let buffer = await (await fetch('https://leyscoders-api.herokuapp.com/api/img/picture?url=' + img + '&apikey=beliapikey')).buffer() // Masukan ApiKeymu disini..
  let res = await fetch('https://raw.githubusercontent.com/herokuapp-com/kuhong-api/main/info/credit.json')
  let json = await res.json()

 await conn.sendFile(m.chat, buffer, 'affect.jpg', 'Nih Kak', m)

} catch (e) {

 err = await (await fetch('')).json() // jika Erorr
   throw err
  }
}
handler.help = ['picture (reply)']
handler.tags = ['sticker']
handler.command = /^picture$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler