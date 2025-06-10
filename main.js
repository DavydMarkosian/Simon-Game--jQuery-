let arrayOfRandoms = [];
let clickedBlocks = [];
let lvl = 1;

//================== start levels ===============
function startLvl() {
  for (let i = 0; i < lvl; i++) {
    setTimeout(function () {
      let randomNumber = Math.floor(Math.random() * 4) + 1;

      $("#" + randomNumber).animate({ opacity: 0.5 });
      $("#" + randomNumber).animate({ opacity: 1 });
      $("#" + randomNumber).addClass(" boxShadow transform");

      setTimeout(function () {
        $("#" + randomNumber).removeClass(" boxShadow transform");
      }, 300);

      arrayOfRandoms.push(randomNumber);

      console.log(arrayOfRandoms);
      return arrayOfRandoms;
    }, i * 800);
  }
}
startLvl();

//================= choose the block =========================
$(".block").click(function (e) {
  clickedBlocks.push(Number(e.target.id));

  $(this).animate({ opacity: 0.5 });
  $(this).animate({ opacity: 1 });
  $(this).addClass(" boxShadow transform");

  setTimeout(function () {
    $(".block").removeClass(" boxShadow transform");
  }, 300);

  compareArrays(clickedBlocks, arrayOfRandoms, e.target);
});

//==================== conditions (Checking) ========================

function compareArrays(clickedBlocks, arrayOfRandoms, target) {
  console.log(`your choice: ${target.id}`);

  for (let i = 0; i < clickedBlocks.length; i++) {
    switch (clickedBlocks[i] !== arrayOfRandoms[i]) {
      case true:
        console.log("you lose");
        $(target).addClass("boxShadowRed transform");

        setTimeout(function () {
          $(target).removeClass(" boxShadowRed transform");
        }, 200);
        setTimeout(function () {
          $(target).addClass(" boxShadowRed transform");
        }, 300);

        break;

      case false:
        $(target).addClass("boxShadowGreen transform");
        console.log(clickedBlocks);

        setTimeout(function () {
          $(target).removeClass(" boxShadowGreen transform");
        }, 300);

        break;

      default:
        break;
    }
  }
  if (clickedBlocks.length === arrayOfRandoms.length) {
    lvlCounter();
    setTimeout(() => {
      startLvl();
    }, 2000);
  }
}

function lvlCounter() {
  lvl = lvl + 1;
  console.log("lvl: " + lvl);
  $("h1").text(`Level ${lvl}`);
  return lvl;
}
console.log(lvl);
