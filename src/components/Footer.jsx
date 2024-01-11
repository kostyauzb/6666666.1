import React from "react";
import img2 from "../../public/images/div1.png";
import img3 from "../../public/images/div2.png";
import img4 from "../../public/images/div3.png";

const footer = () => {
  return (
    <div className="footer">
      <div className="footer_div">
        <div className="div1">
          <img src={img2} alt="" />
          <div className="div_ichki">
            <h2>01</h2>
            <h4>Reviving Retro PCs</h4>
            <h5>What happens when old PCs are given modern upgrades?</h5>
          </div>
        </div>

        <div className="div1">
          <img src={img3} alt="" />
          <div className="div_ichki">
            <h2>02</h2>
            <h4>Top 10 Laptops of 2022</h4>
            <h5>Our best picks for various needs and budgets.</h5>
          </div>
        </div>

        <div className="div1">
          <img src={img4} alt="" />
          <div className="div_ichki">
            <h2>03</h2>
            <h4>The Growth of Gaming</h4>
            <h5>How the pandemic has sparked fresh opportunities.</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
