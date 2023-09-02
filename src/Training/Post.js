import React from "react";
import "./Post.css";
import { Button } from "@mui/material";
import { useStateValue } from "../StateProvider";

function Post({ id, image, name, timestamp, caption, imageUrl }) {
  const [dispatch] = useStateValue();

  const removeFromBasket = (e) => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="post">
      <div className="post__left">
        <img className="post__image" src={image} alt="" />
      </div>

      <div className="post__right">
        <div className="post__topInfo">
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
          <div className="post__topInfoHead">
            <h3>{name}</h3>
            <Button className="post__topInfoDelete" onClick={removeFromBasket}>
              Delete
            </Button>
          </div>
        </div>

        <p className="post__message">{caption}</p>
      </div>
    </div>
  );
}

export default Post;
