$(function(){
  $('.toggle_btn').on('click', function() {
    // headerにopenクラスを付け外しする
    $('.header').toggleClass('open');
  });

  // メニュー内のリンクをクリックしたらメニューを閉じる
  $('.header nav a').on('click', function() {
    $('.header').removeClass('open');
  });
});