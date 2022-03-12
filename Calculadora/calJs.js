var alt;
var pes;
var imc
function calcularIMC(){
    pes = $("#peso").val();
    alt = $("#altura").val();

    imc = pes/(alt^2);
    $("#ResultadoN").text(imc.toFixed(2));
    if(imc <18.5){
        $("#Resultado").text("Bajo de peso");
    }
    else if(imc >=18.5 && imc<=24.9){
        $("#Resultado").text("Peso Normal");
    }
    else if(imc >=25 && imc<=29.9){
        $("#Resultado").text("Sobrepeso");
    }
    else if(imc >=30 && imc<=39.9){
        $("#Resultado").text("Obesidad");
    }
    else{
        $("#Resultado").text("Obesidad extrema")
    }
}