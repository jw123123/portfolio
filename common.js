document.addEventListener('DOMContentLoaded', () => {
// 프로젝트 영역 GSAP
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: '.project-section',
  pin: '.project-bg-title',
  start: 'top center',
  end: 'bottom bottom',
  scrub: 1,
  pinSpacing: false,
});
});