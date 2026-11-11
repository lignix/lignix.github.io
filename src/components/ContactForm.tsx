import { useForm, ValidationError } from '@formspree/react';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../context/LanguageContext'; 

const FORM_ID = "mkgplajw";

function ContactForm() {
    const { t } = useLanguage();
    const [state, handleSubmit] = useForm(FORM_ID);
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <section id="contact" className="section">
            <div className="section-header" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <div>
                    <h2 className="section-title" style={{ margin: 0 }}>{t.contact.title}</h2>
                    <p className="section-subtitle" style={{ margin: 0 }}>{t.contact.subtitle}</p>
                </div>
            </div>

            {state.succeeded ? (
                <div className="contact-success">
                    <h3>{t.contact.successTitle}</h3>
                    <p>{t.contact.successMsg}</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className={`contact-form animate-on-scroll ${inView ? 'is-visible' : ''}`} ref={ref}>
                    <div className="form-group">
                        <label htmlFor="email">{t.contact.emailLabel}</label>
                        <input id="email" type="email" name="email" required placeholder="votre.email@exemple.com" />
                        <ValidationError prefix="Email" field="email" errors={state.errors} className="error-message" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">{t.contact.messageLabel}</label>
                        <textarea id="message" name="message" rows={5} required placeholder="Bonjour, je vous contacte concernant..." />
                        <ValidationError prefix="Message" field="message" errors={state.errors} className="error-message" />
                    </div>

                    <button type="submit" className="btn-cv" disabled={state.submitting}>
                        {state.submitting ? t.contact.sending : t.contact.sendBtn}
                    </button>
                </form>
            )}
        </section>
    );
}

export default ContactForm;