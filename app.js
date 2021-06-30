let words = ["Good", "Bad", "What", "Even", "Rest", "Ugly"];

let $ = document;
let wordDiv = $.getElementById("word");
let outPutDiv = $.getElementById("outPut");
let yourAnswer = $.getElementById("yourAnswer");
let scoreDiv = $.getElementById("score");

let splitedLetter;
seprateWord();

function seprateWord() {
  let randomIndex = Math.floor(Math.random() * (words.length - 1) + 0);
  let randomWord = words[randomIndex];
  splitedLetter = randomWord.split("");
  console.log(splitedLetter.length);
  arrangLetter();
}

function arrangLetter() {
  for (let letter of splitedLetter) {
    wordDiv.insertAdjacentHTML(
      "afterbegin",
      `
         <span class="letterSpan" id=${letter} onclick="choseThis(this.id)">${letter}</span>
      `
    );
  }
}

let makeWord = [];
let checkWord = null;
function choseThis(thatLetter) {
  makeWord.push(thatLetter);
  yourAnswer.insertAdjacentHTML(
    "beforeend",
    `
    <span>${thatLetter}</span>
    </p>
    `
  );
}

let score = 0;
function check() {
  checkWord = makeWord.join("");
  if (words.includes(checkWord)) {
    outPutDiv.insertAdjacentHTML(
      "afterbegin",
      `<div class="win">
      <p> congrats your guest was right</p>
        <span>${checkWord}</span>
        </div>
      `
    );

    makeWord = [];
    checkWord = null;
    yourAnswer.innerHTML = "";
    wordDiv.innerHTML = "";
    score += 5;
    scoreRender();
    seprateWord();
  } else {
    outPutDiv.insertAdjacentHTML(
      "afterbegin",
      `<div class="lose">
         <span> you lose </span> 
         <br>
         <span>Please try again</span>
         </div>
          `
    );

    makeWord = [];
    checkWord = null;
    yourAnswer.innerHTML = "";
  }
}

function scoreRender() {
  scoreDiv.innerHTML = `
    <p class="score"> Your scrore is ${score}</p>
    `;
}
