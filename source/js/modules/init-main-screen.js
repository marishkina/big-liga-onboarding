const initMainScreen = () => {
  const preloader = document.querySelector('.preloader');
  const btn = preloader.querySelector('.preloader__btn');
  const letter = preloader.querySelector('.preloader__letter');
  const link = preloader.querySelector('.preloader__loader');
  const main = document.querySelector('.main');
  const headerLink = document.querySelector('.header__logo');
  const color = document.querySelector('.main__color-block');

  const setAnimation = () => {
    preloader.classList.add('done');
    letter.classList.add('done');
    setTimeout(setInnactive, 3000);
    setTimeout(setActiveClass, 1000);
  };

  const setInnactive = () => {
    preloader.style.display = 'none';
    main.classList.add('is-active');
  };

  const setActiveClass = () => {
    main.classList.add('is-active');
  };

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      setAnimation();
    }
  });

  btn.addEventListener('click', () => {
    setAnimation();
  });

  if (window.screen.width < 1024) {
    window.addEventListener('click', (e) => {
      if (e.target !== link) {
        setAnimation();
      }
    });
  }

  window.addEventListener('click', (e) => {
    if (window.screen.width < 1024 && main.classList.contains('is-active') && e.target !== headerLink) {
      color.classList.toggle('main__color-block--background-color');
    }
  });
};

export {initMainScreen};
