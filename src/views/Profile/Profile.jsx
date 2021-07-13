import NavBar from "../../components/NavBar";
import Feed from "../../components/Feed";
import user from "../../mocks/user.json";
import "./Profile.css";

const userInfo = () => (
  <div>
    <img
      src={user.background}
      className="profileBackground"
      alt="profileBackground"
    />
    <img src={user.image} className="profileImage" alt="profileImage" />
    <h1>{user.name}</h1>
    <p>{`@${user.username}`}</p>
    <p>{user.description}</p>
  </div>
);

const Profile = () => {
  return (
    <div className="twoSideGrid">
      <div className="flexCentered">
        <NavBar />
      </div>
      <div className="flexCentered">
        <div>
          {userInfo()}
          <Feed />
        </div>
      </div>
    </div>
  );
};

export default Profile;
