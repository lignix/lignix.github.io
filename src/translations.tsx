// src/translations.tsx
import React from 'react';

export const translations = {
  fr: {
    header: {
      home: "Accueil",
      experiences: "Expériences",
      projects: "Projets",
      about: "Parcours",
      contact: "Contact",
    },
    hero: {
      greeting: "Hello 👋, je suis Charles Bouvier",
      subtitle: "Développeur Full Stack — .NET / React / TypeScript / Java",
      status: (
        <>
          À la recherche d'une opportunité en <strong>CDI</strong> (Normandie, Rouen, Île-de-France, ou Télétravail).
        </>
      ),
      cvBtn: "Télécharger mon CV",
      cvLink: "/CV.pdf"
    },
    experiences: {
      title: "Expériences Professionnelles",
    },
    about: {
      title: "Mon Parcours",
      part1: (
        <>
          Diplômé d'un <strong>BUT Informatique</strong> (parcours Déploiement & Génie Logiciel), j'ai développé une solide expertise dans la conception d'applications robustes, de la modélisation de données jusqu'aux interfaces utilisateur modernes.
        </>
      ),
      part2: (
        <>
          Fort de mes expériences en entreprise (SNCF Voyageurs, Wolters Kluwer), je maîtrise les cycles de développement agiles, les contraintes de sécurité SI et l'intégration continue. Je suis <strong>activement à la recherche d'un CDI</strong> pour m'investir sur le long terme au sein d'une équipe technique ambitieuse.
        </>
      )
    },
    contact: {
      title: "Me contacter",
      subtitle: "Une opportunité en CDI ou une question ? N'hésitez pas à me laisser un message.",
      emailLabel: "Votre Email",
      messageLabel: "Votre Message",
      sendBtn: "Envoyer",
      sending: "Envoi...",
      successTitle: "Merci !",
      successMsg: "Votre message a bien été envoyé. Je vous répondrai dans les plus brefs délais."
    }
  },
  en: {
    header: {
      home: "Home",
      experiences: "Experiences",
      projects: "Projects",
      about: "About",
      contact: "Contact",
    },
    hero: {
      greeting: "Hello 👋, I am Charles Bouvier",
      subtitle: "Full Stack Developer — .NET / React / TypeScript / Java",
      status: (
        <>
          Looking for a <strong>Full-Time Permanent Position (CDI)</strong> in Normandy, Rouen, Île-de-France, or Remote.
        </>
      ),
      cvBtn: "Download my Resume",
      cvLink: "/CV_EN.pdf"
    },
    about: {
      title: "About Me",
      part1: (
        <>
          Graduated with a <strong>Bachelor in Computer Science (BUT)</strong>, I built solid expertise in software engineering and web development, covering backend architectures and modern user interfaces.
        </>
      ),
      part2: (
        <>
          With hands-on experience in corporate environments (SNCF Voyageurs, Wolters Kluwer), I understand agile methodologies, IT security policies, and continuous integration. I am <strong>actively seeking a permanent CDI role</strong> to commit long-term within an ambitious engineering team.
        </>
      )
    },
    contact: {
      title: "Contact Me",
      subtitle: "Have an job opportunity or a question? Feel free to reach out.",
      emailLabel: "Your Email",
      messageLabel: "Your Message",
      sendBtn: "Send",
      sending: "Sending...",
      successTitle: "Thank you!",
      successMsg: "Your message has been sent successfully. I will get back to you shortly."
    }
  }
};