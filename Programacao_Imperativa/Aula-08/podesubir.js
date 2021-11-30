function podeSubir (altura, acompanhada){
   

    if(altura<2.0 && altura> 1.20){

        return "acesso autorizado"
}

else if(altura < 1.40 && altura > 1.20 && acompanhada){
    return "acesso permtido com acompanhante"
}

else {
    return "acesso negado"
}

}
console.log(podeSubir(1.20, true))