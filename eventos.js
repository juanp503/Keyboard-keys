var teclas = {
    UP: 38,
    DOWN: 40,
    RIGHT: 39,
    LEFT: 37
};


document.addEventListener("keydown", dibujarTeclado);
var cuadro = document.getElementById("area_de_dibujo");
var papel = cuadro.getContext("2d");
var x = 80;
var y = 80; 

dibujarLinea("black", x - 1, x - 1, x + 1, y + 1, papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{

    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();

}

function dibujarTeclado(evento)
{
    var color_linea = "black";
    var movimiento = 5;

    switch(evento.keyCode)
    {

        case teclas.UP:
            dibujarLinea(color_linea, x, y, x, y - movimiento, papel);
            y = y - movimiento;
        break;

        case teclas.DOWN:
            dibujarLinea(color_linea, x, y, x, y + movimiento, papel);
            y = y + movimiento;
        break;

        case teclas.RIGHT:
            dibujarLinea(color_linea, x, y, x + movimiento, y, papel);
            x = x + movimiento;
        break;

        case teclas.LEFT:
            dibujarLinea(color_linea, x, y, x - movimiento, y, papel);
            x = x - movimiento;
        break;

    }
}