function podeSubir (altura, vemAcompanhado){
   

    if(altura<2.0 && altura> 1.20){

        return "acesso autorizado"
}

else if(altura < 1.40 && altura > 1.20 && acomnpanhada){
    return "acesso permtido com acompanhante"
}

else {
    return "acesso negado"
}

}
console.log(podeSubir(1.10, true))