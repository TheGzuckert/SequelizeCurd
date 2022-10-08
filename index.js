const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const conn = require('./db/conn')

//Models
const Task = require('./models/Anime')

//Routes
const taskRoutes = require('./routes/tasksRoutes')

app.engine('handlebars', exphbs.engine())
app.set('view engine','handlebars')
//midlewares

app.use(
    express.urlencoded({
        extended:true,
    }),
)

app.use(express.json())
app.use(express.static('public'))
app.use('/tasks', taskRoutes)
app.use('/', taskRoutes)
conn
    .sync()
    .then(() => {
    app.listen(3000)
    console.log('Escutando porta')
}
).catch((err) =>
    console.log(err)
)