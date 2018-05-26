var express = require('express');
var router = express.Router();


router.get('/list',function(require,response){

	response.send(
		[{spending:[
		{time:'jan',category:'shoping',count:2000},
		{time:'feb',category:'shoping',count:3000},
		{time:'march',category:'cart',count:500},
		{time:'april',category:'traffic',count:100},
		{time:'may',category:'cart',count:1000},
		{time:'june',category:'cart',count:800},
		{time:'july',category:'shoping',count:2000},
		{time:'aug',category:'traffic',count:400},
		{time:'sep',category:'traffic',count:500}	
		]}]
	)


})




module.exports = router;
