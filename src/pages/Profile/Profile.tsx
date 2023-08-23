import './Profile.css';
import netflixAvatar from '../../assets/netflixAvatar.png';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';

type Props = {};

const Profile = (props: Props) => {
  const user = useSelector(selectUser);
  console.log(user.email);

  return (
    <div className="profile">
      <h1>Edit Profile</h1>
      <div className="prfile__info">
        <img src={netflixAvatar} alt="" />
        <div className="profile__details">
          <h2>{user.email}</h2>
        </div>
      </div>
    </div>
  );
};

export default Profile;
