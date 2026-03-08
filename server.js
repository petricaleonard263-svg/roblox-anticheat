const express = require("express")
const app = express()

app.use(express.json())

app.post("/check", (req,res) => {

    const userid = req.body.userid
    const username = req.body.username

    console.log("Player:", username)

    if(userid == 123456){
        res.json({banned: true})
    }else{
        res.json({banned:false})
    }

})

app.get("/", (req,res)=>{
    res.send("AntiCheat API online")
})

app.listen(3000, () => {
    console.log("Server pornit")
})
