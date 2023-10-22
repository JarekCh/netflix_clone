import './Profiles.css';

type Props = {
  user: any;
  setProfile: void;
};

const Profiles = ({ user, setProfile }: Props) => {
  return (
    <div className="profiles__container">
      <h1 className="profiles__title">Who's watching?</h1>
      <ul className="profiles__userList">
        <li className="profiles__user">
          <img src="" alt="" className="profiles__userImg" />
          <p className="profiles__userName"></p>
        </li>
      </ul>
    </div>
  );
};

export default Profiles;
