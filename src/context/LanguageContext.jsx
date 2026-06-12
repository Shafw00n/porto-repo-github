import { createContext, useContext, useState } from 'react';

/**
 * LanguageContext — Global state untuk bahasa aktif (id / en).
 * Tersimpan di localStorage agar persisten saat reload.
 */
const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(
    () => localStorage.getItem('porto-lang') || 'id'
  );

  const toggleLang = () => {
    setLang(prev => {
      const next = prev === 'id' ? 'en' : 'id';
      localStorage.setItem('porto-lang', next);
      return next;
    });
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => useContext(LanguageContext);
