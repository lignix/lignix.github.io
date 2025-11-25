import { useLanguage } from '../context/LanguageContext';

function LanguageSwitch() {
  const { lang, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="lang-toggle"
      title={lang === 'fr' ? "Switch to English" : "Passer en Français"}
      aria-label="Changer de langue"
    >
      {lang === 'fr' ? '🇬🇧' : '🇫🇷'}
    </button>
  );
}

export default LanguageSwitch;