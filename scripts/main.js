$(function(){
  $('.navbar-nav a').attr('onclick','return false;');
  $('.navbar-nav a').on('click',function(){
    $('.main_content').load('pages/'+$(this).attr('href')+'.html');
    $('.navbar-nav .active').removeClass('active');
    $(this).parent().addClass('active');
    location.hash = $(this).attr('href');
    return false;
  });
});
