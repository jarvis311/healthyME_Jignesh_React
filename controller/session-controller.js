const fs = require("fs")

function login(req,res){
    res.write("Login")
    res.end()
}
// signup
function signup(req,res){
    let signupHtml = fs.readFileSync("./views/Signup.html")
    res.write(signupHtml)
    res.end()
}

// save user
function saveUser(req,res){

    console.log(req.body)//

    res.json({
        msg:"....",
        status:200,
        data:req.body
    })
}

module.exports.login = login
module.exports.signup = signup
module.exports.saveuser = saveUser 