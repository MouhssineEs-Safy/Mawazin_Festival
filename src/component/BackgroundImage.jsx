import React from "react";
import "./BackgroundImage.css";
import "../assets/icon/iconTX.png";

const BackgroundImage = () => {
  return (
    <section className="hero">
      <div className="content">
        <h1>
          Be Creative.
          <span>
            {""}
            <img src="./assets/icon/iconTX.png" alt="" />
          </span>
        </h1>
        <p>
          The Mawazine Festival is an annual international music festival
          founded in 2001. It takes place in the Moroccan capital, Rabat,
          between May and June, under the patronage of King Mohammed VI.
        </p>
        <a className="" href="#">
          Start
        </a>
      </div>
    </section>
  );
};

export default BackgroundImage;
