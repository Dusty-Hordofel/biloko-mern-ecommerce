import Resizer from 'react-image-file-resizer';
import axios from 'axios';
import { useSelector } from 'react-redux';

const FileUpload = ({ values, setValues, setLoading }) => {
  const { user } = useSelector((state) => ({ ...state })); //we have to send the token to the server to upload the image

  const fileUploadAndResize = (e) => {
    let files = e.target.files; // 3
    let allUploadedFiles = values.images; //all the images that are already uploaded

    if (files) {
      //loop all the files to resize and upload them
      setLoading(true);
      for (let i = 0; i < files.length; i++) {
        Resizer.imageFileResizer(
          files[i], //we ue index because we have multiple files
          720,
          720,
          'JPEG',
          100,
          0,
          (uri) => {
            //console.log(uri);
            axios
              .post(
                `${process.env.REACT_APP_API}/uploadimages`,
                { image: uri },
                {
                  headers: {
                    authtoken: user ? user.token : '',
                  },
                }
              ) //we have three arguments(the endpoint,the data (image we are sending),the headers (because of protected route,we send the token in the headers))
              .then((res) => {
                console.log('IMAGE UPLOAD RES DATA', res);
                setLoading(false);
                allUploadedFiles.push(res.data);

                setValues({ ...values, images: allUploadedFiles });
              })
              .catch((err) => {
                setLoading(false);
                console.log('CLOUDINARY UPLOAD ERR', err);
              });
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
