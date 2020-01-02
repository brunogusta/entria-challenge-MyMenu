import { useState } from 'react';
import { showMessage } from 'react-native-flash-message';
import ImagePicker from 'react-native-image-picker';

const usePhoto = () => {
  const [photo, setPhoto] = useState(null);

  function handleSelectImage() {
    ImagePicker.showImagePicker(
      {
        title: 'Select Image',
        takePhotoButtonTitle: 'Take a picture...',
        chooseFromLibraryButtonTitle: 'Choose from gallery...',
      },
      (response) => {
        if (response.error) {
          showMessage({
            message: 'Error uploading image!',
            description: 'Oops! Some error happened while uploading this image!',
            type: 'danger',
          });
        } else if (response.didCancel) {
          showMessage({
            message: 'You have canceled the image upload action!',
            type: 'danger',
          });
        } else {
          if (response.fileSize > 5000000) {
            return showMessage({
              message: 'The image you are trying to upload is too heavy!',
              description:
                'Oops! The image is too heavy!',
              type: 'danger',
            });
          }


          let prefix;
          let ext;

          if (response.fileName) {
            [prefix, ext] = response.fileName.split('.');
            ext = ext.toLocaleLowerCase() === 'heic' ? 'jpg' : ext;
          } else {
            prefix = new Date().getTime();
            ext = 'jpg';
          }

          const image = {
            name: `${prefix}.${ext}`,
            uri: response.uri,
            type: response.type,
          };


          setPhoto(image);
        }


        return photo;
      },
    );
  }

  function removeImage() {
    setPhoto(null);
  }

  return [photo, handleSelectImage, removeImage];
};

export default usePhoto;
