

getYear();
playAnim();

function scrolla(id) {
  var element = document.getElementById(id);
  element.scrollIntoView({
    behavior: 'smooth',
    block: 'center',
    inline: 'center'
  });
}


function colorIcons(colorir, id, color) {
  console.log('Colorir: ' + colorir);
  console.log('id: ' + id);
  console.log('Cor: ' + color);
  let icon = document.getElementById(id);
  if (colorir == true) {
    icon.style.color = color;
  } else {
    icon.style.color = "#000";
  }

}

function getYear() {
  document.getElementById("year").innerHTML = new Date().getFullYear();
}


var typeText = document.getElementById("FLECK")
var textToBeTyped = "< Fleck Software House >"
var index = 0, isAdding = true

function playAnim() {
  setTimeout(function () {
    // set the text of typeText to a substring of
    // the textToBeTyped using index.
    typeText.innerText = textToBeTyped.slice(0, index)
    if (isAdding) {
      // adding text
      if (index > textToBeTyped.length) {
        // no more text to add
        isAdding = false
        //break: wait 2s before playing again
        setTimeout(function () {
          playAnim()
        }, 2000)
        return
      } else {
        // increment index by 1
        index++
      }
    } else {
      // removing text
      if (index === 0) {
        // no more text to remove
        isAdding = true
      } else {
        // decrement index by 1
        index--
      }
    }
    // call itself
    playAnim()
  }, 120)
}
