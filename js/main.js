function simulador(){


    //variables que campturas los valores de los campos
    let cFullname = document.getElementById('fullname').value;
    let cTelefono = document.getElementById('telefono').value;
    let cEmail = document.getElementById('email').value;
    let cInversion = document.getElementById('inversion').value;
    let cTiempo = document.getElementById('tiempo').value;

    //constantes que capturan las etiquetas span en las que se muestran los valores por eso la s de show
    const sTiempo = document.getElementById('sTiempo');
    const sInteres = document.getElementById('sInteres');
    const sNombres = document.getElementById('sNombres');
    const sEmail = document.getElementById('sEmail');
    const sTotal = document.getElementById('sTotal');
    const sGanacia = document.getElementById('sGanancia');

    //variables para realizar los calculos
    let ganancia = 0
    let total = 0

    switch (cTiempo) {
        //en este case realizaremos el calculo si el tiempo corresponde a un año
        case "1":
            ganancia = (cInversion * 0.008)*12;
            total = parseInt(cInversion) + parseInt(ganancia);
            sInteres.textContent = '0.08%';
            sTiempo.textContent = '12 MESES';
        break;

        //en este case realizaremos el calculo si el tiempo corresponde a dos años
        case "2":
            ganancia = (cInversion * 0.013)*24
            total = parseInt(cInversion) + parseInt(ganancia);
            sInteres.textContent = '1.13%';
            sTiempo.textContent = '24 MESES';
        break;

        //en este case realizaremos el calculo si el tiempo corresponde a tres años
        case "3":
            ganancia = (cInversion * 0.017)*36
            total = parseInt(cInversion) + parseInt(ganancia);
            sInteres.textContent = '1.17%';
            sTiempo.textContent = '36 MESES';            
        break;
    }

    sTotal.textContent= total;
    sGanacia.textContent= ganancia;
    sNombres.textContent= cFullname;
    sEmail.textContent= cEmail;


    // hacemos el truco para quitar el desabled a una y ponerselo a otra
    const contPre = document.getElementById('pre-simulation');
    const contPost = document.getElementById('post-simulation');

    contPost.classList.remove('disabled');
    contPre.classList.add('disabled');
}




document.addEventListener('DOMContentLoaded',function(){

    document.getElementById('calcular').addEventListener('click' , simulador);

})



