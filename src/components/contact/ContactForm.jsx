// ContactForm.jsx
import { useState } from 'react';
import '../../styles/styles.css';

const ContactForm = () => {
    const handleContact = () => {
        alert(`
            Form submission successful!
        `);
    };


    // form 데이터를 관리할 state
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [wasValidated, setWasValidated] = useState(false);
    const [formLocked, setFormLocked] = useState(false);

    // input 변경 핸들러
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    // form 제출 핸들러
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setWasValidated(true);

        // 폼 유효성 검사
        const form = e.currentTarget;
        if (!form.checkValidity()) {
            e.stopPropagation();
            setIsSubmitting(false);
            return;
        }

        try {
            // API 호출 예시
            // const response = await fetch('your-api-endpoint', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(formData)
            // });

            // if (response.ok) {
            //     alert('Message sent successfully!');
            //     setFormData({
            //         name: '',
            //         email: '',
            //         phone: '',
            //         message: ''
            //     });
            // }

            // 테스트용 콘솔 출력
            console.log('Form submitted:', formData);
            setSubmitStatus('success');
            setFormLocked(true);

            handleContact();
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };


    return (
        <div class="bg-light rounded-4 py-5 px-4 px-md-5">
            <div class="text-center mb-5">
                <div class="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 mb-3">
                    <i class="fa-regular fa-envelope" /> 
                </div>
                <h1 class="fw-bolder">Get in touch</h1>
                <p class="lead fw-normal text-muted mb-0">Let's work together!</p>
            </div>
            <div class="row gx-5 justify-content-center">
                <div class="col-lg-8 col-xl-6">
                    <form onSubmit={handleSubmit} class={wasValidated ? 'was-validated' : ''} noValidate>
                        <div class="form-floating mb-3">
                            <input
                                class="form-control"
                                id="name"
                                type="text"
                                placeholder="Enter your name..."
                                required
                                value={formData.name}
                                onChange={handleChange}
                                disabled={formLocked}
                            />
                            <label for="name">Full name</label>
                            <div class="invalid-feedback">A name is required.</div>
                        </div>
                        <div class="form-floating mb-3">
                            <input
                                class="form-control"
                                id="email"
                                type="email"
                                placeholder="name@example.com"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                disabled={formLocked}
                            />
                            <label for="email">Email address</label>
                            <div class="invalid-feedback">
                                {formData.email ? 'Email is not valid.' : 'An email is required.'}
                            </div>
                        </div>
                        <div class="form-floating mb-3">
                            <input
                                class="form-control"
                                id="phone"
                                type="tel"
                                placeholder="(123) 456-7890"
                                required
                                value={formData.phone}
                                onChange={handleChange}
                                disabled={formLocked}
                            />
                            <label for="phone">Phone number</label>
                            <div class="invalid-feedback">A phone number is required.</div>
                        </div>
                        <div class="form-floating mb-3">
                            <textarea
                                class="form-control"
                                id="message"
                                placeholder="Enter your message here..."
                                style={{height: '10rem'}}
                                required
                                value={formData.message}
                                onChange={handleChange}
                                disabled={formLocked}
                            ></textarea>
                            <label for="message">Message</label>
                            <div class="invalid-feedback">A message is required.</div>
                        </div>
                        {submitStatus === 'success' && (
                            <div class="text-center mb-3">
                                <div class="fw-bolder">Form submission successful</div>
                                To activate this form, sign up at
                                <br />
                                <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                            </div>
                        )}
                        {submitStatus === 'error' && (
                            <div class="text-center text-danger mb-3">
                                Error sending message!
                            </div>
                        )}
                        <div class="d-grid">
                            <button
                                class="btn btn-primary btn-lg"
                                type="submit"
                                disabled={isSubmitting || formLocked}
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;