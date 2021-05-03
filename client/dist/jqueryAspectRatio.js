console.log('welcome to the page from the jqueryAspectRatio.js file');

colors = ['red', 'green', 'blue', 'yellow', 'purple']

const generateRandomColor = (event) => {
  console.log('AspectRatioSquare-Item was clicked')
  let rgb1 = Math.floor(Math.random()*(256));
  let rgb2 = Math.floor(Math.random()*(256));
  let rgb3 = Math.floor(Math.random()*(256));
  let rgb = 'rgb(' + rgb1 + ','+ rgb2 + ','+ rgb3 + ')'
  let element = '#' + event.target.id;
  $(element).css("background-color", rgb);
}

$(".AspectRatioSquare-Item").click(generateRandomColor)