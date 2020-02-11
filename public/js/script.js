$(document).ready(function() {
    initializePage();
});

function receiveClick(){
//    e.preventDefault();
    $(this).addClass('activate');
    $('.writeButton').removeClass('activate');
    $('#receiveDiv').fadeIn();
    $('#writeDiv').fadeOut();
}

function writeClick(e){
//    e.preventDefault();
    $(this).addClass('activate');
    $('.receiveButton').removeClass('activate');
    $('#receiveDiv').fadeOut();
    $('#writeDiv').fadeIn();
}

function initializePage() {
  $(".receiveButton").click(receiveClick);
  $(".writeButton").click(writeClick);
}

function goBack() {
  window.history.back();
}

function buttonFeed(x, y) {
    $(x).html(y);
    $(x).fadeOut(1200);
    setTimeout('history.go(-1)', 1200);
}