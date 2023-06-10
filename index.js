const express = require("express")
const path = require("path")
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname,"public")))
app.set("view engine", "ejs")

app.get("/",(req, res) =>{
    res.render("index.ejs")
})

app.get("/contact",(req, res) =>{
    res.render("contact.ejs")
})

app.get("/favcities",(req, res) =>{
    res.render("favcities.ejs")
})

app.get("/favpersonalities",(req, res) =>{
    res.render('favpersonalities.ejs')
})

app.get("/favtourists",(req, res) =>{
    res.render("favtourists.ejs")
})

app.get("*",(req, res) =>{
    res.send("Wrong URL")
})

app.listen(port,() => {
    console.log(`personal app listening at https://localhost:${port}`)
})

