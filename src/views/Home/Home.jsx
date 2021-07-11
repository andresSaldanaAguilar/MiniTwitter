import NavBar from "../../components/NavBar/NavBar";
import Feed from "../../components/Feed/Feed";

const Home = () => {
  return (
    <div className="twoSideGrid">
      <div>
        <NavBar />
      </div>
      <div className="inputSide">
        <Feed />
      </div>
    </div>
  );
};

export default Home;
