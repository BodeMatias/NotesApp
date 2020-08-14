const cors = require('cors');
const express = require('express')
const morgan = require('morgan')
const app = express()
const { mongoose } = require('./database')

//Settings
app.set('port', process.env.PORT || 3000)
//Middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(cors());
app.options('*', cors());
//Routes
app.use(require('./routes/notes.routes'))
//Server start
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'))
})