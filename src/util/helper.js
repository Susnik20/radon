const printDate = function() {
    console.log(01/06/2022)
}
const printMonth = function() {
    console.log('June')
}
const getbatchInfo = function(){
    console.log('Radon, W3D1, the topic for today is Nodejs module system')
}
module.exports.date = printDate
module.exports.month = printMonth
module.exports.info = getbatchInfo