
$(function () {
  /*=================================================
  toggle_btn
  ===================================================*/
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

  /*=================================================
  カールセル
  ===================================================*/
  // 体験コンテンツ
	$('.carousel-contents').slick({
		autoplay: false,
		dots: false,
		fade: true,
    slidesToShow: 1,
    
    prevArrow: '<div class="slide-arrow prev-arrow"><span></span></div>',
    nextArrow: '<div class="slide-arrow next-arrow"><span></span></div>'
	});

  // キッズアクティビティ
  $('.carousel-kids_activities').slick({
		autoplay: false,
		dots: false,
		fade: true,
    slidesToShow: 1,
    
    prevArrow: '<div class="slide-arrow prev-arrow"><span></span></div>',
    nextArrow: '<div class="slide-arrow next-arrow"><span></span></div>'
	});

  /*=================================================
  FAQ
  ===================================================*/
  // ハンバーガーメニューをクリックした時
  $(".btn-faq").on("click", function () {
    $(".faq-area").toggleClass("open");
  });
  // メニューのリンクをクリックした時
  $(".closer").on("click", function () {
    $(".faq-area").toggleClass("open");
    });

    // ハンバーガーメニューをクリックした時
  $(".question").on("click", function () {
    var findElm = $(this).next(".answer");
    $(findElm).slideToggle();

    if ($(this).hasClass('show-up')){
      $(this).removeClass('show-up');
    }else{
      $(this).addClass('show-up').add;
    }
  });
  
  // メニューのリンクをクリックした時
  $(window).om('load',function(){
    $('.faq-lists li:first-of-type question').addClass(".show-up");
      $(".show-up").each(function(index,element){
        var Title=$(element).children('.question');
        $(Title).addClass('show-up');
        var Box =$(element).children('.answer');
        $(Box).slideDown(500);
      });
  });
});