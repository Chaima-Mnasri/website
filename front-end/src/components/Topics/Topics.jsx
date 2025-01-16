import React, { useState } from "react";
import "./Topics.css";
import {
  frequencies,
  daw,
  vocalsProcessing,
  mixing,
  mixingConsole,
  mastering,
  bgElement1,
} from "../../assets";

const Topics = () => {
  const [currentImage, setCurrentImage] = useState(frequencies);

  return (
    <section id="topics" className="black">
      <div className="wrapper">
        <h2>What will you What?</h2>
        <div className="content-container">
          <ul className="topics-list">
            <li onMouseEnter={() => setCurrentImage(frequencies)}>
              Kurse für Dance Workouts
            </li>
            <li onMouseEnter={() => setCurrentImage(daw)}>Fitness Kurse</li>
            <li onMouseEnter={() => setCurrentImage(vocalsProcessing)}>
              Kurse für Körper & Geist
            </li>
            <li onMouseEnter={() => setCurrentImage(mixing)}>Outdoor Fitness Kurze</li>
            <li onMouseEnter={() => setCurrentImage(mixingConsole)}>
              Kurse zum Abnehmen
            </li>
            <li onMouseEnter={() => setCurrentImage(mastering)}>Online Fitness-Kurse</li>
          </ul>

          <div className="topic-image">
            <img src={currentImage}></img>
          </div>
        </div>
        <img src={bgElement1} className="bg-element-1"></img>
      </div>
    </section>
  );
};

export default Topics;