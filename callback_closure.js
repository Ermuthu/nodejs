function logCar(logMsg,callback){
    process.nextTick(function(){
        callback(logMsg);
    });
}

var cars = ["ferrari","porsche","bugatti"];
for(var idx in cars){
    var message = "saw a " + cars[idx];
    logCar(message,function(){
        console.log("normal callback:" + message);
    });
}
for(var idx in cars){
    var message = "saw a " + cars[idx];
    (function(msg){
        logCar(msg,function(){
            console.log("closure callback: " + msg);
        });
    })(message);
}