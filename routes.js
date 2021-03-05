module.exports = function (app) {
    let fs = require('fs')

    app.set('view engine', 'ejs');
    app.engine('html', require('ejs').renderFile);

    app.get('/', (req,res) => {
      res.render(__dirname+'/HTML/index.html')
    })
    app.get('/data', (req,res) => {
      const csvFilePath=__dirname+'/DATA/EnglishKoreanWord.csv'
      const csv=require('csvtojson')
      try{
        csv()
        .fromFile(csvFilePath)
        .then((jsonObj)=>{
            res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
            res.write(JSON.stringify(jsonObj));
            res.end()
          })
        } catch(error) {
          console.log(error)
          res.write(`0`)
          res.end()
      }
      
    })

    app.get('/wordTest', (req,res) => {
      res.render(__dirname+'/HTML/wordTest.html')
    })

  }
