import NavBar from '../../components/NavBar';
import Feed from '../../components/Feed';

const Home = () => {
  return (
    <div className="twoSideGrid">
      <div className="flexCentered">
        <NavBar />
      </div>
      <div className="flexCentered">
        <Feed />
      </div>
    </div>
  );
};

export default Home;
