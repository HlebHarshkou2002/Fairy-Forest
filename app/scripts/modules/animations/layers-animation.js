
// Layers Animation

const layersTitle = document.querySelector(".layers__title"),
  layersTitleHeight = layersTitle.offsetHeight,
  layersTitleOffset = offset(layersTitle).top;

const layersCaption = document.querySelector(".layers__caption"),
  layersCaptionHeight = layersCaption.offsetHeight,
  layersCaptionOffset = offset(layersCaption).top;

function animationLayersCaption() {
  let animCaptionPoint = window.innerHeight - layersCaptionHeight / animStart;

  if (layersCaptionHeight > window.innerHeight) {
    animCaptionPoint = window.innerHeight - window.innerHeight / animStart;
  }

  if (
    pageYOffset > layersCaptionOffset - animCaptionPoint &&
    pageYOffset < layersCaptionOffset + layersCaptionHeight
  ) {
    layersCaption.classList.add("layers__caption--active");
  } else {
    if (!layersCaption.classList.contains("layers__caption--disable")) {
      layersCaption.classList.remove("layers__caption--active");
    }
  }
}

function animationLayersTitle() {
  let animTitlePoint = window.innerHeight - layersTitleHeight / animStart;

  if (layersTitleHeight > window.innerHeight) {
    animTitlePoint = window.innerHeight - window.innerHeight / animStart;
  }

  if (
    pageYOffset > layersTitleOffset - animTitlePoint &&
    pageYOffset < layersTitleOffset + layersTitleHeight
  ) {
    layersTitle.classList.add("layers__title--active");
  } else {
    if (!layersTitle.classList.contains("layers__title--disable")) {
      layersTitle.classList.remove("layers__title--active");
    }
  }
}

// Функция для рассчёта положения элемента относительно верха страницы

function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {
      top: rect.top + scrollTop,
      left: rect.left + scrollLeft,
    };
  }