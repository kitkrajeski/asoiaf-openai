import React, { useEffect, useContext } from "react";
import { HouseContext } from "../context/HouseProvider";

function Houses() {
  // const {house, getRandomHouse} = useHouseContext()
  const {
    house,
    getRandomHouse,
    handleFavorite,
    user,
    userState,
    userHouses,
    setUserHouses,
  } = useContext(HouseContext);

  useEffect(() => {
    getRandomHouse();
  }, []);
  const handleGetRandomHouse = () => {
    getRandomHouse();
  };
  return (
    <div className="houses default--background">
      <button className="houses main--button" onClick={handleGetRandomHouse}>
        Get New House
      </button>
      {house ? (
        <div className="houses--background">
          <h1 className="houses--text">{house.name}</h1>
          <h1 className="houses--text">{house.region}</h1>
          {house.words && (
            <h2 className="houses--text">{`'${house.words}'`}</h2>
          )}
          <img className="houses--crests" src={house.crest} />
        </div>
      ) : (
        <div>
          <h1 className="loading-button houses--text">Loading House...</h1>
        </div>
      )}
      <button
        className="houses main--button"
        onClick={() => handleFavorite(house.name, { crest: house.crest })}
      >
        Add to Favorites
      </button>
    </div>
  );
}

export default Houses;
