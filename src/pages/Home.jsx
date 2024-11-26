// Home page
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import '../styles/styles.css'

const Home = () => {
  return (
    <body class="d-flex flex-column h-100">
      <main class="flex-shrink-0">
        <Hero />
        <About />
      </main>
    </body>
  );
};

export default Home;