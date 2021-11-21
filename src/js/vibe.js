const vibes = [
    "...and you are awesome!",
    "...have a wonderful day!",
    "...and you've got this!",
    "...and so is this puppy! 🐶"
  ];

  //random selection
  let vibe = vibes[Math.floor(Math.random() * Math.floor(vibes.length))];

  //display on DOM
  document.querySelector(".vibe").append(vibe);