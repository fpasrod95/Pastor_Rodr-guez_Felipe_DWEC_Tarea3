class Calculadora{

    //En este caso, crearemos el constructor vacío, y en él iniciamos la calculadora
    constructor(){

        //Comprobamos que el número 1 es un número
        do {
            
            this.n1=parseInt(prompt("Introduzca el número 1: "));
            //Lo hacemos para facilitar lectura del código
            var n1=this.n1;


            if (isNaN(n1)){
                alert(`Por favor, introduzca un valor numérico`);
            }
            //Comprobamos si es entero
            if (Number.isSafeInteger(n1)===false){
                alert(`Por favor, introduzca un número entero`);
            }

        } while (isNaN(n1) || Number.isSafeInteger(n1)===false)
       
        do {
             //La cadena introducida por el usuario debe ser "+","-","*" o "/"
            this.op=prompt("Introduzca la operación a realizar ( + , - , * , / ): ");
            var op=this.op;

            if (op!="+" && op!="-" && op!="*" && op!="/"){
                alert(`Por favor, introduzca la operación a realizar`);
            }

        } while (op!="+" && op!="-" && op!="*" && op!="/")

        do {

            this.n2=parseInt(prompt("Introduzca el número 2: "));
            var n2=this.n2;

            if (isNaN(n2)){
                alert(`Por favor, introduzca un valor numérico`);
            }

            if (op=="/" && n2==0){
                alert(`No se puede dividir entre cero, introduzca otro número`);
            }


        } while (isNaN(n2) || (op=="/" && n2==0))


    }

    //Getters y setters definidos por defecto
    get n1(){
        return this._n1;
    }

    get n2(){
        return this._n2;
    }

    get op(){
        return this._op;
    }

    set n1(value){
        this._n1=value;
    }

    set n2(value){
        this._n2=value;
    }

    set op(value){
        this._op=value;
    }

    //Obtiene el resultado dependiendo de la operación del objeto (la introducimos por prompt al crear el objeto)
    obtenerResultado(){
        switch (this.op) {
            case "+":
                console.log(`El resultado de la operación es ${this.n1} + ${this.n2} = ${this.suma()}`)
                break;
            case "-":
                console.log(`El resultado de la operación es ${this.n1} - ${this.n2} = ${this.resta()}`)
                break;
            case "*":
                console.log(`El resultado de la operación es ${this.n1} * ${this.n2} = ${this.mult()}`)
                break;
            case "/":
                console.log(`El resultado de la operación es ${this.n1} / ${this.n2} = ${this.div()}`)
                break;
            default:
                console.log("Por favor, introduzca una operación viable");

        }
    }
    
    //Se decide entre seguir realizando operaciones o apagar la calculadora
    seguirOperando(){

        do {
            var respuesta=prompt("¿Desea seguir realizando operaciones (si/no) ? ");
            respuesta.toLocaleLowerCase();
            
            if (respuesta!="si" && respuesta!="no"){
                alert(`Por favor, introduzca una respuesta válida ( si/no )`);
            }

        } while (respuesta!="si" && respuesta!="no")

        if (respuesta=="si"){
            return true;
        } else if (respuesta=="no"){
            console.log ("Calculadora apagada");
        }
        
    }

    //Operaciones que puede realizar la calculadora
    suma(){
        return this.n1+this.n2;
    }

    resta(){
        return this.n1-this.n2;
    }

    mult(){
        return this.n1*this.n2;
    }

    div(){
        return (this.n1/this.n2).toFixed(2); //Redondea a 2 decimales
    }

    Limpiar(){

    }

}