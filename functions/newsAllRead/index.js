console.log("read all news");

const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: 'ap-northeast-2'});

exports.handle = function(e, ctx, callback) {

	let scanningParameters = {
		TableName : 'test-news',
		Limit: 100
	};

	docClient.scan(scanningParameters, function(err, data){
		if(err){
			callback(err, null);
		}else{
			callback(null, data);
		}
	});

}
