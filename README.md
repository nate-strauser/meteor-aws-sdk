meteor-aws-sdk
===================

aws-sdk npm wrapped for meteor

##works with meteor 0.6.2+

*example async*

    var AWS_KEY_ID = 'KEY';
    var AWS_SECRET_KEY = 'SECRET';
    var AWS_REGION = 'REGION';

    AWS.config.update({accessKeyId: AWS_KEY_ID, secretAccessKey: AWS_SECRET_KEY, region: AWS_REGION});
    s3 = new AWS.S3();
    s3.client.listBuckets({}, Meteor.bindEnvironment(
        function(err, data){
            if(err)
            	console.log(err);
            console.log(data);
        },
        function(e){
        	//bind failure
        	console.log(e);
        }
    ));


*example sync*
useful for methods - see https://gist.github.com/possibilities/3443021

    var AWS_KEY_ID = 'KEY';
    var AWS_SECRET_KEY = 'SECRET';
    var AWS_REGION = 'REGION';
    var fut = new Future();

    AWS.config.update({accessKeyId: AWS_KEY_ID, secretAccessKey: AWS_SECRET_KEY, region: AWS_REGION});
    s3 = new AWS.S3();
    s3.client.listBuckets({}, Meteor.bindEnvironment(
        function(err, data){
            if(err)
            	console.log(err);
            fut.ret(data);
        },
        function(e){
        	//bind failure
        	console.log(e);
        }
    ));
    console.log(fut.wait());
				