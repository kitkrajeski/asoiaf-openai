import { HouseContext } from "../context/HouseProvider";
import { useContext } from "react";

export default function UserHouse(props) {
  const { userHouse } = props;
  const { removeFavorite } = useContext(HouseContext);
  console.log(userHouse);

  function handleRemoveFavorite() {
    removeFavorite(userHouse._id);
  }
  // return <li>{renderItem}</li>;
  return (
    <div className="user-houses">
      <ul className="houses--background">
        <h1 className="user-houses houses--text">{userHouse.house.name}</h1>
        <h1 className="user-houses houses--text">{userHouse.house.region}</h1>
        <h1 className="user-houses houses--text">{userHouse.house.words}</h1>
        <img
          className="user-houses houses--crests coat-of-arms"
          src={userHouse.customizations.crest}
        />
      </ul>
      <button onClick={handleRemoveFavorite} className="main--button">
        Remove Favorite
      </button>
    </div>
  );
}
