import img from "../../assets/images/carlos-vega.jpeg"
import "./about.css";

const About = () => (
  <div className="about">
    <img className="about__image" src={img} alt="img" />
    <h2 className="about__title">Carlos Vega</h2>
    <h5 className="about__subtitle">Frontend Developer</h5>
    <p className="about__description">
      Frontend developer with experience in React, HTML, CSS and SASS, oriented to results with remarkable ability to analyze, search and deliver solutions in a timely manner. Good team player but at the same time with great ability to work with minimal to no supervision.
    </p>
  </div>
);

export default About;
