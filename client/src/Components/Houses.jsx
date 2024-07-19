import React, { useEffect, useContext, useState } from "react";
import { HouseContext } from "../context/HouseProvider";
import House from "./House";
import LoadingIndicator from "./Loading";

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
      {/* {loading ? (
        <LoadingIndicator label="Loading House..." />
      ) : house ? (
        <House
          house={house}
          onFavoriteClick={() =>
            handleFavorite(house.name, { crest: house.crest })
          }
        />
      ) : null} */}
      {loading && <LoadingIndicator label="Loading House..." />}
      {house && (
        <House
          house={house}
          onFavoriteClick={() =>
            handleFavorite(house.name, { crest: house.crest })
          }
        />
      )}
    </div>
  );
}

export default Houses;
