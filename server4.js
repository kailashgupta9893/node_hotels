import express from 'express'
const app = express()

app.get('/', function (req, res) {
  res.send('Welcome to my hotel... how i can helf you ?, we have list of menus')
})

app.get('/Food', (req,res)=>{
    res.send('sure sir, i would love to serve food')
})

app.get('/idli', (req,res)=>{
    var customized_idli = {
        name: 'rava idli',
        size: '10 cm diameter',
        is_sambhar: true,
        ia_chutney: false
    }
    res.send(customized_idli)
})

app.post('/items', (req,res)=>{
    res.send('data is saved')
})

app.listen(3000, ()=>{
    console.log('listening on port 3000');
})