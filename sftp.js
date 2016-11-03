var config = { host: 'yai.kandu.co.za', username: 'root', password: '!L2fuat8' }
var SFTPClient = require('sftp-promises')
var sftp = new SFTPClient(config)

var remotePath = '/home/narek/kandu-media/files/blue/jpg'
var localPath = '/Users/johannespetrushuisamen/Projects/ftp/data/blue.jpg'

var session = sftp.session(config)
.then(function (ftpSession) {
  session = ftpSession
  console.log('Session ready')
})

function ftp () {
  Promise.resolve()
  .then(function (remotePath, session) {
    console.log('listing files')
    sftp.ls('/home/narek/kandu-media/files/', session)
    .then(function (list) {
      for (var i = 0; i < list.entries.length; i++) {
        console.log(list.entries[i].filename)
      }
    })
    .then(function () {
      console.log('Downloading')
      .then(function (remotePath, localPath, session) {
        console.log('test1')
        // not accessing function
        console.log(remotePath, localPath, session)
        sftp.get(remotePath, localPath, session)
          .then(function (remotePath, localPath, session) {
            console.log(remotePath, localPath, session)
          })
      })
      console.log('Dowload succesfull')
    })
  })
}

ftp()
