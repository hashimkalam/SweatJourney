import React, { useEffect, useState } from "react";
import "./Transformation.css";
import { db, storage } from "../firebase";

import { Button, LinearProgress, TextField } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import firebase from "firebase";
import Post from "./Post";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";

function Transformation() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [posts, setPosts] = useState([]);
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [name, setName] = useState("");
  const [caption, setCaption] = useState("");
  const [imageUrl, setImageUrl] = useState(""); // New state for the image URL

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error);
        alert(error.message);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            db.collection("posts").add({
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              name: name,
              caption: caption,
              image: url,
            });

            setImageUrl(url); // Set the image URL
            setProgress(0);
            setName("");
            setCaption("");
            setImage(null);
          });
      }
    );
  };

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  }, []);
  return (
    <div className="transformation">
      {user ? (
        <>
          <div className="transformation__content">
            <Link to="/training">
              <ArrowBackIosIcon />
            </Link>
            <div className="transformation__contents">
              <LinearProgress
                className="transformation__progress"
                variant="determinate"
                value={progress}
              />
              <TextField
                type="text"
                className="transformation__input"
                placeholder="Enter your name..."
                onChange={(event) => setName(event.target.value)}
                value={name}
              />
              <TextField
                type="text"
                className="transformation__input"
                placeholder="Enter a caption..."
                onChange={(event) => setCaption(event.target.value)}
                value={caption}
              />
              <input type="file" onChange={handleChange} />

              <Button
                className="transformation__uploadButton"
                onClick={handleUpload}
              >
                Upload
              </Button>
            </div>
          </div>
          <div className="transformation__posts">
            {posts.map((post) => (
              <Post
                key={post.id}
                name={post.data.name}
                caption={post.data.caption}
                timestamp={post.data.timestamp}
                image={post.data.image}
              />
            ))}
          </div>
        </>
      ) : (
        <h2 className="transformation__errorMsg"> Error: Register First!!</h2>
      )}
    </div>
  );
}

export default Transformation;
