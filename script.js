const btnEn = document.getElementById('btn-en');
const btnAr = document.getElementById('btn-ar');

function showEnglish() {
  document.documentElement.lang = 'en';
  document.documentElement.dir = 'ltr';
  
  // exclude the language buttons themselves (btn-en / btn-ar)
  document.querySelectorAll('[id$="-en"]:not(#btn-en):not(#btn-ar)').forEach(el => el.classList.remove('hidden'));
  document.querySelectorAll('[id$="-ar"]:not(#btn-en):not(#btn-ar)').forEach(el => el.classList.add('hidden'));
  
  btnEn.classList.add('active');
  btnAr.classList.remove('active');
  
  localStorage.setItem('lang', 'en');
}

function showArabic() {
  document.documentElement.lang = 'ar';
  document.documentElement.dir = 'rtl';
  
  // exclude the language buttons themselves (btn-en / btn-ar)
  document.querySelectorAll('[id$="-en"]:not(#btn-en):not(#btn-ar)').forEach(el => el.classList.add('hidden'));
  document.querySelectorAll('[id$="-ar"]:not(#btn-en):not(#btn-ar)').forEach(el => el.classList.remove('hidden'));
  
  btnAr.classList.add('active');
  btnEn.classList.remove('active');
  
  localStorage.setItem('lang', 'ar');
}

btnEn.addEventListener('click', showEnglish);
btnAr.addEventListener('click', showArabic);

// Set initial language from localStorage or default to English
const savedLang = localStorage.getItem('lang') || 'en';
savedLang === 'ar' ? showArabic() : showEnglish();
