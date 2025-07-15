let arrayOfRandoms = [];
let clickedBlocks = [];
let lvl = 1;
let isAnimating = true;

// ================== Button start ====================
$("#btnStart").on("click", () => {
  $("h1").text(`Level ${lvl}`);
  $(".block").removeClass(" boxShadowRed transform");

  setTimeout(() => {
    startLvl();
  }, 1000);

  $("#btnStart").addClass("visible");
});

//================== start levels ===============
function startLvl() {
  arrayOfRandoms = [];
  clickedBlocks = [];
  isAnimating = true;

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

      if (i === lvl - 1) {
        setTimeout(() => {
          isAnimating = false;
        }, 800);
      }
      return arrayOfRandoms;
    }, i * 800);
  }
  addClickFn();
}

//================= choose the block =========================
function addClickFn() {
  $(".block").click(function (e) {
    if (isAnimating) return;

    clickedBlocks.push(Number(e.target.id));

    $(this).animate({ opacity: 0.5 });
    $(this).animate({ opacity: 1 });
    $(this).addClass(" boxShadow transform");

    setTimeout(function () {
      $(".block").removeClass(" boxShadow transform");
    }, 300);

    compareArrays(clickedBlocks, arrayOfRandoms, e.target);
  });
}
//==================== conditions (Checking) ========================

function compareArrays(clickedBlocks, arrayOfRandoms, target) {
  let i = clickedBlocks.length - 1;

  switch (clickedBlocks[i] !== arrayOfRandoms[i]) {
    case true:
      $(target).addClass("boxShadowRed transform");
      lose();

      setTimeout(function () {
        $(target).removeClass(" boxShadowRed transform");
      }, 200);
      setTimeout(function () {
        $(target).addClass(" boxShadowRed transform");
      }, 300);
      break;

    case false:
      $(target).addClass("boxShadowGreen transform");
      setTimeout(function () {
        $(target).removeClass(" boxShadowGreen transform");
      }, 300);

      break;

    default:
      break;
  }

  if (
    clickedBlocks.length === arrayOfRandoms.length &&
    clickedBlocks[clickedBlocks.length - 1] ===
      arrayOfRandoms[arrayOfRandoms.length - 1]
  ) {
    lvlCounter();
    setTimeout(() => {
      startLvl();
    }, 2000);
  }
}

function lvlCounter() {
  lvl = lvl + 1;
  $("h1").text(`Level ${lvl}`);
  return lvl;
}

function lose() {
  lvl = 1;
  $("h1").text("You lose...");
  $("#btnStart").removeClass("visible");
}
