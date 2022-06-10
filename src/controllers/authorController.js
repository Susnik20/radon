const ip = require('ip')

const ipAdd = async function(req,res){
    console.log(ip.address())
    res.send("middleware assignment")
}
module.exports.ipAdd =ipAdd
