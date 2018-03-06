var client_Video = document.querySelector('#clientvideo') ;

//this function will check whether the browser support getUserMedia API

function hasUserMedia() {
	navigator.getUserMedia = navigator.getUserMedia ||
                         navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
	return !!navigator.getUserMedia;
};

//check the UserMedia support or not 

if (hasUserMedia()) {
	
      navigator.getUserMedia({ video: true, audio: true }, function(stream) {
       
      client_Video.src = window.URL.createObjectURL(stream);            

       }, function (){});
}
else{
	alert("Sorry, your browser does not support WebRTC");
}

