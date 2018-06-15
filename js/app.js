var display = document.getElementById("display")
var operandos = {
            operador: "",
            operadorAnt: "",
            numAnt: 0
        }
var calculadora = {
    init: function(){
        var self = this
        var cero = document.getElementById("cero")
        var uno = document.getElementById("uno")
        var dos = document.getElementById("dos")
        var tres = document.getElementById("tres")
        var cuatro = document.getElementById("cuatro")
        var cinco = document.getElementById("cinco")
        var seis = document.getElementById("seis")
        var siete = document.getElementById("siete")
        var ocho = document.getElementById("ocho")
        var nueve = document.getElementById("nueve")
        var punto = document.getElementById("punto")
        var reset = document.getElementById("reset")
        var cambia = document.getElementById("cambia")
        var raiz = document.getElementById("raiz")
        var division = document.getElementById("division")
        var multiplicacion = document.getElementById("multiplicacion")
        var resta = document.getElementById("resta")
        var suma = document.getElementById("suma")
        var igual = document.getElementById("igual")
        cero.addEventListener("click",function(){
            self.numero("0")
        })
        cero.addEventListener("mousedown", function(){
            cero.setAttribute("style","transform:scale(0.95,0.95)")
        })
        cero.addEventListener("mouseout", function(){
            cero.setAttribute("style","transform:scale(1,1)")
        })
        uno.addEventListener("click", function(){
            self.numero("1")
        })
        uno.addEventListener("mousedown",function(){   
            uno.setAttribute("style","transform:scale(0.95,0.95)")
        })
        uno.addEventListener("mouseup",function(){
            uno.setAttribute("style","transform:scale(1,1)")
        })
        dos.addEventListener("click", function(){
            self.numero("2")
        })
        dos.addEventListener("mousedown",function(){   
            dos.setAttribute("style","transform:scale(0.95,0.95)")
        })
        dos.addEventListener("mouseout",function(){
            dos.setAttribute("style","transform:scale(1,1)")
        })
        tres.addEventListener("click", function(){
            self.numero("3")
        })
        tres.addEventListener("mousedown",function(){
           tres.setAttribute("style","transform:scale(0.95,0.95)")
        })
        tres.addEventListener("mouseout",function(){
           tres.setAttribute("style","transform:scale(1,1)")
        })
        cuatro.addEventListener("click", function(){
             self.numero("4")
        })
        cuatro.addEventListener("mousedown",function(){
            cuatro.setAttribute("style","transform:scale(0.95,0.95)")
        })
        cuatro.addEventListener("mouseout",function(){
            cuatro.setAttribute("style","transform:scale(1,1)")
        })
        cinco.addEventListener("click",function(){
            self.numero("5")
        })
        cinco.addEventListener("mousedown",function(){
            cinco.setAttribute("style","transform:scale(0.95,0.95)")
        })
        cinco.addEventListener("mouseout",function(){
            cinco.setAttribute("style","transform:scale(1,1)")
        })
        seis.addEventListener("click",function(){
            self.numero("6")
        })
        seis.addEventListener("mousedown",function(){
            seis.setAttribute("style","transform:scale(0.95,0.95)")
        })
        seis.addEventListener("mouseout",function(){
            seis.setAttribute("style","transform:scale(1,1)")
        })
        siete.addEventListener("click",function(){
            self.numero("7")
        })
        siete.addEventListener("mousedown",function(){
            siete.setAttribute("style","transform:scale(0.95,0.95)")
        })
        siete.addEventListener("mouseout",function(){
            siete.setAttribute("style","transform:scale(1,1)")
        })
        ocho.addEventListener("click",function(){
            self.numero("8")
        })
        ocho.addEventListener("mousedown",function(){
            ocho.setAttribute("style","transform:scale(0.95,0.95)")
        })
        ocho.addEventListener("mouseout",function(){
            ocho.setAttribute("style","transform:scale(1,1)")
        })
        nueve.addEventListener("click", function(){
            self.numero("9")
        })
        nueve.addEventListener("mousedown",function(){
            nueve.setAttribute("style","transform:scale(0.95,0.95)")
        })
        nueve.addEventListener("mouseout",function(){
            nueve.setAttribute("style","transform:scale(1,1)")
        })
        punto.addEventListener("click", function(){
            self.numero(".")
        })
        punto.addEventListener("mousedown", function(){
            punto.setAttribute("style","transform:scale(0.95,0.95)")
        })
        punto.addEventListener("mouseout", function(){
            punto.setAttribute("style","transform:scale(1,1)")
        })
        reset.addEventListener("click", function(){
            display.innerHTML = "0"
            operandos.numAnt = 0
            operandos.operador = ""
            operandos.operadorAnt = ""
        })
        reset.addEventListener("mousedown", function(){ 
            reset.setAttribute("style", "transform:scale(0.95,0.95)")
        })
        reset.addEventListener("mouseout", function(){
            reset.setAttribute("style", "transform:scale(1,1)")
        })
        cambia.addEventListener("click", function(){
            self.signo()
        })
        cambia.addEventListener("mousedown", function(){
            cambia.setAttribute("style", "transform:scale(0.95,0.95)")
        })
        cambia.addEventListener("mouseout", function(){
            cambia.setAttribute("style", "transform:scale(1,1)")
        })
        raiz.addEventListener("click", function(){
            display.innerHTML= Math.sqrt(parseFloat(display.innerHTML))
            acomodarDisplay()
        })
        function formatoNumero(numero){
            var redondeo = 0   
        }
        raiz.addEventListener("mousedown",function(){
            raiz.setAttribute("style", "transform:scale(0.95,0.95)")
        })
        raiz.addEventListener("mouseout",function(){
            raiz.setAttribute("style", "transform:scale(1,1)")
        })
        suma.addEventListener("click",function(){
            self.operandos("+")
        })
        suma.addEventListener("mousedown",function(){
            suma.setAttribute("style", "transform:scale(0.95,0.95)")
        })
        suma.addEventListener("mouseout",function(){
            suma.setAttribute("style", "transform:scale(1,1)")
        })
        resta.addEventListener("click",function(){
            self.operandos("-")
        })
        resta.addEventListener("mousedown",function(){
            resta.setAttribute("style", "transform:scale(0.95,0.95)")
        })
        resta.addEventListener("mouseout",function(){
            resta.setAttribute("style", "transform:scale(1,1)")
        })
        division.addEventListener("click",function(){
            self.operandos("/")
        })
        division.addEventListener("mousedown",function(){
            division.setAttribute("style", "transform:scale(0.95,0.95)")
        })
        division.addEventListener("mouseout",function(){
            division.setAttribute("style", "transform:scale(1,1)")
        })
        multiplicacion.addEventListener("click",function(){
            self.operandos("*")
        })
        multiplicacion.addEventListener("mousedown",function(){
            multiplicacion.setAttribute("style", "transform:scale(0.95,0.95)")
        })
        multiplicacion.addEventListener("mouseout",function(){
            multiplicacion.setAttribute("style", "transform:scale(1,1)")
        })
        igual.addEventListener("click", function(){
            self.operandos("=")
        })
        igual.addEventListener("mousedown",function(){
            igual.setAttribute("style", "transform:scale(0.95,0.95)")
        })

        igual.addEventListener("mouseout",function(){
            igual.setAttribute("style", "transform:scale(1,1)")
        })
        
    },
    numero: function(n){
       var num = display.innerHTML
       var self = this
       var limite = 8
    
       if(num.indexOf(".") != -1){
        if (n =="."){
            n = ""
        }   
        limite = 9
       } 
       
       if (num=="0" && n != "."){
           num = ""
       }
       if (operandos.operador.length > 0){
           num = ""
           operandos.operadorAnt = operandos.operador
           operandos.numAnt = parseFloat(display.innerHTML)
           operandos.operador = ""
       }
       if (display.innerHTML.length < limite) {
           display.innerHTML = num + n
       }
        
       
    },
    signo: function()  {
        var cadena = display.innerHTML
        var i = cadena.indexOf("-")
        if (i == -1){
            display.innerHTML = "-" + cadena
        } else{
            cadena = cadena.substring(1,cadena.length)
            display.innerHTML = cadena
        }
    },
    operandos: function(op){
        switch(op){
            case "+":   
                        operandos.operador = op 
                        switch(operandos.operadorAnt) {
                            case "+": 
                                        operandos.numAnt = operandos.numAnt + parseFloat(display.innerHTML)
                                        display.innerHTML = operandos.numAnt
                                        operandos.operadorAnt = operandos.operador
                                        acomodarDisplay()
                                        break
                             case "-": 
                                        operandos.numAnt = operandos.numAnt - parseFloat(display.innerHTML)
                                        display.innerHTML = operandos.numAnt
                                        operandos.operadorAnt = operandos.operador
                                        acomodarDisplay()
                                        break
                            case "*": 
                                        operandos.numAnt = operandos.numAnt * parseFloat(display.innerHTML)
                                        display.innerHTML = operandos.numAnt
                                        operandos.operadorAnt = operandos.operador
                                        acomodarDisplay()
                                        break
                            case "/": 
                                        operandos.numAnt = operandos.numAnt / parseFloat(display.innerHTML)
                                        display.innerHTML = operandos.numAnt
                                        operandos.operadorAnt = operandos.operador
                                        acomodarDisplay()
                                        break
                        }                     
                        
                        break
            case "-": 
                       operandos.operador = op                       
                        switch(operandos.operadorAnt) {
                            case "+": 
                                        operandos.numAnt = operandos.numAnt + parseFloat(display.innerHTML)
                                        display.innerHTML = operandos.numAnt
                                        operandos.operadorAnt = operandos.operador
                                        acomodarDisplay()
                                        break
                             case "-": 
                                        operandos.numAnt = operandos.numAnt - parseFloat(display.innerHTML)
                                        display.innerHTML = operandos.numAnt
                                        operandos.operadorAnt = operandos.operador
                                        acomodarDisplay()
                                        break
                            case "*": 
                                        operandos.numAnt = operandos.numAnt * parseFloat(display.innerHTML)
                                        display.innerHTML = operandos.numAnt
                                        operandos.operadorAnt = operandos.operador
                                        acomodarDisplay()
                                        break
                            case "/": 
                                        operandos.numAnt = operandos.numAnt / parseFloat(display.innerHTML)
                                        display.innerHTML = operandos.numAnt
                                        operandos.operadorAnt = operandos.operador
                                        acomodarDisplay()
                                        break
                        }    
                        
                        break
            case "*": 
                        operandos.operador = op                       
                        switch(operandos.operadorAnt) {
                            case "+": 
                                        operandos.numAnt = operandos.numAnt + parseFloat(display.innerHTML)
                                        display.innerHTML = operandos.numAnt
                                        operandos.operadorAnt = operandos.operador
                                        acomodarDisplay()
                                        break
                             case "-": 
                                        operandos.numAnt = operandos.numAnt - parseFloat(display.innerHTML)
                                        display.innerHTML = operandos.numAnt
                                        operandos.operadorAnt = operandos.operador
                                        acomodarDisplay()
                                        break
                            case "*": 
                                        operandos.numAnt = operandos.numAnt * parseFloat(display.innerHTML)
                                        display.innerHTML = operandos.numAnt
                                        operandos.operadorAnt = operandos.operador
                                        acomodarDisplay()
                                        break
                            case "/": 
                                        operandos.numAnt = operandos.numAnt / parseFloat(display.innerHTML)
                                        display.innerHTML = operandos.numAnt
                                        operandos.operadorAnt = operandos.operador
                                        acomodarDisplay()
                                        break
                        }    
                       
                        break
            case "/": 
                        operandos.operador = op                       
                        if (operandos.operadorAnt.length > 0){
                            operandos.numAnt = operandos.numAnt / parseFloat(display.innerHTML)
                            display.innerHTML = operandos.numAnt
                            acomodarDisplay()
                        }  
                        
                        break
             case "=":  
                        switch(operandos.operadorAnt){
                            case "+" : 
                                        operandos.numAnt += parseFloat(display.innerHTML) 
                                        break
                            case "-" : 
                                        operandos.numAnt -= parseFloat(display.innerHTML) 
                                        break
                             case "/" : 
                                        operandos.numAnt /= parseFloat(display.innerHTML) 
                                        break
                             case "*" : 
                                        operandos.numAnt *= parseFloat(display.innerHTML) 
                                        break
                        }
                        display.innerHTML = operandos.numAnt
                        acomodarDisplay()
                        operandos.operadorAnt = ""
                        operandos.operador = ""
                        break
        }

    }
}
function acomodarDisplay(){
    var cadena = display.innerHTML
    var numero = parseFloat(cadena)
    limite = 8
    if (cadena.indexOf(".") != -1){
        limite++
    }
    if (cadena.indexOf("-")!= -1){
        limite++
    }
    
    if (cadena.length > limite){
        if (numero - numero.toFixed(0) == 0){
            display.innerHTML = numero
        }
         else {
             display.innerHTML = parseFloat(cadena).toPrecision(8)
         }
        
    }
}

calculadora.init()



