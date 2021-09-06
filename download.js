const fs=require('fs');
const AWS = require('aws-sdk');
const id = 'AKIAXU3SCGJX3QXRTUMC';
const pw = '6VsKs5P3NtDrdphd5aZp6LmyxVtiwV8UyRUkWqX1';
const bucket_name = 'lifeflavor';
const s3=new AWS.S3({
  accessKeyId: id,
  secretAccessKey: pw
});

const downloadFile=(fileName)=>{
  const params ={
    Bucket: bucket_name,
    Key: '1630910921445.h264' //you want to file in s3
  };
  s3.getObject(params, function(err,data){
    if(err){throw err;}
    fs.writeFileSync(fileName, data.Body.toString());
  });
};

downloadFile('./downloads/1630910921445.h264');  //위치,파일 이름을 변경해서 받음!