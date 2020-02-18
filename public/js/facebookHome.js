window.fbAsyncInit = function () {
    FB.init({
        appId: '210074767059383',
        cookie: true, // Enable cookies to allow the server to access the session.
        xfbml: true, // Parse social plugins on this webpage.
        version: 'v6.0' // Use this Graph API version for this call.
    });

    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });
};

(function (d, s, id) { // Load the SDK asynchronously
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function checkLoginState() { // Called when a person is finished with the Login Button.
    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });
}

function statusChangeCallback(response) {
    if (response.status === 'connected') {
        FB.api('/me?fields=picture.width(480)','GET', changeProfile);
    } else {
        console.log("Reloading FB Login Information..")
        FB.login(function(response){
            //console.log(response);
            FB.api('/me?fields=picture.width(480)','GET', changeProfile);
        }, {
            scope: "email",
            return_scopes: true
        });
        
    }
}

function changeProfile(response){
    $("#profileHome").attr("src", response.picture.data.url);
    $("#profileHome").css("border-radius", "50%");
}