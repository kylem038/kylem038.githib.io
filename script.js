var $randomButtonSubmit = $('.random-color-button');
var $resetButtonSubmit = $('.reset-color-button');

function getRandomColor () {
  var hexColor1 = Math.floor(Math.random()*256).toString(16);
  var hexColor2 = Math.floor(Math.random()*256).toString(16);
  var hexColor3 = Math.floor(Math.random()*256).toString(16);
  checkIfColorWhite(hexColor1, hexColor2, hexColor3);
  $('body').css('background-color', "#" + hexColor1 + hexColor2 + hexColor3);
}

function checkIfColorWhite (hexColor1, hexColor2, hexColor3) {
  if (hexColor1 + hexColor2 + hexColor3 === "FFFFFF") {
    getRandomColor();
  };
}

function clearColor () {
  $('body').css('background-color', "#FFFFFF");
}

$randomButtonSubmit.on('click', getRandomColor);

$resetButtonSubmit.on('click', clearColor);
