import Resizer from 'react-image-file-resizer';
import axios from 'axios';
import { useSelector } from 'react-redux';

const FileUpload = () => {
  const { user } = useSelector((state) => ({ ...state })); //we have to send the token to the server to upload the image
  const fileUploadAndResize = (e) => {
    let files = e.target.files; // 3
    if (files) {
      //loop all the files to resize and upload them
      for (let i = 0; i < files.length; i++) {
        Resizer.imageFileResizer(
          files[i], //we ue index because we have multiple files
          720,
          720,
          'JPEG',
          100,
          0,
          (uri) => {
            console.log(uri);
          },
          'base64'
        ); //Resizer.imageFileResizer is used to resize the image and upload it to the server
      }
    }
    //console.log(e.target.files);
    // resize
    // send back to server to upload to cloudinary
    // set url to images[] in the parent component state - ProductCreate
  };

  return (
    <div className="row">
      <label className="btn btn-primary">
        Choose File
        <input
          type="file"
          multiple
          hidden
          accept="images/*"
          onChange={fileUploadAndResize}
        />
      </label>
    </div>
  );
};

export default FileUpload;
