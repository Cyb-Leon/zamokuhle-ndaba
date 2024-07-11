import styles from "./ProjectsStyles.module.css";
import Viberr from "../../assets/viberr.png";
import BigMouth from "../../assets/fresh-burger.png";
import LearnerTraining from "../../assets/hipsster.png";
import GetFitWtihMozi from "../../assets/fitlift.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectContainer}>
        <ProjectCard link='https://facebook.com' src={Viberr} h3={'Viberr'} p={'Streaming App'} />
        <ProjectCard link='https://facebook.com' src={BigMouth} h3={'Big Mouth'} p={'FastFood Restaurant'} />
        <ProjectCard link='https://facebook.com' src={LearnerTraining} h3={''} p={'Candidate App'} />
        <ProjectCard link='https://facebook.com' src={GetFitWtihMozi} h3={'Get Fit with Mozi'} p={'Fitness Gym App'} />
      </div>
    </section>
  );
}

export default Projects;
