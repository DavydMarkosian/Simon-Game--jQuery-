let arrayOfRandoms = [];
let clickedBlocks = [];
let level;

//================== start levels ===============

for (let i = 0; i < 5; i++) {
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

//================= choose the block =========================
$(".block").click(function (e) {
  clickedBlocks.push(Number(e.target.id));

  $(this).animate({ opacity: 0.5 });
  $(this).animate({ opacity: 1 });
  $(this).addClass(" boxShadow transform");

  setTimeout(function () {
    $(".block").removeClass(" boxShadow transform");
  }, 300);

  //   console.log("arrayOfRandoms: " + arrayOfRandoms);
  //   console.log(e.target);

  compareArrays(clickedBlocks, arrayOfRandoms, e.target);
});

//==================== conditions (Checking) ========================

function compareArrays(clickedBlocks, arrayOfRandoms, target) {
  for (let i = 0; i < arrayOfRandoms.length; i++) {
    let rightBlock = arrayOfRandoms[i];
    console.log(rightBlock);

    if (rightBlock == target.id) {
      console.log("good");
    }

    // if (arrayOfRandoms[i] != target.id) {
    //   console.log(target.id);

    //   console.log(arrayOfRandoms[i]);

    //   console.log("Fail!");

    //   $(target).addClass("boxShadowRed");
    // }
    // if (arrayOfRandoms[i] == target.id) {
    //   $(target).addClass("boxShadowGreen");
    // }
  }
}
