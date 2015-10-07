//定义画布长宽
var winWidth=1024;
var winHeight=760;
var r=4;
var CurrentTime=new Date();//获取当前时间

window.onload=function(){
    var canvas=document.getElementById('canvas');
    var cxt=canvas.getContext('2d');
    canvas.width=winWidth;
    canvas.height=winHeight;
    //设置动画
    setInterval(function(){
        render(cxt);
        update();
    },1000)
}

//获取更新
function update(){
    var updateTime=new Date();
    if(updateTime.getTime()!=CurrentTime.getTime())
        CurrentTime=new Date(updateTime.getTime());
}

//渲染页面
function render (context) {
    context.clearRect(0,0,winWidth,winHeight)
    var hour=CurrentTime.getHours();
    var min=CurrentTime.getMinutes();
    var sec=CurrentTime.getSeconds();
    console.log(hour,min,sec)
    //获取小时的两位数
    var hourFirst=Math.floor(hour/10);
    var hourLast=hour%10;
    //获取分钟的两位数
    var minFirst=Math.floor(min/10);
    var minLast=min%10;
    //获取秒的两位数
    var secFirst=Math.floor(sec/10);
    var secLast=sec%10;
    console.log(hourFirst,hourLast,minFirst,minLast,secFirst,secLast)

    drawDigit(50,150,hourFirst,context);
    drawDigit(150,150,hourLast,context);
    drawDigit(250,150,10,context);
    drawDigit(350,150,minFirst,context);
    drawDigit(450,150,minLast,context);
    drawDigit(550,150,10,context);
    drawDigit(650,150,secFirst,context);
    drawDigit(750,150,secLast,context);


}
//构建数字
function drawDigit (x,y,num,cxt) {
    var num=digit[num];
    for(var i=0;i<num.length;i++){
        for(var j=0;j<num[i].length;j++){
            if(num[i][j]==1){
                cxt.beginPath();
                cxt.arc(x+j*2*(r+1)+(r+1),y+i*2*(r+1)+(r+1),r,0,2*Math.PI)
                cxt.closePath();
                cxt.fillStyle="red";
                cxt.fill();
            }
        }
    }
}