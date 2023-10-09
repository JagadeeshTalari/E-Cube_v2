import React, { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "./Header.css";

const couraselImgs = [
  "https://assets-in.bmscdn.com/promotions/cms/creatives/1696598177820_equalizerdesktop.jpg",
  "https://assets-in.bmscdn.com/promotions/cms/creatives/1691130965445_wwesuperstardesktop.jpg",
  "https://assets-in.bmscdn.com/promotions/cms/creatives/1690628905918_webbannernpa.jpg",
  "https://assets-in.bmscdn.com/promotions/cms/creatives/1692954046674_lolladesktop.jpg",
  "https://assets-in.bmscdn.com/promotions/cms/creatives/1696597158375_missionimpossibldesktop.jpg",
];

function Header() {
  const [imgcount, setImgCount] = useState(0);

  //courasel - auto-slider__Logic
  useEffect(() => {
    const interval = setInterval(() => {
      if (imgcount === couraselImgs.length - 1) {
        setImgCount(0);
      } else {
        setImgCount(imgcount + 1);
      }
    }, 3000);

    //Clearing the interval
    return () => clearInterval(interval);
  }, [imgcount]);

  const prevBtnClickHandler = () => {
    if (imgcount === 0) {
      setImgCount(couraselImgs.length - 1);
    } else {
      setImgCount(imgcount - 1);
    }
  };

  const nextBtnClickHandler = () => {
    if (imgcount === couraselImgs.length - 1) {
      setImgCount(0);
    } else {
      setImgCount(imgcount + 1);
    }
  };

  return (
    <div>
      <div className="slider">
        {/* slider */}

        <div className="courasel">
          <button
            className="courasel-btn prevBtn"
            onClick={prevBtnClickHandler}
          >
            <IoIosArrowBack />
          </button>

          <img src={couraselImgs[imgcount]} alt="" />

          <button
            className="courasel-btn nextBtn"
            onClick={nextBtnClickHandler}
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
