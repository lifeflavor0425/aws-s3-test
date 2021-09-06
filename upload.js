const fs=require('fs');
const AWS = require('aws-sdk');
const id = 'AKIAXU3SCGJX3QXRTUMC';
const pw = '6VsKs5P3NtDrdphd5aZp6LmyxVtiwV8UyRUkWqX1';
const bucket_name = 'lifeflavor';
const s3=new AWS.S3({
  accessKeyId: id,
  secretAccessKey: pw
});
const uploadFile = (fileName) => {
  const fileContent = fs.readFileSync(fileName);
  const params = {
    Bucket: bucket_name,
    Key: 'v-test.mp4',
    Body:fileContent
  };
  s3.upload(params, function(err,data){
    if(err) {throw err;}
    console.log(`file uploaded successfully. ${data.Location}`);
  });
};
uploadFile('./uploads/v-test.mp4');