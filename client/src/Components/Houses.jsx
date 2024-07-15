import React, { useEffect, useContext, useState } from "react";
import { HouseContext } from "../context/HouseProvider";

function Houses() {
  // const {house, getRandomHouse} = useHouseContext()
  const { house, getRandomHouse, handleFavorite, loading } =
    useContext(HouseContext);

  // const [loading, setLoading] = useState(false);

  // function handleLoadState() {
  //   if (house) {
  //     setLoading(true);
  //   } else {
  //     setLoading(false);
  //   }
  // }

  // useEffect(() => {
  //   getRandomHouse();
  // }, [{ loading }]);
  // const handleGetRandomHouse = () => {
  //   getRandomHouse();
  // };

  return (
    <div className="houses default--background">
      {/* <button className="houses main--button" onClick={handleGetRandomHouse}> */}
      <button className="houses main--button" onClick={() => getRandomHouse()}>
        Get New House
      </button>
      {loading ? (
        <>
          <div className="houses--background">
            <h1 className="houses--text primary--text--style">{house.name}</h1>
            <h1 className="houses--text primary--text--style">
              {house.region}
            </h1>
            {house.words && (
              <h2 className="houses--text primary--text--style">{`'${house.words}'`}</h2>
            )}
            <img className="houses--crests" src={house.crest} />
          </div>
          <button
            className="houses main--button"
            onClick={() => handleFavorite(house.name, { crest: house.crest })}
          >
            Add to Favorites
          </button>
        </>
      ) : (
        <div>
          <h1 className="loading-button houses--text primary--text--style">
            Loading House...
          </h1>
        </div>
      )}
    </div>
  );
}

export default Houses;
