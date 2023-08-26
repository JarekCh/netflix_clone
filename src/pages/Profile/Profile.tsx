import './Profile.css';
import netflixAvatar from '../../assets/netflixAvatar.png';
import { selectUser } from '../../features/userSlice';
import { useAppSelector } from '../../app/hooks';
import { auth } from '../../firebase';
import ProfilePlans from '../../components/plans/ProfilePlans';

type Props = {};

const Profile = (props: Props) => {
  const user = useAppSelector(selectUser);

  return (
    <div className="profile">
      <div className="profile__body">
        <h1>Edit Profile</h1>
        <div className="profile__info">
          <img src={netflixAvatar} alt="" />
          <div className="profile__details">
            <h2>{user.email}</h2>
            <div className="profile__plans">
              <h3>Plans</h3>
              <ProfilePlans />
              <button
                className="profile__signOut"
                onClick={() => {
                  auth.signOut();
                }}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;