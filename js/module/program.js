const content = [
  {
    img: 'img/1.svg',
    h1: 'A flexibel program online',
    p: 'De cerca de 40 espécies reconhecidas como raposas, somente 12 pertencem ao gênero Vulpes das "raposas verdadeiras", do qual a raposa vermelha é a mais comum.Também apresentam como particularidade suas pupilas ovais, semelhantes às pupilas verticais dos felídeos.',
  },
  {
    img: 'img/2.svg',
    h1: 'Animais Fantásticos',
    p: 'De cerca de 40 espécies reconhecidas como raposas, somente 12 pertencem ao gênero Vulpes das "raposas verdadeiras", do qual a raposa vermelha é a mais comum.',
  },
  {
    img: 'img/mobile.svg',
    h1: 'Mobile',
    p: 'As raposas são animais mamíferos e onívoros pertencentes à família Canidae. São vulpídeos de porte médio, caracterizados por um focinho comprido e uma cauda longa e peluda.',
  },
  {
    img: 'img/3.svg',
    h1: 'Natal',
    p: 'As raposas são animais mamíferos e onívoros pertencentes à família Canidae. São vulpídeos de porte médio, caracterizados por um focinho comprido e uma cauda longa e peluda.',
  },
];

export default function program() {
  const img = document.querySelector('.program-img img');
  const h1 = document.querySelector('.program-content h1');
  const p = document.querySelector('.program-content p');
  const btnPreview = document.querySelector('[data-preview]');
  const btnNext = document.querySelector('[data-next]');
  let n = 2;

  function atualizeContent() {
    img.setAttribute('src', content[n].img);
    h1.innerHTML = content[n].h1;
    p.innerText = content[n].p;
  }

  function previewContent() {
    if (n === 0) return false;
    else n--;
    atualizeContent();
  }

  function nextContent() {
    if (n === content.length - 1) return false;
    else n++;
    atualizeContent();
  }

  btnPreview.addEventListener('click', previewContent);
  btnNext.addEventListener('click', nextContent);
}
