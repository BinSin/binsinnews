console.log('create news');

const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: 'ap-northeast-2'});

exports.handle = function(e, ctx, callback) {

	console.log(e);

	var params = {
		TableName: 'news',
		Item: {
			date: e.date,
			title : e.title,
			content : e.content,
			image : e.image,
			url : e.url
		}
	};

	docClient.put(params, function(err, data){
		if(err){
			callback(err, null);
		}else{
			callback(null, data);
		}
	});

}
