$(document).ready(function() {
    initializePage();
});

function receiveClick(){
//    e.preventDefault();
    $(this).addClass('activate');
    $('.writeButton').removeClass('activate');
    $('#receiveDiv').fadeIn();
    $('#writeDiv').fadeOut();
    $('#writeDivfake').fadeOut();
}

function writeClick(e){
//    e.preventDefault();
    $(this).addClass('activate');
    $('.receiveButton').removeClass('activate');
    $('#receiveDiv').fadeOut();
    $('#writeDiv').fadeIn();
    $('#writeDivfake').fadeIn();
}

function initializePage() {
  $(".receiveButton").click(receiveClick);
  $(".writeButton").click(writeClick);
  $(".addFriendButton").click(addFriendIcon);
  $(".existFriend").click(chooseFriend);
  $("#saveChanges").click(saveChanges);
}

function goBack() {
  window.history.back();
}

function buttonFeed(x, y) {
    $(x).html(y);
    $(x).fadeOut(1200);
    setTimeout('history.go(-1)', 1200);
}

function addFriendClick(){
  $("#addFriend").fadeOut(450);
  $(".addFriendDiv").css("display","none");
  $(".friendDiv").fadeOut(450);
  // $(".hiddenFriend").fadeIn(500);
  $(".hiddenFriend").css("display","inline-flex");
  $(".friendLabel").text("Suggested Friends");

  var searchBar = document.createElement("div");
  var input = document.createElement("input");
  var position = document.getElementsByTagName("br")[4];
  var friendCancel = document.createElement("a");

  searchBar.style = "padding-bottom: 3vh;";

  $(searchBar).attr("id","searchDiv");
  $(input).addClass("searchBar");
  $(input).attr("type","text");
  $(input).attr("name","search");
  $(input).attr("placeholder","Search");
  $(input).attr("autocomplete","off");
  $(input).attr("id","searchBar");
  $(input).attr("value","");
  $(input).attr("onkeyup", "search()");

  $(friendCancel).attr("id","friendCancel");
  $(friendCancel).attr("onclick","friendCancel()");
  $(friendCancel).text('Cancel');

  searchBar.appendChild(input);
  searchBar.appendChild(friendCancel);
  $(searchBar).insertAfter(position);
}

function friendCancel(){
  $("#addFriend").fadeIn(450);
  $(".addFriendDiv").css("display","inline-flex");
  $(".friendDiv").fadeIn(450);
  $(".hiddenFriend").fadeOut(500);
  $(".hiddenFriend").css("display","none");
  $(".friendLabel").text("Your Friends");
  $("#searchDiv").remove();
  $('.searchBar').css("display","none");
  $('#friendCancel').css("display","none");
}

function search(){
  var input = document.getElementById("searchBar");
  var div = $(".hiddenFriend");
  var filter = input.value.toUpperCase();

  for(var i = 0; i < div.length; i++){
    var a = div[i].getElementsByTagName("a")[0].innerHTML;

    if(a.toUpperCase().indexOf(filter) > -1){
      div[i].style.display = "";
    } else {
      div[i].style.display = "none";
    }
  }
}

function addFriendIcon(){
  console.log($(this));
    var div = $(".hiddenFriend");
    var p;

    for(var i = 0; i < div.length; i++){
      p = div[i].getElementsByTagName("p")[0].innerHTML;
      console.log(p);
    }
}

function showFriends(){
  $(".exist-friends").css("display","block");
}

function selectFriend(){
  var input = document.getElementById("createFriend");
  var div = $(".exist-friends").find("p");
  var filter = input.value.toUpperCase();

  for(var i = 0; i < div.length; i++){
    var p = div[i].innerHTML;

    if(p.toUpperCase().indexOf(filter) > -1){
      div[i].style.display = "block";
    } else {
      div[i].style.display = "none";
    }
  }
}

function chooseFriend(){
  $(".exist-friends").css("display","none");

  var name = this.innerHTML;
  var input = document.getElementById("createFriend")
  input.value = name;
}

function deleteEvent() {
    var url = $(location).attr('href');
    var id = url.charAt( url.length - 1 );
    $.ajax({
        url: '/letter/delete/' + id,
        method: 'DELETE',
        data: { id: id }
        });
    window.location.href='/home';
}

function saveChanges(){
  var profileImg = document.getElementById("userPhoto").src;
  var profileName = document.getElementById("profileNameTwo").value;
  var email = document.getElementById("profileEmail").value;
  var password = document.getElementById("profilePassword").value;

  document.getElementById("profileName").innerHTML = profileName;
  document.getElementById("saveChanges").innerHTML = "Changes were saved!";
  // console.log(profileImg);
  // console.log(profileName);
  // console.log(email);
  // console.log(password);
}
