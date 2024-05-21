import React from 'react';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

const UserAvatar = () => {
  const [avatarImage, setAvatarImage] = React.useState(null);

  const handleImageChange = (event) => {
    const image = URL.createObjectURL(event.target.files[0]);
    setAvatarImage(image);
  };

  return (
    <div>
      <label htmlFor="avatar-upload">
        <input
          style={{ display: 'none' }}
          id="avatar-upload"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
        <IconButton color="primary" aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton>
      </label>
      <Avatar alt="User Avatar" src={avatarImage} />
    </div>
  );
};

export default UserAvatar;
