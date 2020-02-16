var followings = document.getElementsByClassName("wFPL8")
var folowing = []
for(var i = 0; i<followings.length;i++) 
{ 
folowing.push(followings[i].innerText)
}

var follower = document.getElementsByClassName("wFPL8")
var followers = []
for(var i = 0; i<follower.length; i++) 
{ 
followers.push(follower[i].innerText)
}

var found = false;
var notfollowback = []
for( var k = 0; k < folowing.length; k++ ) {
for( var i = 0; i < followers.length; i++ ) {
    found = false;
  	if ( folowing[k] == followers[i]) {
    	found = true;
    	break;
  }
}
  if(found == false){
	notfollowback.push(folowing[k])
	}
}