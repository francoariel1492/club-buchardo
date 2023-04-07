import flyer from "../../assets/flyer.jpeg";
import { programsData } from "../../data/programsData";
import "./Programs.css";

const Programs = () => {
  return (
    <div className="Programs" id="Clases">
      <div className="programs-header">
        <span className="stroke-text">Nuestras</span>
        <span className="spanBlack">Clases</span>
      </div>
      <div className="program-categories">
        <ul className="ul">
          {programsData.map((program, index) => (
            <div className="category" key={index}>
              <li>{program.heading}</li>
              <li>{program.subHeading}</li>
              <li>{program.details}</li>
            </div>
          ))}
        </ul>
      </div>
      <img src={flyer} className="flyer" alt="flyer" />
    </div>
  );
};

export default Programs;
