import Express from "express";

const app = Express();

var PORT = 3001;

app.get("/", (req, res)=> {
    res.send("hello");
})

app.listen(PORT, ()=>console.log("app listening on port" + PORT))