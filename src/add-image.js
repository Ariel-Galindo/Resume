import Kiwi from '../src/kiwi.jpg';
import altText from '../src/altText.txt';

function addImage() {
    const img = document.createElement('img');
    img.alt = altText;
    img.width = 300;
    img.src = Kiwi;
    const body = document.querySelector('body');
    body.appendChild(img);
  }

  export default addImage;