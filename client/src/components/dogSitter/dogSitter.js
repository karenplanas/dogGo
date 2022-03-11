import React, { useEffect, useState } from "react";
import { Pagination, Navigation, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import avatarPic from "../../static/images/avatar.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import './dogSitter.css'

const APIbase = "http://localhost:3001";

const DogSitter = () => {
  const [sitters, setSitters] = useState([]);
  const [popupActive, setPopupActive] = useState(false);
  const [name, setName] = useState("");
  const [quote, setQuote] = useState("");
  const [avatar, setAvatar] = useState("");

  const getSitters = () => {
    fetch(APIbase + "/sitters")
      .then((res) => res.json())
      .then((data) => setSitters(data))
      .catch((e) => console.error(e));
  };

  useEffect(() => {
    getSitters();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newSitter = {
      name,
      quote,
      avatar,
    };
    fetch(APIbase + "/sitters", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newSitter),
    }).then(() => {
      setSitters([...sitters, newSitter]);
      setName("");
      setQuote("");
      setAvatar("");
      setPopupActive(false);
      getSitters();
    });
  };

  // need avatar images have found middleware that allows images to be stored to mongoose but ive also read this is bad practice.
  return (
    <section id="dogSitter">
      <h2> Book a holiday for your pet with our profesional pet sitters </h2>
      <h5>
        each one of pet sitters are specialists in animal care wether in your
        home or theirs, you can leave your animal guilt free
      </h5>
      <Swiper
        className="container sitter_container"
        modules={[Pagination, Navigation, A11y]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={true}
      >
        {sitters.length > 0 ? (
          sitters.map((sitter) => (
            <SwiperSlide key={sitter._id} className="sitter">
              <div className="sitter_avatar">
                <img src={avatarPic} alt="avatar" className="avatarPic" />
              </div>
              <h5 className="sitterName"> {sitter.name.toUpperCase()} </h5>
              <small className="sitter_quote"> " {sitter.quote} "</small>
              <div className="sitter_buttons">
                <button className="btn btn-primary "> message Sitter </button>
                <button className="btn learn"> Learn More </button>
              </div>
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide className="sitter">
            <div className="sitter_avatar"></div>
            <h5 className="sitterName"> we are sorry </h5>
            <small className="sitter_quote">
              {" "}
              No sitters are availabe in your area{" "}
            </small>
          </SwiperSlide>
        )}
      </Swiper>
      <div className="become-sitter">
        <button
          className="btn btn-primary join"
          onClick={() => setPopupActive(true)}
        >
          Join our team!
        </button>
      </div>
      {popupActive ? (
        <div className="popupForm">
          <div className="formDiv">
            <h2 className="formTitle"> Become a sitter!</h2>
            <form onSubmit={(e) => handleSubmit(e)}>
              <label>Name</label>
              <br />
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="add name here.."
                className="textArea"
              />
              <br />
              <label> About you </label>
              <br />
              <input
                required
                type="text"
                value={quote}
                onChange={(e) => setQuote(e.target.value)}
                className="textArea about"
                placeholder="tell us a bit about yourself and animal experience here.."
              />
              <br />
              <label>Avatar</label>
              <br />
              <input
                type="text"
                value={avatar}
                onChange={(e) => setAvatar(e.target.value)}
                className="textArea"
                placeholder="eventually you will upload a photo here.."
              />
              <br />
              <div className="form_buttons">
                <button className="btn submitBtn"> Join! </button>
                <button
                  className="btn btn-primary"
                  onClick={() => setPopupActive(false)}
                >
                  close
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        ""
      )}
    </section>
  );
};

export default DogSitter;
