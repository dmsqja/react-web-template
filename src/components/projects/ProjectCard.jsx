// ProjectCard.jsx
import PropTypes from 'prop-types';
import '../../styles/styles.css';

const ProjectCard = () => {
  return (
    <section>
        <div class="card overflow-hidden shadow rounded-4 border-0 mb-5">
            <div class="card-body p-0">
                <div class="d-flex align-items-center">
                    <div class="p-5">
                        <h2 class="fw-bolder">Project Name 1</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius at enim eum illum aperiam placeat esse? Mollitia omnis minima saepe recusandae libero, iste ad asperiores! Explicabo commodi quo itaque! Ipsam!</p>
                    </div>
                    <img class="img-fluid" src="https://dummyimage.com/300x400/343a40/6c757d" alt="..." />
                </div>
            </div>
        </div>
        <div class="card overflow-hidden shadow rounded-4 border-0">
            <div class="card-body p-0">
                <div class="d-flex align-items-center">
                    <div class="p-5">
                        <h2 class="fw-bolder">Project Name 2</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius at enim eum illum aperiam placeat esse? Mollitia omnis minima saepe recusandae libero, iste ad asperiores! Explicabo commodi quo itaque! Ipsam!</p>
                    </div>
                    <img class="img-fluid" src="https://dummyimage.com/300x400/343a40/6c757d" alt="..." />
                </div>
            </div>
        </div>
    </section>

  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    image: PropTypes.string,
    demoUrl: PropTypes.string,
    githubUrl: PropTypes.string
  }).isRequired
};

export default ProjectCard;