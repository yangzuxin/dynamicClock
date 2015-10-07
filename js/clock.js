//定义画布长宽
var winWidth=1024;
var winHeight=760;
var r=4;
var MARGIN_LEFT=200;
var MARGIN_TOP=100;
var CurrentTime=new Date();//获取起始当前时间
const colors = ["#33B5E5","#0099CC","#AA66CC","#9933CC","#99CC00","#669900","#FFBB33","#FF8800","#FF4444","#CC0000"];
var balls=[];//存放变化的彩色小球
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
    var updateTime=new Date();//获取最新时间
    var uphour=updateTime.getHours();
    var upmin=updateTime.getMinutes();
    var upsec=updateTime.getSeconds();
    //获取小时的两位数
    var uphourFirst=Math.floor(uphour/10);
    var uphourLast=uphour%10;
    //获取分钟的两位数
    var upminFirst=Math.floor(upmin/10);
    var upminLast=upmin%10;
    //获取秒的两位数
    var upsecFirst=Math.floor(upsec/10);
    var upsecLast=upsec%10;

    //获取当前时间
    var curhour=CurrentTime.getHours();
    var curmin=CurrentTime.getMinutes();
    var cursec=CurrentTime.getSeconds();
    //获取小时的两位数
    var curhourFirst=Math.floor(curhour/10);
    var curhourLast=curhour%10;
    //获取分钟的两位数
    var curminFirst=Math.floor(curmin/10);
    var curminLast=curmin%10;
    //获取秒的两位数
    var cursecFirst=Math.floor(cursec/10);
    var cursecLast=cursec%10;

//判断那些数字变化，从而产生彩色小球
    if( cursecLast != upsecLast ){
        if( curhourFirst != uphourFirst ){
            addBalls( MARGIN_LEFT + 0 , MARGIN_TOP , curhourFirst );
        }
        if( curhourLast != uphourLast){
            addBalls( MARGIN_LEFT + 15*(r+1) , MARGIN_TOP , curhourLast );
        }

        if( curminFirst != upminFirst ){
            addBalls( MARGIN_LEFT + 39*(r+1) , MARGIN_TOP , curminFirst );
        }
        if( curminLast != upminLast ){
            addBalls( MARGIN_LEFT + 54*(r+1) , MARGIN_TOP , curminLast );
        }

        if( cursecFirst != upsecFirst ){
            addBalls( MARGIN_LEFT + 78*(r+1) , MARGIN_TOP , cursecFirst );
        }
        if( cursecLast != upsecLast ){
            addBalls( MARGIN_LEFT + 93*(r+1) , MARGIN_TOP , cursecLast );
        }
        CurrentTime=updateTime;
    }
}

//渲染页面
function render (context) {
    //清除画布
    context.clearRect(0,0,winWidth,winHeight);
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
    //绘制时钟
    drawDigit(MARGIN_LEFT,MARGIN_TOP,hourFirst,context);
    drawDigit(MARGIN_LEFT + 15*(r+1),MARGIN_TOP,hourLast,context);
    drawDigit(MARGIN_LEFT + 30*(r+1) ,MARGIN_TOP,10,context);
    drawDigit(MARGIN_LEFT + 39*(r+1) , MARGIN_TOP,minFirst,context);
    drawDigit(MARGIN_LEFT + 54*(r+1) , MARGIN_TOP,minLast,context);
    drawDigit(MARGIN_LEFT + 69*(r+1),MARGIN_TOP,10,context);
    drawDigit(MARGIN_LEFT + 78*(r+1),MARGIN_TOP,secFirst,context);
    drawDigit(MARGIN_LEFT + 93*(r+1),MARGIN_TOP,secLast,context);


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

//添加变化彩色小球
function addBalls () {
    // body...
}