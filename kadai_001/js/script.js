$(function () {
  //メインビジュアルをカルーセルにする
  $(".carousel").slick({
    autoplay: true,
    dots: true,
    infinite: true,
    autoplaySpeed: 5000,
    arrow: false,
  });

  //メニューにホバーした時に不透明度を変化させる
  $("[href]").on("mouseenter", function () {
    // console.log(this);
    $(this).css("opacity", "0.5");
  });
  $("[href]").on("mouseout", function () {
    $(this).css("opacity", "1");
  });

  //個々のリンクについてコードを記載しなくてよいのでコメントアウト//
  //   //MyProfile
  //   $('[href="index.html"]').on("mouseenter", function () {
  //     $('[href="index.html"]').css("opacity", "0.5");
  //   });
  //   $('[href="index.html"]').on("mouseout", function () {
  //     $('[href="index.html"]').css("opacity", "1");
  //   });
  //   //About
  //   $('[href="#about"]').on("mouseenter", function () {
  //     $('[href="#about"]').css("opacity", "0.5");
  //   });
  //   $('[href="#about"]').on("mouseout", function () {
  //     $('[href="#about"]').css("opacity", "1");
  //   });
  //   //Works
  //   $('[href="#works"]').on("mouseenter", function () {
  //     $('[href="#works"]').css("opacity", "0.5");
  //   });
  //   $('[href="#works"]').on("mouseout", function () {
  //     $('[href="#works"]').css("opacity", "11");
  //   });

  //スクロールしたらTOPに戻るボタンを表示させる
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 100) {
      $(".btn-top").fadeIn();
    } else {
      $(".btn-top").fadeOut();
    }
  });
  //CSSの値を変更する
  // if ($(window).scrollTop() > 100) {
  //   $(".btn-top").css("display", "inline");
  // } else {
  //   $(".btn-top").css("display", "none");
  // }
  //showとhide
  // if ($(window).scrollTop() > 100) {
  //   $(".btn-top").fadeIn();
  // } else {
  //   $(".btn-top").fadeOut();
  // }

  //ページ内リンクのスクロールをなめらかにする
  //リンクがクリックされたとき
  $('a[href^="#"]').on("click", function () {
    // hrefの値（リンク先のID）を取得
    const href = $(this).attr("href");
    // console.log(href);

    // スクロール先の要素を判別
    if (href == "#") {
      $("html, body").animate(
        {
          scrollTop: $("html").offset().top,
        },
        500,
        "swing"
      );
    } else {
      $("html, body").animate(
        {
          scrollTop: $(href).offset().top,
        },
        500,
        "swing"
      );
    }
  });

  //スクロールした時にセクションをフェードインさせる
  //スクロールする
  $(window).on("scroll", function () {
    const scrollAmount = $(window).scrollTop();
    const windowHeight = $(window).height();

    $("section").each(function () {
      const position = $(this).offset().top;
      // console.log(this);

      if (scrollAmount > position - windowHeight + 200) {
        $(this).addClass("fade-in");
      }
    });
  });

  //worksの画像をクリックしたときにモーダルで拡大する
  $(".works-item img").on("click", function () {
    const imgSrc = $(this).attr("src");
    const imgAlt = $(this).attr("alt");
    $(".modal-img").attr({
      src: imgSrc,
      alt: imgAlt,
    });
    $(".modal").fadeIn();
    //  なめらかに表示するにはshowよりfadeInがよい
    // $(".modal").show();
  });

  //モーダルを閉じる
  $(".btn-close").on("click", function () {
    $(".modal").fadeOut();
    //  なめらかに表示するにはhideよりfadeOutがよい
    // $(".modal").hide();
  });
});
