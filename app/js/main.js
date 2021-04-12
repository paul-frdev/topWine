$(function () {
   
  $('.filter-sort__list').styler();


  var $range = $(".filter-price__range");
  var $inputFrom = $(".filter-price__from");
  var $inputTo = $(".filter-price__to");
  var instance;
  var min = 110;
  var max = 4500;
  var from = 0;
  var to = 0;

  $range.ionRangeSlider({
    type: "double",
    min: min,
    max: max,
    from: 110,
    to: 3000,
    onStart: updateInputs,
    onChange: updateInputs,
    onFinish: updateInputs,
    prefix: "$",
  });

  instance = $range.data("ionRangeSlider");

  function updateInputs(data) {
    from = data.from;
    to = data.to;

    $inputFrom.prop("value", from);
    $inputTo.prop("value", to);
  }

  $inputFrom.on("change", function () {
    var val = $(this).prop("value");

    // validate
    if (val < min) {
      val = min;
    } else if (val > to) {
      val = to;
    }

    instance.update({
      from: val
    });

    $(this).prop("value", val);

  });

  $inputTo.on("change", function () {
    var val = $(this).prop("value");

    // validate
    if (val < from) {
      val = from;
    } else if (val > max) {
      val = max;
    }

    instance.update({
      to: val
    });

    $(this).prop("value", val);
  });



  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 15,
    nav: true,
    dots: false,
    navText: ["", ""],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 3
      }
    }
  })
});