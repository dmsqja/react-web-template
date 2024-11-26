// Projects page
import ProjectCard from '../components/projects/ProjectCard';
import ContactMe from '../components/projects/ContactMe';
import '../styles/styles.css';

const Projects = () => {
  return (
    <body class="d-flex flex-column h-100 bg-light">
      <main class="flex-shrink-0">
        <section class="py-5">
          <div class="container px-5 mb-5">
            <div class="text-center mb-5">
              <h1 class="display-5 fw-bolder mb-0"><span class="text-gradient d-inline">Projects</span></h1>
            </div>
            <div class="row gx-5 justify-content-center">
              <div class="col-lg-11 col-xl-9 col-xxl-8">
                <ProjectCard />
                <ContactMe />
              </div>
            </div>
          </div>
        </section>
      </main>
    </body>
  );
};

export default Projects;