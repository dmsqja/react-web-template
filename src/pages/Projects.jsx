// Projects.jsx
import ProjectCard from '../components/projects/ProjectCard';
import ContactMe from '../components/projects/ContactMe';
import '../styles/styles.css';

const Projects = () => {
  return (
    <body class="d-flex flex-column h-100 bg-light">
      <main class="flex-shrink-0">
        <ProjectCard />
        <ContactMe />
      </main>
    </body>
  );
};

export default Projects;