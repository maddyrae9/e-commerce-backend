const express = require('express');
const sequelize = require('./config/connection');
const routes = require('./routes');
const path = require('path')

//sequelize connection
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, "public")));

//Turn on routes
app.use(routes);

//turn on server
sequelize.sync({ force: false }).then(() => {
    app.listen(port, () => {
        console.log('check--> http://localhost:${PORT}/api');
    })
})