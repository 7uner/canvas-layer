window.onload = (function() {
  window.addEventListener('load', function(){
    

    //make inner div to store canvas
    let element = document.createElement('div');
    element.className = "inner";
    element.id = "inner1";
    element.style.zIndex = 1;

    //canvas designer 1
    let designer = new CanvasDesigner();
    designer.widgetHtmlURL = 'https://cdn.webrtc-experiment.com/Canvas-Designer/widget.html'; 
    designer.widgetJsURL = 'https://cdn.webrtc-experiment.com/Canvas-Designer/widget.js';
    
    designer.appendTo(element);
    //designer.iframe.style.backgroundColor = "transparent";
    //designer.iframe.allowTransparency="true";

    //add the canvas to inner div
    document.getElementById("designer").prepend(element);

    //data passed back from the canvas
    designer.addSyncListener(function(data) {
      //console.log("canvas 1:", data);
    });

    //make inner div to store canvas
    let element1 = document.createElement('div');
    element1.className = "inner2";
    element1.id = "inner2";
    element1.style.zIndex = 2;

    //canvas designer 2
    let designer2 = new CanvasDesigner();
    designer2.widgetHtmlURL = 'https://cdn.webrtc-experiment.com/Canvas-Designer/widget.html'; 
    designer2.widgetJsURL = 'https://cdn.webrtc-experiment.com/Canvas-Designer/widget.js';
    //designer2.iframe.style.backgroundColor = "transparent";
    //designer2.iframe.allowTransparency="true";
    designer2.appendTo(element1);


    //add canvas to inner div
    document.getElementById("designer").prepend(element1);

    designer2.addSyncListener(function(data) {
      //console.log("canvas 2:",data);
    });

    

    document.getElementById('switch').addEventListener('click', function(e){
      if (document.getElementById("inner1").style.zIndex == 1){
        document.getElementById("inner1").style.zIndex = 2;
        document.getElementById("inner2").style.zIndex = 1;
      }
      else{
        document.getElementById("inner1").style.zIndex = 1;
        document.getElementById("inner2").style.zIndex = 2;
      }
    });

  });

  
})();