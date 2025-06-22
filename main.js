
function openLightbox(img) {
  const lightbox = document.getElementById('lightbox');
  lightbox.style.display = 'flex';
  lightbox.querySelector('img').src = img.src;
}

const translations = {
  ua: {
    home: "Головна",
    features: "Функції",
    gallery: "Галерея",
    donate: "Підтримати",
    contact: "Контакти",
    home_title: "FORCEJAM",
    home_subtitle: "Тактичний мультитул для ЗСУ",
    f1: "Моніторинг сигналів на 433MHz, 868MHz та 2.4GHz",
    f2: "Глушіння FPV-дронів модулями nRF24L01+ і CC1101",
    f3: "Шифровані повідомлення з AES-256 по радіоканалу",
    donate_text: "Допоможіть нам доставити FORCEJAM на фронт. Кожна гривня важлива.",
  },
  en: {
    home: "Home",
    features: "Features",
    gallery: "Gallery",
    donate: "Donate",
    contact: "Contact",
    home_title: "FORCEJAM",
    home_subtitle: "Tactical Multitool for the Ukrainian Armed Forces",
    f1: "Signal monitoring on 433MHz, 868MHz, and 2.4GHz",
    f2: "Drone jamming using RF modules (nRF24L01+ & CC1101)",
    f3: "Encrypted messaging with AES-256 (offline radio channel)",
    donate_text: "Help us bring FORCEJAM to the frontlines. Every donation matters.",
  }
};

document.getElementById('lang-toggle').addEventListener('click', () => {
  const currentLang = document.documentElement.lang;
  const newLang = currentLang === 'en' ? 'ua' : 'en';
  document.documentElement.lang = newLang;
  document.getElementById('lang-toggle').textContent = newLang === 'en' ? '🇬🇧' : '🇺🇦';
  for (const el of document.querySelectorAll('[data-i18n]')) {
    const key = el.getAttribute('data-i18n');
    el.textContent = translations[newLang][key];
  }
});
