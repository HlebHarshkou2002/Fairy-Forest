// Реализация Parallax эффекта
window.addEventListener("scroll", (e) => {
    document.body.style.cssText += `--scrollTop: ${this.scrollY}px`; //интерполируем переменную скрола внутрь css свойства для тега body
  });