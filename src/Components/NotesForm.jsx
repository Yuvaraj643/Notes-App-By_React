import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addNote } from "../Redux/action";
import "./NotesFormstyle.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function NotesForm() {
  let [title, setTitle] = useState("");
  let [content, setContent] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmission(e) {
    e.preventDefault();
    dispatch(addNote(title, content));
    setTitle("");
    setContent("");
    navigate("/allNotes");

    toast.success("Note added successfully!", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000
    });
  }

  function handleAllNotesClick() {
    navigate("/allNotes");
  }

  return (
    <>
      <div className="all">
        <h1>Notes App</h1>
      </div>
      <div className="center">
      <button className="btn" role="button" onClick={handleAllNotesClick}>
        <strong>ALL NOTES</strong>
        <div id="container-stars">
          <div id="stars"></div>
        </div>
        <div id="glow">
          <div class="circle"></div>
          <div class="circle"></div>
        </div>
      </button></div>
      <div className="main">
        <div className="img2"></div>
        <div className="formContainer" id="animation" >
          <h3>Add a Note :</h3>
          <form onSubmit={handleSubmission}>
            <b>Title: </b> <br />
            <input
              type="text"
              class="input"
              name="title"
              value={title}
              placeholder="Enter title"
              onChange={(e) => setTitle(e.target.value)}
              required
            />{" "}
            <br />
            <b>Content: </b> <br />
            <textarea
              name="content"
              class="input"
              id="area1"
              value={content}
              placeholder="Enter content"
              onChange={(e) => setContent(e.target.value)}
              required
            >{" "}</textarea>
            <br />
            <br />
            <button className="btn" role="button">
              <strong>ADD NOTE</strong>
              <div id="container-stars">
                <div id="stars"></div>
              </div>

              <div id="glow">
                <div class="circle"></div>
                <div class="circle"></div>
              </div>
            </button>
          </form>
        </div>
      </div>

      {/* Footer Scetion */}

      <div className="footer">
        <div className="text">
          <p className="footer-text">Made with 💖 by Yuvaraj</p>
        </div>
      </div>
    </>
  );
}
