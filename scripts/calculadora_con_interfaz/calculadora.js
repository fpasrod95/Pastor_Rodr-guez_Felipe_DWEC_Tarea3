class Calculadora {


    constructor(){
        this.n1="";
        this.n2="";
        this.op=undefined;
    }
    

    agregarNumero(num){
        this.n2=this.n2.toString()+num.toString();
        if (this.n2===''||this.n2===0){
            this.n2=this.n2.toString()+num.toString();
        }
        
    }

    agregarOp(operacion,resultado){
        if (this.n2==='') return ;
        if (this.n2!==''){
            this.calcular();
        }
        this.op=operacion.toString();
        this.n1=this.n2;
        this.n2='';
        resultado.value=this.op;
        
    }

    calcular(){
        var calculo;
        const anterior= parseFloat(this.n1);
        const actual=parseFloat(this.n2);
        if (isNaN(anterior) || isNaN(actual)) return;
        switch(this.op){
            case'+':
                calculo=anterior+actual;
                break;
            case'-':
                calculo=anterior-actual;
                break;
            case'/':
                calculo=anterior/actual;
                break;
            case'x':
                calculo=anterior*actual;
                break;
        }
        this.n2=calculo;
        this.op=undefined;
        this.n1='';
    }

    // obtenerNumero(){
    //     return this.n2;
    // }

    limpiar(){
        this.n1="";
        this.n2="";
        this.op=undefined;
    }

    actualizarPantalla(resultado){
        resultado.value=this.n2;
    }

    obtenerOperacion(resultado){
        resultado.value=this.op;
    }

    
    

    
    
    
}