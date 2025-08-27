function simulador(){

    let fullname = document.getElementById('fullname').value;
    let telefono = document.getElementById('telefono').value;
    let email = document.getElementById('email').value;
    let inversion = document.getElementById('inversion').value;
    let tiempo = document.getElementById('tiempo').value;


// hacemos el truco para quitar el desabled a una y ponerselo a otra
    const contPre = document.getElementById('pre-simulation');
    const contPost = document.getElementById('post-simulation');


    contPost.classList.remove('disabled');
    contPre.classList.add('disabled');

}




document.addEventListener('DOMContentLoaded',function(){

    document.getElementById('calcular').addEventListener('click' , simulador);

})



