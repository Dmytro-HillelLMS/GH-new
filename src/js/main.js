const headerNodes = document.querySelectorAll('.js-header');
const burgerNodes = document.querySelectorAll('.js-burger');

burgerNodes.forEach((burger) => {
  burger.addEventListener('click', () => {
    const header = burger.closest('.js-header');
    header?.classList.toggle('is-open');
  });
});

const valueTabs = document.querySelectorAll('.values__tab');
const valueTitle = document.querySelector('.js-values-title');
const valueText = document.querySelector('.js-values-text');

if (valueTabs.length && valueTitle && valueText) {
  valueTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      valueTabs.forEach((item) => item.classList.remove('is-active'));
      tab.classList.add('is-active');
      valueTitle.textContent = tab.dataset.heading;
      valueText.textContent = tab.dataset.text;
    });
  });
}
