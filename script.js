// Função para scroll suave ao clicar nos botões ou links
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

// Toggle para perguntas frequentes (FAQ)
document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const answer = button.nextElementSibling;
    const isOpen = answer.style.display === 'block';
    answer.style.display = isOpen ? 'none' : 'block';
  });
});

// Scroll suave para links do menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

const btnTop = document.getElementById('btnTop');

// Mostrar o botão quando rolar 100px para baixo
window.onscroll = function() {
  if (document.documentElement.scrollTop > 100) {
    btnTop.style.display = 'block';
  } else {
    btnTop.style.display = 'none';
  }
};

// Voltar ao topo ao clicar no botão
btnTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
