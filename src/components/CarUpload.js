import React, { useState } from 'react';
import { CarPicture } from './CarPicture';
import { CarUploadText } from './CarUploadText';

export function CarUpload (props) {
  const [imageFile, setImageFile] = useState(null);

  function applyImageFile(imageFile) {
    setImageFile(imageFile);
  }
  
  return (
      <div className="flex-container">
        <div className="row">
          <div className="col-md-6">
            <CarPicture props={props} applyCallBack={applyImageFile}/>
          </div>
          <div className="col-md-6">
            <CarUploadText imageFile={imageFile}/>
          </div>
        </div>
      </div>
  );
}