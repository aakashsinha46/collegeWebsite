var express = require('express')
var app = express()

app.use(express.static('public'))
app.set('view engine','ejs')

app.get('/', (req, res)=>{
   res.render('index')
})

app.get('/home', (req, res)=>{
   res.render('index')
})

app.get('/logo', (req, res) =>{
   res.render('index')
})

app.get('/teacher', (req, res)=>{
   res.render('teacher')
})

app.listen(3000, () => {
   console.log("server started!!!")
})