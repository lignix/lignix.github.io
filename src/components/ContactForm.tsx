import { useForm, ValidationError } from '@formspree/react';
import { useInView } from 'react-intersection-observer';
import contactLogo from '../assets/images/contact.png'; 
import { useLanguage } from '../context/LanguageContext'; 

const FORM_ID = "mkgplajw";

function ContactForm() {
    const { t } = useLanguage();
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
                    <h2>{t.contact.title}</h2>
                </div>
                <div className="contact-success">
                    <h3>{t.contact.successTitle}</h3>
                    <p>{t.contact.successMsg}</p>
                </div>
            </section>
        );
    }

    return (
        <section id="contact" className={`section contact`}>
            <div className="title-container">
                <img src={contactLogo} alt="logo contact" />
                <h2>{t.contact.title}</h2>
            </div>
            <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
                {t.contact.subtitle}
            </p>

            <form onSubmit={handleSubmit} className={`contact-form animate-on-scroll ${inView ? 'is-visible' : ''}`} ref={ref}>
                <div className="form-group">
                    <label htmlFor="email">
                        {t.contact.emailLabel}
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
                        {t.contact.messageLabel}
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
                    {state.submitting ? t.contact.sending : t.contact.sendBtn}
                </button>
            </form>
        </section>
    );
}

export default ContactForm;