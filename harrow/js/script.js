var currentTooltip

document.addEventListener('DOMContentLoaded', (event) => {
  document.getElementById("selChoosing").onchange = doChoosing
  document.getElementById("selSpread").onchange = doSpread
  currentTooltip = document.getElementById("tooltip")
})

window.onmousemove = (e) => {
  var x = e.clientX,
      y = e.clientY
  currentTooltip.style.top = (y + 20) + 'px'
  currentTooltip.style.left = (x + 20) + 'px'
}

const clearTableau = async() => {
  document.getElementById("tableau").innerHTML = ""
}

const doChoosing = async(e) => {
  clearTableau()

  // Get selected ability then reset control
  var ability = e.target.value
  e.target.options[0].selected = true

  // Build choosing deck
  var choosingDeck = []
  for (i = 0; i < cards.length; i++) {
    var card = cards[i]
    if (card.ability == ability) { choosingDeck.push(card) }
  }

  // Shuffle and deal
  shuffle(choosingDeck)
  for (i = 0; i < choosingDeck.length; i++) {
    await sleep(100)
    dealCard(choosingDeck[i], true)
  }
}

const doSpread = async(e) => {
  clearTableau()

  // Get selected pattern then reset control
  var pattern = e.target.value
  e.target.options[0].selected = true

  // Shuffle and determine pattern
  var deck = cards
  shuffle(deck)

  var rows;
  var cols;
  switch(pattern) {
    case "1x3":
      rows = 1
      cols = 3
      break
    case "3x3":
      rows = 3
      cols = 3
      break
  }

  // Deal
  var cardCount = rows * cols;
  for (var i = 0; i < cardCount; i++) {
    await sleep(100)
    if (i >= deck.length) { break }
    dealCard(deck[i], i % cols)
  }
}

const dealCard = (card, continuedRow) => {
  var img = document.createElement("img")
  img.classList.add("card")
  if (!continuedRow) { img.classList.add("new-row") }
  img.src = "images/card-back.jpg"
  img.id = card.image
  //img.title = card.description
  img.onclick = (e) => {
    if(e.target.src.indexOf("card-back") != -1) {
      e.target.src = "images/" + e.target.id
      e.target.classList.add("faceup")
    } else {
      e.target.src = "images/card-back.jpg"
      e.target.classList.remove("faceup")
    }
  }
  img.onmouseover = (e) => {
    currentTooltip = e.target.nextElementSibling
  }
  tableau.appendChild(img)

  // Tooltip
  var tooltipBackground = document.createElement("div")
  tooltipBackground.classList.add("tooltip-background")
  var tooltip = document.createElement("span")
  tooltip.classList.add("tooltip")
  tooltip.innerHTML = card.name + " (" + card.alignment + ", " + card.ability + ") " + card.description
  tooltipBackground.appendChild(tooltip)
  tableau.appendChild(tooltipBackground)
}

const shuffle = async(deck) => {
  deck.sort(() => Math.random() - 0.5)
}

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
