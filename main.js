// add some of my own quotes!
const quotes = [
    "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
    "Well done is better than well said.",
    "Outstanding people have one thing in common: An absolute sense of mission.",
    "Trying is winning in the moment.",
    "Stay in Bed today. It's gonna be a shitty day!",
    "You just can't beat the person who never gives up.",
    "There is little success where there is little laughter.",
    "Be yourself! Unless you can be Batman. Than be Batman",
    "The day sucks! Take it like it is!",
    "Konfuzius said: Ohh....shut the fuck up!",
    "We cannot solve our problems with the same thinking we used when we created them."
  ];


// my first try was similler, but it doesn't, beacuse I didn't mention the function for "getQuote"!
// but after a research and little hints I get the whole function!
const randomize = (array) => Math.floor(Math.random() * array.length)
function getQuote() {
    const quotesRandom = randomize(quotes);
    document.getElementById("quotes").innerHTML = quotes[quotesRandom];
}
document.getElementById("randomize").addEventListener('click', getQuote);