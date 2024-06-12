  $(document).ready(function(){
      $("button").click(function(){
        $("div").animate({left: '17vh'});
      });
    });



  $('button').click(function() {
    $('div').animate(
      { deg: 360 },
      {
        duration: 2000,
        step: function(now) {
          $(this).css({ transform: 'rotate(' + now + 'deg)' });
        }
      }
    );
  });