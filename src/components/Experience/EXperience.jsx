import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import "./EXperience.css";

const EXperience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience-container">
        <div className="experience-frontend">
          <h3>front-end Development</h3>

          <div className="experience-content">
            <article className="experience-detalis">
              <FaCheckCircle />
              <div>
                <h4>Html</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>

            <article className="experience-detalis">
              <FaCheckCircle />
              <div>
                <h4>Css</h4>
                <small className="text-light">Average Level</small>
              </div>
            </article>

            <article className="experience-detalis">
              <FaCheckCircle />
              <div>
                <h4>BootStrap</h4>
                <small className="text-light">Average Level</small>
              </div>
            </article>

            <article className="experience-detalis">
              <FaCheckCircle />
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Average Level</small>
              </div>
            </article>

            <article className="experience-detalis">
              <FaCheckCircle />
              <div>
                <h4>Git & GitHub</h4>
                <small className="text-light">Average Level</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience-frontend-lib">
          <h3>front-end Development</h3>

          <div className="experience-content">
            <article className="experience-detalis">
              <FaCheckCircle />
              <div>
                <h4>React.Js</h4>
                <small className="text-light">Average Level</small>
              </div>
            </article>

            <article className="experience-detalis">
              <FaCheckCircle />
              <div>
                <h4>Redux</h4>
                <small className="text-light">Average Level</small>
              </div>
            </article>

            <article className="experience-detalis">
              <FaCheckCircle />
              <div>
                <h4>Redux-ToolKit</h4>
                <small className="text-light">Average Level</small>
              </div>
            </article>

            <article className="experience-detalis">
              <FaCheckCircle />
              <div>
                <h4>Next-Js</h4>
                <small className="text-light">Average Level</small>
              </div>
            </article>

            <article className="experience-detalis">
              <FaCheckCircle />
              <div>
                <h4>Json-Server</h4>
                <small className="text-light">Average Level</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EXperience;
