// Article Animation

const articleHeader = document.querySelector(".main__article-header"),
  articleHeaderHeight = articleHeader.offsetHeight,
  articleHeaderOffset = offset(articleHeader).top,
  animStart = 10;

const articleText = document.querySelector(".main__article-paragraph"),
  articleTextHeight = articleText.offsetHeight,
  articleTextOffset = offset(articleText).top;

window.addEventListener("scroll", () => {
  animationArticleHeader();
  animationArticleText();
});

function animationArticleText() {
  let animTextPoint = window.innerHeight - articleTextHeight / animStart;

  if (articleTextHeight > window.innerHeight) {
    animTextPoint = window.innerHeight - window.innerHeight / animStart;
  }

  if (
    pageYOffset > articleTextOffset - animTextPoint &&
    pageYOffset < articleTextOffset + articleTextHeight
  ) {
    articleText.classList.add("main__article-paragraph--active");
  } else {
    if (!articleText.classList.contains("main__article-paragraph--disable")) {
      articleText.classList.remove("main__article-paragraph--active");
    }
  }
}

function animationArticleHeader() {
  let animHeaderPoint = window.innerHeight - articleHeaderHeight / animStart;

  if (articleHeaderHeight > window.innerHeight) {
    animHeaderPoint = window.innerHeight - window.innerHeight / animStart;
  }

  if (
    pageYOffset > articleHeaderOffset - animHeaderPoint &&
    pageYOffset < articleHeaderOffset + articleHeaderHeight
  ) {
    articleHeader.classList.add("main__article-header--active");
  } else {
    if (!articleHeader.classList.contains("main__article-header--disable")) {
      articleHeader.classList.remove("main__article-header--active");
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