const image01src = 'url("image/slide/1.png")';
const image02src = 'url("image/slide/2.png")';
const image03src = 'url("image/slide/3.png")';

function nextImage() {
  const header = document.getElementById('top');
  const nowBg = header.style.backgroundImage;
  console.log(nowBg);

  if (nowBg == image01src) {
    // 今1枚め
    header.style.backgroundImage = image02src;
  } else if (nowBg == image02src) {
    // 今2枚め
    header.style.backgroundImage = image03src;
  } else {
    // 今3枚め
    header.style.backgroundImage = image01src;
  }
}

function prevImage() {
  const header = document.getElementById('top');
  const nowBg = header.style.backgroundImage;
  console.log(nowBg);

  if (nowBg == image01src) {
    // 今1枚め TODO:
    header.style.backgroundImage = image03src;
  } else if (nowBg == image02src) {
    // 今2枚め TODO:
    header.style.backgroundImage = image01src;
  } else {
    // 今3枚め TODO:
    header.style.backgroundImage = image02src;
  }
}

// ページが表示されたタイミングで実行したい処理を書く
document.getElementById('top').style.backgroundImage = image01src;
document.getElementById('sc-to-left').addEventListener('click', prevImage);
document.getElementById('sc-to-right').addEventListener('click', nextImage);

// タイマーセット
setInterval(nextImage, 5000);
