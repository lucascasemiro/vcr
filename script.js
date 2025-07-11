const backPointer = document.querySelector('.back-pointer');
const section1 = document.querySelector('.section1');
const footer = document.querySelector('footer');

window.addEventListener('scroll', () => {
  const section1Bottom = section1.getBoundingClientRect().bottom;
  const footerTop = footer.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (section1Bottom <= 0 && footerTop > windowHeight) {
    backPointer.style.opacity = '1';
    backPointer.style.pointerEvents = 'auto';
  } else {
    backPointer.style.opacity = '0';
    backPointer.style.pointerEvents = 'none';
  }
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

const menu = document.querySelector('.menu');
const esc = document.querySelector('.esc');
const dropdown = document.querySelector('.dropdown');
const dropdownLinks = document.querySelectorAll('.dropdown a');

menu.addEventListener('click', () => {
  dropdown.classList.add('open');
  menu.style.display = 'none';
  esc.style.display = 'flex';
});

esc.addEventListener('click', () => {
  dropdown.classList.remove('open');
  menu.style.display = 'flex';
  esc.style.display = 'none';
});

dropdownLinks.forEach(link => {
  link.addEventListener('click', () => {
    dropdown.classList.remove('open');
    menu.style.display = 'flex';
    esc.style.display = 'none';
  });
});

