let arrayOfRandoms = [];
let clickedBlocks = [];
let lvl = 1;
let isAnimating = false;

//================== Button start ======
$("#btnStart").on("click", () => {
  startLvl();

  $("#btnStart").addClass("visible");
});
//=============================================

//============ start lvl ==========

async function startLvl() {
  $("h1").text(`Level ${lvl}`);
  $(".block").removeClass(" boxShadowRed transform");

  arrayOfRandoms = [];
  clickedBlocks = [];

  disableClick();
  isAnimating = true;
  await animateLvls();
  isAnimating = false;

  addClickFn();

  console.log(arrayOfRandoms);
}
//====================================================

//============= animate lvls ================
async function animateLvls() {
  for (let i = 0; i < lvl; i++) {
    let randomNumber = Math.floor(Math.random() * 4) + 1;

    arrayOfRandoms.push(randomNumber);
    await animateBlock(randomNumber);
    await sleep(400);
  }
}

//=======================================================

//================== animate block ====================

function animateBlock(randomNumber) {
  return new Promise((resolve) => {
    $("#" + randomNumber).animate({ opacity: 0.5 });
    $("#" + randomNumber).animate({ opacity: 1 });
    $("#" + randomNumber).addClass(" boxShadow transform");

    setTimeout(function () {
      $("#" + randomNumber).removeClass(" boxShadow transform");
      resolve();
    }, 400);
  });
}
// ===============================================

//===================== animate green ==========================
function animateGreen(target) {
  $(target).addClass("boxShadowGreen transform");
  setTimeout(function () {
    $(target).removeClass(" boxShadowGreen transform");
  }, 300);
}
//============================================================

//======================= animate red =======================
function animateRed(target) {
  $(target).addClass("boxShadowRed transform");

  setTimeout(function () {
    $(target).removeClass(" boxShadowRed transform");
  }, 200);
  setTimeout(function () {
    $(target).addClass(" boxShadowRed transform");
  }, 300);
}
//===========================================================

// ======================= sleep function ===============
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
// ===================================================

//===================== choose block ============

function addClickFn() {
  disableClick();
  $(".block").click(function (e) {
    if (isAnimating) return;
    clickedBlocks.push(Number(e.target.id));
    let target = e.target;
    console.log(clickedBlocks);

    compareArrays(clickedBlocks, arrayOfRandoms, target);
  });
}

// ==========================================

//====================== disable click=============
function disableClick() {
  $(".block").off("click");
}
//==================================

// ================= compare Arrays ==============

function compareArrays(clickedBlocks, arrayOfRandoms, target) {
  let i = clickedBlocks.length - 1;

  switch (clickedBlocks[i] !== arrayOfRandoms[i]) {
    case true:
      animateRed(target);
      lose();
      return;
      break;

    case false:
      animateGreen(target);

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

// ================= lvl counter ================
function lvlCounter() {
  lvl = lvl + 1;
  $("h1").text(`Level ${lvl}`);
  disableClick();
  return lvl;
}

//========================================

//===================== lose fn ====================
function lose() {
  disableClick();
  lvl = 1;
  $("h1").text("You lose...");
  $("#btnStart").removeClass("visible");
}

//==========================================
