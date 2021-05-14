const btn = document.getElementById('button')
const container = document.querySelector('.container')
const color = document.querySelector('.color')

btn.addEventListener('click', colorFlipper, true)

function colorFlipper() {

  //btn.removeEventListener('click', colorFlipper)
  url = 'https://www.colr.org/json/colors/random/1'
  fetch(url, {cache: 'no-store'})
    .then((resp) => resp.json())
    .then(function(data) {
      let apiColor = data.colors[0]
      let apiColorHex = '#'+apiColor.hex
      let apiColorName = apiColor.tags[0].name
      container.style.backgroundColor = apiColorHex
      color.textContent = apiColorName

    })
    .catch(function(error) {
      console.log(error);
    })
}
