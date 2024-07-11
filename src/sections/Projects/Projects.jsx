import styles from "./ProjectsStyles.module.css";
import AmaQanda from "../../assets/amaqanda.png";
import NexusDJs from "../../assets/localDj.png";
import Belt from "../../assets/belt.png";
import Twosly from "../../assets/twosly.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard link='https://facebook.com' src={AmaQanda} h3={'AmaQanda & Chicken'} p={'Market App'} />
        <ProjectCard link='https://facebook.com' src={NexusDJs} h3={'Nexus Local'} p={'News Blog'} />
        <ProjectCard link='https://facebook.com' src={Belt} h3={'Belt'} p={'Apparel App'} />
        <ProjectCard link='https://facebook.com' src={Twosly} h3={'TwoSly'} p={'NGO Company Site'} />
      </div>
    </section>
  );
}

export default Projects;
