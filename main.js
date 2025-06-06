let arrayOfRandoms = [];
let level;

//================== start levels ===============
for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    let randomNumber = Math.floor(Math.random() * 4) + 1;
    console.log(randomNumber);
    console.log("#" + randomNumber);

    $("#" + randomNumber).animate({ opacity: 0.5 });
    $("#" + randomNumber).animate({ opacity: 1 });
    $("#" + randomNumber).addClass(" boxShadow transform");

    setTimeout(function () {
      $("#" + randomNumber).removeClass(" boxShadow transform");
    }, 300);
  }, i * 800);
}

//================= choose the block =========================
$(".block").click(function (e) {
  console.log(e.target.className);
  $(this).animate({ opacity: 0.5 });
  $(this).animate({ opacity: 1 });
  $(this).addClass(" boxShadow transform");
  setTimeout(function () {
    $(".block").removeClass(" boxShadow transform");
  }, 300);
});

// $("#1").click(function (e) {
//   console.log(e.target);
//   $("#1").animate({ opacity: 0.5 });
//   $("#1").animate({ opacity: 1 });
//   $("#1").addClass(" boxShadow transform");
//   setTimeout(function () {
//     $("#1").removeClass(" boxShadow transform");
//   }, 300);
// });

// $("#2").click(function (e) {
//   console.log(e.target);
//   $("#2").animate({ opacity: 0.5 });
//   $("#2").animate({ opacity: 1 });
//   $("#2").addClass(" boxShadow transform");
//   setTimeout(function () {
//     $("#2").removeClass(" boxShadow transform");
//   }, 300);
// });

// $("#3").click(function (e) {
//   console.log(e.target);
//   $("#3").animate({ opacity: 0.5 });
//   $("#3").animate({ opacity: 1 });
//   $("#3").addClass(" boxShadow transform");
//   setTimeout(function () {
//     $("#3").removeClass(" boxShadow transform");
//   }, 300);
// });

// $("#4").click(function (e) {
//   console.log(e.target);
//   $("#4").animate({ opacity: 0.5 });
//   $("#4").animate({ opacity: 1 });
//   $("#4").addClass(" boxShadow transform");
//   setTimeout(function () {
//     $("#4").removeClass(" boxShadow transform");
//   }, 300);
// });
