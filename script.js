// Seleziona tutti i link del menu
const menuLinks = document.querySelectorAll('.menu-link');

// Aggiunge un listener di eventi a ogni link del menu
menuLinks.forEach(menuLink => {
  menuLink.addEventListener('click', e => {
    // Impedisce il comportamento predefinito del link
    e.preventDefault();
    // Prende l'ID della sezione corrispondente
    const sectionID = menuLink.getAttribute('href');
    // Scatta la sezione in cima alla pagina
    document.querySelector(sectionID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

