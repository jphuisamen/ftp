var Client = require('ssh2').Client

var conn = new Client()
conn.on('ready', function (err) {
  if (err) {
    console.error(err)
  } else {
    conn.sftp(function (err, sftp) {
      if (err) {
        console.error(err)
      } else {
        sftp.readdir('/home/narek/kandu-media/files', function (err, list) {
          if (err) {
            console.error(err)
          } else {
            for (var i = 0; i < list.length; i++) {
              var remotePath = '/home/narek/kandu-media/files/' + list[i].filename
              console.log(remotePath)
              var localPath = '/Users/johannespetrushuisamen/Projects/ftp/data/' + list[i].filename
              console.log(localPath)
              console.log('test1')
              sftp.fastGet(remotePath, localPath, function (err) {
                console.log('test2')
                if (err) {
                  console.error(err)
                } else {
                  console.log('download successfull')
                }
              })
            }
            conn.end()
          }
        })
      }
    })
  }
}).connect({
  host: 'yai.kandu.co.za',
  port: 22,
  username: 'root',
  password: '!L2fuat8'
})
