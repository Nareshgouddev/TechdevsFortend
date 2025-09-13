import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import { BASE_URL } from "../utils/constants";
import UserCard from "./UserCard";

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();

  const getFeed = async () => {
    if (feed) return;
    try {
      const res = await axios.get(`${BASE_URL}/feed`, {
        withCredentials: true,
      });
      dispatch(addFeed(res.data));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  if (!feed || !Array.isArray(feed.users)) {
    return <div>Loading...</div>;
  }

  if (feed.users.length === 0) {
    return <h1 className="flex justify-center my-10">No new users found!</h1>;
  }

  return (
    <div className="flex flex-wrap justify-center my-10 gap-4">
      {feed.users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default Feed;
