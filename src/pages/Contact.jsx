import ContactForm from '../components/contact/ContactForm';
import '../styles/styles.css';

const Contact = () => {
  return (
    <body class="d-flex flex-column">
      <main class="flex-shrink-0">
        <section class="py-5">
          <div class="container px-5">
              <ContactForm />
          </div>
        </section>
      </main>
    </body>
  );
};

export default Contact;