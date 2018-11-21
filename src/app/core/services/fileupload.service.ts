import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk';
@Injectable({
  providedIn: 'root'
})
export class FileuploadService {

  bucket = "znyak";
  s3Client = new AWS.S3({
    accessKeyId: "AKIAJ3HELLVCC27A3X2A",
    secretAccessKey: "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"
  });

  constructor() { }

  uploadfile(file) {
    console.log(file);
    this.s3Client.putObject({
      Bucket: this.bucket,
      Key: file.name,
      ACL: 'public-read',
      Body: file,
    }, function(err, data) {
      if (err) { console.log('error while uploading to s3')}
      else{
        console.log("uploaded",data);

      }
    });
  
  }
}
