window.fbAsyncInit = function() {
    FB.init({
    appId      : '210074767059383',
    cookie     : true,
    xfbml      : true,
    version    : 'v6.0'
    });
    
    FB.AppEvents.logPageView();   
};

(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function checkLoginState() { // Called when a person is finished with the Login Button.
    FB.getLoginStatus(function(response) {
        window.location.href = "/home";
        // statusChangeCallback(response);
    });
}

function statusChangeCallback(response) {
    if (response.status === 'connected') {
        console.log(response);
    }  else {

    }
}
