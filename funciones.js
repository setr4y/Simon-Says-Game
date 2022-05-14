const btnEmpezar = document.getElementById('btnEmpezar')
const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')
const ULTIMO_NIVEL = 3




class Juego {
constructor() {
this.inicializar = this.inicializar.bind(this)
this.inicializar()
this.generarSecuencia()
setTimeout(this.siguienteNivel, 500)
}
// Métodos
inicializar() {
this.elegirColor = this.elegirColor.bind(this)
this.siguienteNivel = this.siguienteNivel.bind(this) //esta atado al juego
this.toggleBtnEmpezar()
this.nivel = 2
this.colores = {
celeste,
violeta,
naranja,
verde
}
}
toggleBtnEmpezar() {
if (btnEmpezar.classList.contains('hide')) {
btnEmpezar.classList.remove('hide')
} else {
btnEmpezar.classList.add('hide')
}
}
generarSecuencia() {
this.secuencia = new Array(ULTIMO_NIVEL).fill(0).map(n =>
Math.floor(Math.random() * 4))
}
siguienteNivel() {
    this.subnivel = 0
this.iluminarSecuencia()
this.agregarEventosClick()
}
transformarNumeroAColor(numero) {
switch (numero) {
case 0:
return 'celeste'
case 1:
return 'violeta'
case 2:
return 'naranja'
case 3:
return 'verde'
}
}
transformarColorANumero(numero) {
switch (numero) {
case 'celeste':
return 0 
//no se pone break, ya que el break no se podra ejecutar si se tiene un return
case 'violeta':
return 1
case 'naranja':
return 2
case 'verde':
return 3
}
}
iluminarSecuencia() {
for (let i = 0; i < this.nivel; i++) {
const color = this.transformarNumeroAColor(this.secuencia[i])
setTimeout(() => {
this.iluminarColor(color)
}, 1000 * i)
}
}
iluminarColor(color) {
this.colores[color].classList.add('light') //al boton con el colorrespectivo, se le agrega una clase CSS

setTimeout(() => this.apagarColor(color), 350)
}
apagarColor(color) {
    this.colores[color].classList.remove('light')
}
agregarEventosClick() {
this.colores.celeste.addEventListener('click', this.elegirColor)
this.colores.violeta.addEventListener('click', this.elegirColor)
this.colores.naranja.addEventListener('click', this.elegirColor)
this.colores.verde.addEventListener('click', this.elegirColor)
}
eliminarEventosClick() {
this.colores.celeste.removeEventListener('click', this.elegirColor)
this.colores.violeta.removeEventListener('click', this.elegirColor)
this.colores.naranja.removeEventListener('click', this.elegirColor)
this.colores.verde.removeEventListener('click', this.elegirColor)
}
elegirColor(ev) {
const nombreColor = ev.target.dataset.color
const numeroColor = this.transformarColorANumero(nombreColor)
this.iluminarColor(nombreColor)
if (numeroColor === this.secuencia[this.subnivel]) {
this.subnivel++
if (this.subnivel === this.nivel) {
this.nivel++
this.eliminarEventosClick()
if (this.nivel === (ULTIMO_NIVEL + 1)) { // ganó
this.ganoElJuego()
} else {
setTimeout(this.siguienteNivel, 1500)
}
}
} else { // perdió
this.perdioElJuego()
}
}
ganoElJuego() {
swal("¡Enhorabuena!", "¡Felicidades!, ¡Has ganado la partida!",
"success")

.then(this.inicializar)
}
perdioElJuego() {
    swal("Una lastima", "Lo lamento, has perdido :( Suerta en la proxima", "error")
    .then(() => {
    this.eliminarEventosClick()
    this.inicializar()
    })
    }
    }
    function empezarJuego() {
    window.juego = new Juego()
    }

    
    function escribir_nombre(n){
    
        document.write(n);
    }
    
    nombre=prompt("Ingrese su nickname");




    var puntaje = 0
    document.getElementById("puntaj").innerHTML=puntaje

    function incremen (){
      updateDisplay(puntaje = puntaje + 2)
      }

    function updateDisplay(valor) {
      document.getElementById("puntaj").innerHTML=valor;
    }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

    var nivel = 1
    document.getElementById("nvl").innerHTML=nivel;

    function nivel_inicial (){
      updlvl(nivel = nivel + 1)
      }

    function edi_nivel(val) {
      document.getElementById("nvl").innerHTML=val;
    }