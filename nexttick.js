//实现一系列阻塞操作fs调用，即时计时器和nexttick（)调用来显示执行顺序
var fs = require("fs");
fs.stat("nexttick.js",function(err,stats){
    if(stats){console.log("nexttick.js exists");};
    setImmediate(function(){
        console.log("immediate timer 1 executed");
    });
    setImmediate(function(){
        console.log("immediate timer 2 executed");
    });
    process.nextTick(function(){
        console.log("Next tick 1 executed");
    });
    process.nextTick(function(){
        console.log("Next tick 2 executed");
    });
});