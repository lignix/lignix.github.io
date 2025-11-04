import { useForm, ValidationError } from '@formspree/react';
import { useInView } from 'react-intersection-observer';
import contactLogo from '../assets/images/contact.png';

const FORM_ID = "mkgplajw";

function ContactForm() {
    const [state, handleSubmit] = useForm(FORM_ID);
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    if (state.succeeded) {
        return (
            <section id="contact" className="section contact">
                <div className="title-container">
                    <img src={contactLogo} alt="logo contact" />
                    <h2>Mon profil vous intéresse ?</h2>
                </div>
                <div className="contact-success">
                    <h3>Merci !</h3>
                    <p>Votre message a bien été envoyé. Je vous répondrai rapidement.</p>
                </div>
            </section>
        );
    }

    return (
        <section id="contact" className={`section contact`}>
            <div className="title-container">
                <img src={contactLogo} alt="logo contact" />
                <h2>Mon profil vous intéresse ?</h2>
            </div>
            <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
                N'hésitez pas à me laisser un message directement ici.
            </p>

            <form onSubmit={handleSubmit} className={`contact-form animate-on-scroll ${inView ? 'is-visible' : ''}`} ref={ref}>
                <div className="form-group">
                    <label htmlFor="email">
                        Votre Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        required
                    />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                        className="error-message"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="message">
                        Votre Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                    />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                        className="error-message"
                    />
                </div>

                <button type="submit" className="btn-cv" disabled={state.submitting}>
                    {state.submitting ? 'Envoi en cours...' : 'Envoyer'}
                </button>
            </form>
        </section>
    );
}

export default ContactForm;