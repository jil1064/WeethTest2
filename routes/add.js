var data = require("../data.json");

exports.addFriend = function(request, response) {  
	// Your code goes here
    var newFriend = {
        "name": request.query.name,
        "description": request.query.description,
        "imageURL": "https://www.fillmurray.com/300/300"
    };
    data.friends.push(newFriend);
    response.render('index', data);
}