// Fade-In Animation כשגוללים
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.classList.contains("visible")) {
      entry.target.classList.add("visible");
    }
  });
});

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// === כפתור שינוי שפה (עברית / אנגלית) ===
const translations = {
  en: {
    title: "Crafting Your Space to Perfection",
    servicesTitle: "Our Services",
    service1: "Drywall & Plaster",
    service1desc: "Installation and repair of drywall and plaster walls.",
    service2: "Painting",
    service2desc: "Interior and exterior painting with a clean finish.",
    service3: "Bathroom & Kitchen Renovation",
    service3desc: "Stylish modern upgrades for your home.",
    aboutTitle: "Why Choose Craftix?",
    aboutDesc: "Years of experience in home renovation – with top quality and a personal touch.",
    footer: "All rights reserved."
  },
  he: {
    title: "מעצבים את הבית שלכם לשלמות",
    servicesTitle: "השירותים שלנו",
    service1: "קירות גבס וטיח",
    service1desc: "התקנה ותיקון של קירות גבס וטיח.",
    service2: "צביעה",
    service2desc: "צביעה פנימית וחיצונית בגימור נקי.",
    service3: "שיפוץ מטבחים וחדרי אמבטיה",
    service3desc: "שדרוגים מודרניים לבית.",
    aboutTitle: "למה לבחור ב־Craftix?",
    aboutDesc: "שנים של ניסיון עם איכות גבוהה ומגע אישי.",
    footer: "כל הזכויות שמורות."
  }
};

// פונקציה לשינוי שפה
function changeLanguage(lang) {
  const t = translations[lang];
  document.querySelector('.hero h1').textContent = t.title;
  document.querySelector('.services h2').textContent = t.servicesTitle;
  const cards = document.querySelectorAll('.card');
  cards[0].querySelector('h3').textContent = t.service1;
  cards[0].querySelector('p').textContent = t.service1desc;
  cards[1].querySelector('h3').textContent = t.service2;
  cards[1].querySelector('p').textContent = t.service2desc;
  cards[2].querySelector('h3').textContent = t.service3;
  cards[2].querySelector('p').textContent = t.service3desc;
  document.querySelector('.about h2').textContent = t.aboutTitle;
  document.querySelector('.about p').textContent = t.aboutDesc;
  document.querySelector('footer p').innerHTML = `&copy; 2025 Craftix. ${t.footer}`;
}

// === מאזין לכפתור (אתה צריך לשים אותו בקובץ ה־HTML) ===
// <button onclick="changeLanguage('he')">עברית</button>
// <button onclick="changeLanguage('en')">English</button>
// הופך את האלמנטים עם fade-in לגלויים כשמגללים
