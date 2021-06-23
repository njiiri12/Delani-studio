$(document).ready(function () {
    $("#img1").click(function () {
        $("#design").toggle();
        $("#img1").toggle();
    });
    $("#design").click(function () {
        $("#design").toggle();
        $("#img1").toggle();
    });
    $("#img2").click(function () {
        $("#design2").toggle();
        $("#img2").toggle();
    });
    $("#design2").click(function () {
        $("#design2").toggle();
        $("#img2").toggle();
    });
    $("#img3").click(function () {
        $("#design3").toggle();
        $("#img3").toggle();
    });
    $("#design3").click(function () {
        $("#design3").toggle();
        $("#img3").toggle();
    });
    $("#div1").hover(
        function () {
          $(this).addClass("overlay");
          $(".hoover2").show();
        },
        function () {
          $(".hoover2").hide();
        }
      );
      $("#div3").hover(
        function () {
          $(this).addClass("overlay");
          $(".hoover3").show();
        },
        function () {
          $(".hoover3").hide();
        }
      );
      $("#div4").hover(
        function () {
          $(this).addClass("overlay");
          $(".hoover4").show();
        },
        function () {
          $(".hoover4").hide();
        }
      );
      $("#div5").hover(
        function () {
          $(this).addClass("overlay");
          $(".hoover5").show();
        },
        function () {
          $(".hoover5").hide();
        }
      );
      $("#div6").hover(
        function () {
          $(this).addClass("overlay");
          $(".hoover6").show();
        },
        function () {
          $(".hoover6").hide();
        }
      );
      $("#div7").hover(
        function () {
          $(this).addClass("overlay");
          $(".hoover7").show();
        },
        function () {
          $(".hoover7").hide();
        }
      );
      $("#div8").hover(
        function () {
          $(this).addClass("overlay");
          $(".hoover8").show();
        },
        function () {
          $(".hoover8").hide();
        }
      );
      $("#div9").hover(
        function () {
          $(this).addClass("overlay");
          $(".hoover9").show();
        },
        function () {
          $(".hoover9").hide();
        }
      );
});