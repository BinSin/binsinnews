console.log('delete news');

const AWS = require('aws-sdk');

const docClient = new AWS.DynamoDB.DocumentClient({region: 'ap-northeast-2'});

exports.handle = function(e, ctx, callback) {

	console.log(e);
	
	var param = {
		TableName: "news",
		Key: {
			"date": e.date
		}
	};
	
	docClient.delete(param, function(err, data) {
		if(err) {
			callback(err, null);
		} else {
			callback(null, data);
		}
	});

};
