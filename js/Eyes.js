//宣告腦袋位置
var offsetLeft = test.offsetLeft;
var offsetTop = test.offsetTop;
//宣告左眼夾角為a1、右眼為a2
var a1, a2;
//宣告左眼圓心(X1,Y1)、右眼圓心(X2,Y2)
var X1 = 79, Y1 = 140, X2 = 151, Y2 = 140;
//宣告眼睛半徑
var R = 12;
document.onmousemove = function (e) {
    e = e || event || window.event;
    //取得滑鼠座標
    var x = e.clientX;
    var y = e.clientY;
    //更新眼睛夾角a1、a2
    a1 = Math.atan2(x - X1 - offsetLeft, y - Y1 - offsetTop);
    a2 = Math.atan2(x - X2 - offsetLeft, y - Y2 - offsetTop);
    //更新左眼、右眼的值
    ball1.style.left = R * Math.sin(a1) + X1 - 10 + 'px';
    ball1.style.top = R * Math.cos(a1) + Y1 - 10 + 'px';
    ball2.style.left = R * Math.sin(a2) + X2 - 10 + 'px';
    ball2.style.top = R * Math.cos(a2) + Y2 - 10 + 'px';
}
