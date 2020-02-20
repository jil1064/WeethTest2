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
        checkAPI();
        FB.api('/me?fields=email,name,first_name,last_name,id,picture.width(480)','GET', checkProfile);
    } else {
        console.log("Reloading FB Login Information..")
        FB.login(function(response){
            //console.log(response);
            FB.api('/me?fields=email,name,first_name,last_name,id,picture.width(480)','GET', checkProfile);
        }, {
            scope: "email",
            return_scopes: true
        });

    }
}

function checkAPI(response){
    //console.log("Successful Login for: "+response.name);
    //console.log(response);
    // console.log("accessToken "+response.authResponse.accessToken);
    // console.log("userID "+response.authResponse.userID);
    // console.log("Status "+response.status);

    // accessToken = response.authResponse.accessToken;
}

function checkProfile(response){
    //console.log(response);
    $("#profileName").text(response.name);
    $("#userPhoto").attr("src", response.picture.data.url);
    $("#profileNameTwo").attr("value",response.name);
    $("#profileEmail").attr("value",response.email);

    // console.log("Name: "+response.name);
    // console.log("First Name: "+response.first_name);
    // console.log("Last Name:"+response.last_name);
    // console.log("Id: "+response.id);
    // console.log("Email: "+response.email);
    // console.log("Photo URL", response.picture.data.url)
    // var data = JSON.stringify(response);
}
