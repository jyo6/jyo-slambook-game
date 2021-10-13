//check highscore function
document.querySelector("body").classList.remove("hidden");

participant = prompt("Please enter your name to begin");
console.log(participant);
document.querySelector(
  ".participant"
).textContent = `${participant}'s final score is:`;
/*const name = function (participant) {
  document.querySelector(".participant").textContent = participant;
};*/
const displayMsg = function (message) {
  document.querySelector(".message").textContent = message;
};
const currentScore = function (score) {
  document.querySelector("#currentScore").textContent = score;
  console.log(score);
  return score;
};
console.log(currentScore);
const btn = document.querySelector("#btn");
const highScore = function (highscore) {
  document.querySelector(".highscore").textContent = score;
};
let total = 0,
  current = 0;
score = 20;
highscore = 0;
playing = true;

//for (let i = 0; i < btn.length; i++)
length = document.querySelectorAll("#btn").length;
console.log(length);

//My petname

document.querySelector(".ok").addEventListener("click", function () {
  if (playing) {
    let petname = document.querySelector(".petname").value;
    console.log(petname);

    if (!petname) {
      displayMsg("No petname entered");
      alert("Choose from jyo or didi");
    } else if (petname === "jyo" || petname == "didi") {
      current = currentScore((score += 5));
      displayMsg("Yes... that's ME!!!");
    } else if (petname != "jyo" || petname != "didi") {
      displayMsg("Nooooooooo... I don't like it!!!");
      //currentScore -= 5;
      current = currentScore((score -= 5));
      alert("Think again");
    }
    //activePlayer = activePlayer === 0 ? 1 : 0;
    // petname =petname === "jyo" || petname == "didi" ? highScore(total) : highScore();

    //console.log(total);
  }
});

//My dob

document.querySelector(".done").addEventListener("click", function () {
  if (playing) {
    const dob = Number(document.querySelector(".dob").value);
    console.log(dob);
    if (!dob) {
      displayMsg("No Date of birth entered");
      alert("Choose from 0602 , 060297 or 06021997");
    } else if (dob == "06021997" || dob == "060297" || dob == "0602") {
      current = currentScore((score += 5));
      displayMsg("Yes... that's Mine!!!");
    } else if (dob != "06021997" || dob != "060297" || dob != "0602") {
      displayMsg("Nooooooooo... You forgot!!!");
      current = currentScore((score -= 5));
      alert("Think again");
    }
    // highScore(total);
    // console.log(total);
  }
});

document.querySelector(".yes").addEventListener("click", function () {
  if (playing) {
    const hobby = document.querySelector(".hobby").value;
    console.log(hobby);

    if (!hobby) {
      displayMsg("No hobby entered");
      alert("Choose from painting , kdrama or javascript");
    } else if (
      hobby == "painting" ||
      hobby == "kdrama" ||
      hobby == "javascript"
    ) {
      displayMsg("Yes... You know me so well!!!");
      current = currentScore((score += 5));
    } else if (
      hobby != "painting" ||
      hobby != "kdrama" ||
      hobby != "javascript"
    ) {
      displayMsg("Nooooooooo... I don't do it!!!");
      current = currentScore((score -= 5));
      alert("Think again");
    }
    /* highScore(total);
  console.log(total);*/
  }
});

document.querySelector(".sure").addEventListener("click", function () {
  if (playing) {
    const artist = document.querySelector(".artist").value;
    console.log(artist);
    if (!artist) {
      displayMsg("No artist's name entered");
      alert("Choose from BTS , Blackpink or Twice");
    } else if (artist == "BTS" || artist == "Blackpink" || artist == "Twice") {
      displayMsg("Yes... I wanna go to Seoul ASAP!!!");
      current = currentScore((score += 5));
    } else if (artist == "Arijit") {
      displayMsg("ooooooooo... I like him too!!!");
      current = currentScore((score += 5));
    } else if (
      artist != "BTS" ||
      artist != "Blackpink" ||
      artist != "Twice" ||
      artist != "Arijit"
    ) {
      displayMsg("Nooooooooo... I don't love them that much!!!");
      current = currentScore((score -= 5));
      alert("Think again");
    }

    /* highScore(total);
  console.log(total);*/

    document.querySelector(
      ".participant"
    ).textContent = `${participant}'s final score is: ${current}`;
    playing = false;
    document.querySelector("body").classList.add("hidden");
  }
});
