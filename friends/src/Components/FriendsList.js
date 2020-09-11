import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const FriendsList = () => {
  const [friend, setFriend] = useState([]);

  axiosWithAuth()
    .get("/friends")
    .then((res) => {
      setFriend(res.data);
      console.log(res.data, "friendslist");
    })
    .catch((err) => {
      console.log(err);
    });

  return (
    <div>
      <h1>Friends List</h1>
      <div>
        {friend.map((f) => {
          return (
            <div>
              <div></div>
              <h2>NAME:</h2>
              <h3>{f.name}</h3>
              <h2>AGE:</h2>
              <h3> {f.age}</h3>
              <h2>EMAIL:</h2>
              <h3> {f.email}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FriendsList;
