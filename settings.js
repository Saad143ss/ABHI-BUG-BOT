const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernomer = "919074692450"
global.ownername = "Abhishek Suresh"
global.ytname = "YT: Comedy Melody CH"
global.socialm = "GitHub: DGXeon"
global.location = "India, Kerala, Idukki"

global.ownernumber = '919074692450'  //creator number
global.ownername = 'Abhishek Suresh' //owner name
global.botname = '𝙰𝙱𝙷𝙸-𝙱𝚄𝙶-𝙱𝙾𝚃' //name of the bot

//sticker details
global.packname = '🎯𝙰𝙱𝙷𝙸-𝙱𝚄𝙶-𝙱𝙾𝚃'
global.author = '𝙰𝙱𝙷𝙸𝚂𝙷𝙴𝙺 𝚂𝚄𝚁𝙴𝚂𝙷🍀'

//console view/theme
global.themeemoji = '🎯'
global.wm = "©𝙰𝙱𝙷𝙸-𝙱𝚄𝙶-𝙱𝙾𝚃"

//theme link
global.link = 'https://chat.whatsapp.com/BOLb0ICN3sAJ5dloRBw5VD'

//custom prefix
global.prefa = ['','!','.','#','&']

//false=disable and true=enable
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = false //auto update bio
global.anti92 = false //auto block +92 
global.autoread_status = false //auto view status/story

//menu type 
//v1 is image menu, 
//v2 is link + image menu,
//v3 is video menu,
//v4 is call end menu
global.typemenu = 'v2'

//reply messages
global.mess = {
    done: 'Done✅',
    prem: 'This feature can be used by premium user only',
    admin: 'This feature can be used by admin only',
    botAdmin: 'This feature can only be used when the bot is a group admin ',
    owner: 'This feature can be used by owner only',
    group: 'This feature is only for groups',
    private: 'This feature is only for private chats',
    wait: 'Please Wait',    
    error: 'Error❌',
}

global.thumb = fs.readFileSync('./Media/Abhi.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})