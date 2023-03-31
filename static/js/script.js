// 一番最初にやること▼　arartを書く
// alert(1111);

var select_category ="";
var select_color ="";

$(".btn_category").on('click', function(){
  select_category = $(this).val();
  console.log(select_category,"select_category");
  $("#category").val(select_category);

  if((select_category !=="") && (select_color !=="") ){
    $(".submit").prop('disabled', false);
  }

} )

$(document).on("click", ".btn_hkw", function () {
  // 処理
  select_category = $(this).val();
console.log(select_category,"select_category");
$("#category").val(select_category);

if((select_category !=="") && (select_color !=="") ){
  $(".submit").prop('disabled', false);
}
});


$(".btn_color").on('click', function(){
  select_color = $(this).val();
  console.log(select_color,"select_color");
  $("#color").val(select_color);

  if((select_category !=="") && (select_color !=="") ){
    $(".submit").prop('disabled', false);
  }

} )

$("#category").on("input", function() {
  select_category = $(this).val(); //select_category に入力された文字を取得
  if((select_category !=="") && (select_color !=="")){ //もし文字が入っていれば
    $(".submit").prop('disabled', false); //disabled を無効にする＝ボタンが押せる
  }else{
    $(".submit").prop('disabled', true); //disabled を有効にする＝ボタンが押せない
  }

});

$("#color").on("input", function() {
  select_color = $(this).val(); //select_color に入力された文字を取得
  if((select_category !=="") && (select_color !=="")){ //もし文字が入っていれば
    $(".submit").prop('disabled', false); //disabled を無効にする＝ボタンが押せる
  }else{
    $(".submit").prop('disabled', true); //disabled を有効にする＝ボタンが押せない
  }

});

function loading(){
    $("#loading").show();
    $("#content").hide();       
}