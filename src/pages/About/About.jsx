import img from "../../assets/images/nico.jpeg"
import "./about.css";

const About = () => (
  <div className="about">
    <img className="about__image" src={img} alt="img" />
    <h2 className="about__title">Nicolle Montilla Ruiz</h2>
    <h5 className="about__subtitle">Frontend Developer</h5>
    <p className="about__description">Frontend developer with experience in projects that includes landing pages and web applications; passionated about learning web technologies to make products with ease, simplicity and effectiveness. I have experience working with technologies such as HTML, CSS, SASS and JavaScript.</p>
  </div>
);

export default About;
