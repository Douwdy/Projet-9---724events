import { useEffect, useState, useRef } from "react";
import { useData } from "../../contexts/DataContext";
import { getMonth } from "../../helpers/Date";

import "./style.scss";

const Slider = () => {
  const { data } = useData();
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);
  const byDateDesc = data?.focus?.slice().sort((evtA, evtB) =>
    new Date(evtA.date) > new Date(evtB.date) ? -1 : 1
  ) || [];

  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % byDateDesc.length);
    }, 5000);
  };

  useEffect(() => {
    startInterval();
    return () => clearInterval(intervalRef.current);
  }, [byDateDesc.length]);

  const handleRadioChange = (newIndex) => {
    setIndex(newIndex);
    clearInterval(intervalRef.current);
    startInterval();
  };

  return (
    <div className="SlideCardList">
      {byDateDesc?.map((event, idx) => (
        <div
          key={event.title}
          className={`SlideCard SlideCard--${
            index === idx ? "display" : "hide"
          }`}
        >
          <img src={event.cover} alt="forum" />
          <div className="SlideCard__descriptionContainer">
            <div className="SlideCard__description">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <div>{getMonth(new Date(event.date))}</div>
            </div>
          </div>
        </div>
      ))}
      <div className="SlideCard__paginationContainer">
        <div className="SlideCard__pagination">
          {byDateDesc?.map((event, idx) => (
            <input
              key={event.title}
              type="radio"
              name="radio-button"
              checked={index === idx}
              onChange={() => handleRadioChange(idx)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
