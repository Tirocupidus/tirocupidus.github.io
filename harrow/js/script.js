document.addEventListener('DOMContentLoaded', (event) => {
  document.getElementById("selChoosing").onchange = doChoosing
  document.getElementById("selSpread").onchange = doSpread
})

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
  img.onclick = (e) => {
    if(e.target.src.indexOf("card-back") != -1) {
      e.target.src = "images/" + e.target.id
    } else {
      e.target.src = "images/card-back.jpg"
    }
  }
  tableau.appendChild(img)
}

const shuffle = async(deck) => {
  deck.sort(() => Math.random() - 0.5)
}

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
