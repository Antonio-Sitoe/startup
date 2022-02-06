export default function initTabNav() {
  const testemunials = document.querySelectorAll('[data-teste]');
  const btns = document.querySelectorAll('[data-btn-teste] li');
  testemunials[0].classList.add('ative');

  if (testemunials && btns) {
    btns.forEach((btn, index) => {
      btn.addEventListener('click', (e) => handleClick(e, index));
    });

    function handleClick(e, index) {
      e.preventDefault();
      testemunials.forEach((teste, i) => {
        btns[i].classList.remove('ative');
        teste.classList.remove('ative');
      });
      btns[index].classList.add('ative');
      testemunials[index].classList.add('ative');
    }
  }
}
