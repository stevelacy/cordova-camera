
var cameraSuccess = function(data){
  var image = document.getElementById('image');
  image.src = "data:image/jpeg;base64," + data;
  console.log(data);
};
var cameraError = function(err){
  alert(err);
};

var cameraOptions = {
  quality: 100,
  destinationType: 0
};

var camera = function(){
  navigator.camera.getPicture( cameraSuccess, cameraError, cameraOptions );
};


var app = {
  initialize: function() {
    this.bindEvents();
  },
  bindEvents: function() {
    document.addEventListener('deviceready', this.onDeviceReady, false);
  },
  onDeviceReady: function() {
    //camera();
    var button = document.getElementById("takePhoto");

    button.addEventListener("click",function(e){
      camera();
    }, false);
  }
};
