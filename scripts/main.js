$(function(){
  $('a').attr('onclick','return false;');
  $('a').on('click',function(){
    $('.main_content').load('pages/'+$(this).attr('href'));
    return false;
  });
});
