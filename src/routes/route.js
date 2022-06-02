const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore')
const lodash = require('lodash')

const router = express.Router();
const app = express.Router();

router.get('/test-me', function (req, res) {
    myHelper.printDate()
    myHelper.getCurrentMonth()
    myHelper.getCohortData()
    let firstElement = underscore.first(['Sabiha','Akash','Pritesh'])
    console.log('The first element received from underscope function is '+firstElement)
    res.send('My first ever api!')
});

router.get('/hello', function (req, res) {
    let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December']
    const d = lodash.chunk(month,3)
    console.log(d)
    const oddNumber = [1,3,5,7,9,11,13,15,17,19]
    const e = lodash.tail(oddNumber)
    console.log(e)
    const arr1 = [1,2,3,4]
    const arr2 = [1,2,3,4]
    const arr3 = [4,5,6,7]
    const arr4 = [4,5,6,7]
    const arr5 = [7,8,9,10]
    const mixarr = lodash.union(arr1,arr2,arr3,arr4,arr5)
    console.log(mixarr)
    const a = [["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
    const b = lodash.fromPairs(a)
    console.log(b);
    res.send('My first ever ')
});

router.get('/candidates', function(req, res){
    console.log('Query paramters for this request are '+JSON.stringify(req.query))
    let gender = req.query.gender
    let state = req.query.state
    let district = req.query.district
    console.log('State is '+state)
    console.log('Gender is '+gender)
    console.log('District is '+district)
    let candidates = ['Akash','Suman']
    res.send(candidates)
})

router.get('/candidates/:canidatesName', function(req, res){
    console.log('The request objects is '+ JSON.stringify(req.params))
    console.log('Candidates name is '+req.params.canidatesName)
    res.send('Done')
})
module.exports = router
module.exports = app
// adding this comment for no reason