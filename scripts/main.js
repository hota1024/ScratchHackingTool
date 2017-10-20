$(function(){
  $('.navbar-nav a').attr('onclick','return false;');
  $('.navbar-nav a').on('click',function(){
    var file = $(this).attr('href');
    var fadeTime = 250;

    $('.main_content').fadeOut(fadeTime,function(){$(this).load('pages/'+file+'.html',function(){$(this).fadeIn(fadeTime);});});

    $('.navbar-nav .active').removeClass('active');
    $(this).parent().addClass('active');
    location.hash = $(this).attr('href');
    return false;
  });

  $(document).on('change', ':file', function() {
    var input = $(this),
    numFiles = input.get(0).files ? input.get(0).files.length : 1,
    label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
    input.parent().parent().next(':text').val(label);
  });

  if(location.hash == ''){
    $('[href=home]').trigger('click');
  }else{
    var target = $('[href=' + location.hash.slice(1) + ']');
    if(!target.length) {
      $('.main_content').load('pages/404.html');
      return;
    }
    target.trigger('click');
  }
});
