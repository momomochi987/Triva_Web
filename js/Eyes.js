//声明脑袋的默认偏移
var offsetLeft = test.offsetLeft;
var offsetTop = test.offsetTop;
//声明左眼夹角a1、右眼夹角a2
var a1, a2;
//声明左眼圆心(X1,Y1)、右眼圆心(X2,Y2)
var X1 = 83, Y1 = 143, X2 = 151, Y2 = 143;
//声明半径
var R = 12;
document.onmousemove = function (e) {
e = e || event || window.event;
//获取鼠标坐标
var x = e.clientX;
var y = e.clientY;
//更新夹角a1、a2
a1 = Math.atan2(x - X1 - offsetLeft, y - Y1 - offsetTop);
a2 = Math.atan2(x - X2 - offsetLeft, y - Y2 - offsetTop);
//更新左眼、右眼的left、top值
ball1.style.left = R * Math.sin(a1) + X1 - 10 + 'px';
ball1.style.top = R * Math.cos(a1) + Y1 - 10 + 'px';
ball2.style.left = R * Math.sin(a2) + X2 - 10 + 'px';
ball2.style.top = R * Math.cos(a2) + Y2 - 10 + 'px';
}
