import React from "react";
import img1 from "../../public/images/images1.png";

const Main = () => {
  return (
    <div className="main">
      <div className="main_ong">
        <img src={img1} alt="" />
        <div className="main_div">
          <div className="div_title">
            <h1>The Bright Future of Web 3.0?</h1>
          </div>
          <div className="div_titles">
            <h3>
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </h3>
            <button>READ MORE</button>
          </div>
        </div>
      </div>

      <div className="main_chap">
        <div className="ichki">
          <h1>New</h1>
          <h2>Hydrogen VS Electric Cars</h2>
          <h4>Will hydrogen-fueled cars ever catch up to EVs?</h4>
          <div className="hr"></div>
          <h2>The Downsides of AI Artistry</h2>
          <h4>
            What are the possible adverse effects of on-demand AI image
            generation?
          </h4>
          <div className="hr"></div>
          <h2>Is VC Funding Drying Up?</h2>
          <h4>
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Main;
