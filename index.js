// אנימציית כניסה בגלילה
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// כפתור חזרה לראש הדף
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// הצגת כפתור החזרה לראש רק כשגוללים
window.addEventListener("scroll", () => {
  const topButton = document.querySelector(".top-button");
  if (window.scrollY > 200) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
});

// מתרגם כותרות לפי השפה
function switchLanguage(lang) {
  if (lang === 'he') {
    document.querySelector('h1').innerText = 'מעצבים את החלל שלך לשלמות';
    document.querySelector('.cta-button').innerText = 'קבל הצעת מחיר';
    document.querySelector('.services h2').innerText = 'השירותים שלנו';
    document.querySelector('.about h2').innerText = 'למה לבחור ב־Craftix?';
    document.querySelector('.about p').innerText = 'שנים של ניסיון עם איכות ברמה הגבוהה ביותר.';
    document.querySelector('footer p').innerText = '© 2025 Craftix. כל הזכויות שמורות.';
    document.querySelector('footer a').innerText = 'להרשמה';
    document.querySelector('.testimonials h2').innerText = 'מה הלקוחות אומרים';
  } else {
    document.querySelector('h1').innerText = 'Crafting Your Space to Perfection';
    document.querySelector('.cta-button').innerText = 'Get a Free Estimate';
    document.querySelector('.services h2').innerText = 'Our Services';
    document.querySelector('.about h2').innerText = 'Why Choose Craftix?';
    document.querySelector('.about p').innerText = 'Years of experience in home renovation – with top quality and a personal touch.';
    document.querySelector('footer p').innerText = '© 2025 Craftix. All rights reserved.';
    document.querySelector('footer a').innerText = 'Register Now';
    document.querySelector('.testimonials h2').innerText = 'What Our Clients Say';
  }
}
