var express = require('express');
var router = express.Router();
//分页
router.get('/page', function(req, res) {
    var pageNum = req.query.pageNum;
    console.log('pageNum:'+pageNum);
    var total = 0;
    var arr = [{name:'xiaoming1'},{name:'xiaoming2'},
        {name:'xiaoming3'},{name:'xiaoming4'},
        {name:'xiaoming5'},{name:'xiaoming6'},
        {name:'xiaoming7'},{name:'xiaoming8'},
        {name:'xiaoming9'},{name:'xiaoming10'},
        {name:'xiaoming11'},{name:'xiaoming12'},
        {name:'xiaoming13'},{name:'xiaoming14'},
        {name:'xiaoming15'},{name:'xiaoming16'},
        {name:'xiaoming17'},{name:'xiaoming18'},
        {name:'xiaoming19'},{name:'xiaoming20'},
        {name:'xiaoming21'},{name:'xiaoming22'},
        {name:'xiaoming23'},{name:'xiaoming24'},
        {name:'xiaoming25'},{name:'xiaoming26'}
        ,{name:'xiaoming27'}]
    total=arr.length;
    pageSize=2;
    totalPage=Math.ceil(total/pageSize);
    var start=pageSize*(pageNum-1);
    var end = pageSize*pageNum;
    console.log(start+'|'+end);
    var results = arr.slice(start,end);
    var data = {total:total,pageSize:pageSize,totalPage:totalPage,list:results};
    res.send(data)
});

module.exports = router;