module.exports = function (app) {
    let fs = require('fs')

    app.set('view engine', 'ejs');
    app.engine('html', require('ejs').renderFile);

    app.get('/', (req,res) => {
      res.render(__dirname+'/HTML/index.html')
    })
    app.get('/data', (req,res) => {
      let pw = req.query.pw
      fs.readFile(__dirname+'/data.txt','utf8',(err,data) => {
        if(data == pw) { res.write(`1`)}
        else res.write(`0`)
        res.end()
      })
    })

    app.get('/wordTest', (req,res) => {
      res.render(__dirname+'/HTML/wordTest.html')
    })

  }
