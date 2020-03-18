let api = (function(){
    "use strict";
    
    function send(method, url, data, callback){
        let xhr = new XMLHttpRequest();
        xhr.onload = function() {
            if (xhr.status !== 200) callback("[" + xhr.status + "]" + xhr.responseText, null);
            else callback(null, JSON.parse(xhr.responseText));
        };
        xhr.open(method, url, true);
        if (!data) xhr.send();
        else{
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(JSON.stringify(data));
        }
    }
    
    let module = {};
    const { createCanvas, loadImage } = require('canvas')
    const canvas = createCanvas(200, 200)
    
    const ctx = canvas.getContext('2d')

    function notifyErrorListeners(err){
        errorListeners.forEach(function(listener){
            listener(err);
        });
    }
    
    /*
        Init 
    */
    module.draw = function() {
        App.canvas = document.createElement('canvas');
        App.canvas.height = 400;
        App.canvas.width = 800;
        document.querySelector('#drawing').prepend(App.canvas);
        App.ctx = App.canvas.getContext("2d");
        App.ctx.fillStyle = "solid";
        App.ctx.strokeStyle = "#ECD018";
        App.ctx.lineWidth = 5;
        App.ctx.lineCap = "round";
        App.ctx.font = '30px Impact'
        App.ctx.rotate(0.1)
        App.ctx.fillText('Awesome!', 50, 100)
        
        // Draw line under text
        var text = ctx.measureText('Awesome!')
        App.ctx.strokeStyle = 'rgba(0,0,0,0.5)'
        App.ctx.beginPath()
        App.ctx.lineTo(50, 102)
        App.ctx.lineTo(50 + text.width, 102)
        App.ctx.stroke()
    };
    
    return module;
})();