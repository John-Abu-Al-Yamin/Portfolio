import React from "react";
import img1 from "../assets/portfolio1.png";
import img2 from "../assets/portfolio2.png";
import img3 from "../assets/portfolio3.png";
import img4 from "../assets/portfolio4.png";
import img5 from "../assets/portfolio5.png";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <section id="#portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio-container">
        {/* E-Commerce */}
        <article className="portfolio-item">
          <div className="portfolio-image">
            <img src={img2} alt="" />
          </div>
          <h3>E-Commerce </h3>
          <div className="portfolio-cta">
            <a href="https://github.com/John-Abu-Al-Yamin" className="btn">
              GitHub
            </a>
            <a
              href="https://exclusive-e-commerce-react-js.vercel.app/home"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
        {/* School Management System */}
        <article className="portfolio-item">
          <div className="portfolio-image">
            <img src={img5} alt="" />
          </div>
          <h3>School Management System </h3>
          <div className="portfolio-cta">
            <a href="https://github.com/John-Abu-Al-Yamin" className="btn">
              GitHub
            </a>
            <a
              href="https://system-dashboard.vercel.app/"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
        {/* Ecommerce For Home Foundations  */}
        <article className="portfolio-item">
          <div className="portfolio-image">
            <img src={img1} alt="" />
          </div>
          <h3>Ecommerce For Home Foundations </h3>
          <div className="portfolio-cta">
            <a href="https://github.com/John-Abu-Al-Yamin" className="btn">
              GitHub
            </a>
            <a
              href="https://bellacasa-furniture-react-js.vercel.app/home"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
        {/* Restaurant-App */}
        <article className="portfolio-item">
          <div className="portfolio-image">
            <img src={img4} alt="" />
          </div>
          <h3>Restaurant-App </h3>
          <div className="portfolio-cta">
            <a href="https://github.com/John-Abu-Al-Yamin" className="btn">
              GitHub
            </a>
            <a
              href="https://restaurant-swart-xi.vercel.app/home"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
        {/* Movie-App */}
        <article className="portfolio-item">
          <div className="portfolio-image">
            <img src={img3} alt="" />
          </div>
          <h3>Movie-App </h3>
          <div className="portfolio-cta">
            <a href="https://github.com/John-Abu-Al-Yamin" className="btn">
              GitHub
            </a>
            <a
              href="https://movie-pi-hazel.vercel.app/"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
