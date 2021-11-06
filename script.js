const staggerDelay = 200; // ms
const mainAnimationDuration = 700; // ms

// Main heading
anime({
  targets: 'h1',
  translateY: [-30, 0],
  duration: mainAnimationDuration,
  easing: 'easeOutQuad',
});
anime({
  targets: 'h1',
  opacity: [0, 1],
  duration: mainAnimationDuration,
  easing: 'linear',
});

// var textWrapper = document.querySelector('h1');
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
// anime({
//   targets: '.letter',
//   // color: ['#000', '#003377', '#000'],
//   translateX: [-20, 0],
//   opacity: [0, 1],
//   // fontSize: ['1rem', '4'], // TODO FIx
//   delay: anime.stagger(staggerDelay * 0.1, { easing: 'easeOutQuad' }),
//   // delay: anime.stagger(staggerDelay * 0.2),
//   duration: mainAnimationDuration,
//   // easing: 'linear',
//   easing: 'easeOutQuad',
// });

// Nav
anime({
  targets: 'nav',
  opacity: [0, 1],
  delay: 0.3 * mainAnimationDuration,
  duration: mainAnimationDuration,
  easing: 'linear',
});

// Cards
anime({
  targets: 'article',
  delay: anime.stagger(staggerDelay),
  // delay: anime.stagger(staggerDelay, { easing: 'easeOutQuad' }),
  translateY: [30, 0],
  duration: mainAnimationDuration,
  easing: 'easeOutQuad',
});
anime({
  targets: 'article',
  opacity: [0, 1],
  delay: anime.stagger(staggerDelay),
  // delay: anime.stagger(staggerDelay, { easing: 'easeOutQuad' }),
  duration: mainAnimationDuration,
  easing: 'linear',
});
