import React, { useContext, useEffect } from "react";
import { HouseContext } from "../context/HouseProvider";
// import UserHouseList from "./UserHouseList";
import UserHousesList from "./UserHouseList";
import UserHouse from "./UserHouse";

function Profile() {
  const { userState, userHouses, getFavorites } = useContext(HouseContext);
  useEffect(() => {
    if (userState.user.username) {
      getFavorites();
    }
  }, [userState.user]);
  return (
    <>
      <div className="profile">
        <h1 className="profile-text red--background primary--text--style">
          Welcome to Your Database, {userState.user.username}
        </h1>
        <h2 className="profile-text red--background primary--text--style">
          Customize Your Favorite Houses Here!
        </h2>
        {/* <p>{JSON.stringify(userHouses, null, 2)}</p> */}
      </div>
      <UserHousesList userHouses={userHouses} className="houses" />
      {/* <UserHouse /> */}
    </>
  );
}

export default Profile;
