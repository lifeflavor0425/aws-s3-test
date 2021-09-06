const AWS = require('aws-sdk');
const id = 'AKIAXU3SCGJX3QXRTUMC';
const pw = '6VsKs5P3NtDrdphd5aZp6LmyxVtiwV8UyRUkWqX1';
const bucket_name = 'lifeflavor';
const s3=new AWS.S3({
  accessKeyId: id,
  secretAccessKey: pw
});
const params={
  Bucket: bucket_name,
  CreateBucketConfiguration:{
    //set your region here
    LocationConstraint:"ap-northeast-2"
  }
};
s3.createBucket(params, function(err, data){
  if(err) console.log(err, err.stack);
  else console.log('Bucket created successfully', data.Location);
});