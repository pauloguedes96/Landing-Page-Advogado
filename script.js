const btnMobile = document.getElementById("btnMobile");

//Evento clique menu mobile
btnMobile.addEventListener("click", toggleMenu);

//função que adiciona ou elimina classe active no elemento html
function toggleMenu() {
    const nav = document.getElementById("nav");
    nav.classList.toggle('active');
}

//Objeto mensagem do Form1
var mensagemForm1 = {};

//Evento clique no botão enviar
 document.getElementById("btnForm1").addEventListener("click", form1Received);

//Valida Campos, recebe a atribui no objeto mensagens
function form1Received() {

    let msg = document.getElementsByClassName("form1");

    if (msg[0].value == "" || msg[1].value == "" || msg[2].value == "" || msg[3].value == "" || msg[4].value == "" ) {

        if (msg[0].value == "") {
            msg[0].style.border = 'solid 2px red';
        }
        else {msg[0].style.border = 'none';}

        if (msg[1].value == "") {
            msg[1].style.border = 'solid 2px red';
        }
        else {msg[1].style.border = 'none';}

        if (msg[2].value == "") {
            msg[2].style.border = 'solid 2px red';
        }
        else {msg[2].style.border = 'none';}

        if (msg[3].value == "") {
            msg[3].style.border = 'solid 2px red';
        }
        else {msg[3].style.border = 'none';}
        
        if (msg[4].value == "") {
            msg[4].style.border = 'solid 2px red';
        }
        else {msg[4].style.border = 'none';}
    }

    if (msg[0].value != "" && msg[1].value != "" && msg[2].value != "" && msg[3].value != "" && msg[4].value != "" ) {

        mensagemForm1 = { nome: msg[0].value, email: msg[1].value, tel: msg[2].value, assunto: msg[3].value, msg: msg[4].value };

        console.log(mensagemForm1);
        console.log("Enviado com Sucesso");
        document.getElementById("confirmaEnvio1").style.display = "block";
        document.getElementById("erroCampos1").style.display = "none";

        msg[0].style.border = 'none';
        msg[1].style.border = 'none';
        msg[2].style.border = 'none';
        msg[3].style.border = 'none';
        msg[4].style.border = 'none';
        }
    else{
        console.log("Prencha todos os campos");
        document.getElementById("erroCampos1").style.display = "block";
        document.getElementById("confirmaEnvio1").style.display = "none";
    }
}


//Objeto mensagem do Form2
var mensagemForm2 = {};

//Evento clique no botão enviar
document.getElementById("btnForm2").addEventListener("click", form2Received);

//Valida Campos, recebe a atribui no objeto mensagens
function form2Received() {

    let msg = document.getElementsByClassName("form2");

    if (msg[0].value == "" || msg[1].value == "" || msg[2].value == "" || msg[3].value == "" || msg[4].value == "" ) {

        if (msg[0].value == "") {
            msg[0].style.border = 'solid 2px red';
        }
        else {msg[0].style.border = 'none';}

        if (msg[1].value == "") {
            msg[1].style.border = 'solid 2px red';
        }
        else {msg[1].style.border = 'none';}

        if (msg[2].value == "") {
            msg[2].style.border = 'solid 2px red';
        }
        else {msg[2].style.border = 'none';}

        if (msg[3].value == "") {
            msg[3].style.border = 'solid 2px red';
        }
        else {msg[3].style.border = 'none';}
        
        if (msg[4].value == "") {
            msg[4].style.border = 'solid 2px red';
        }
        else {msg[4].style.border = 'none';}
    }

    if (msg[0].value != "" && msg[1].value != "" && msg[2].value != "" && msg[3].value != "" && msg[4].value != "" ) {

        mensagemForm2 = { nome: msg[0].value, email: msg[1].value, tel: msg[2].value, assunto: msg[3].value, msg: msg[4].value };

        console.log(mensagemForm2);
        console.log("Enviado com Sucesso");
        document.getElementById("confirmaEnvio2").style.display = "block";
        document.getElementById("erroCampos2").style.display = "none";


        msg[0].style.border = 'none';
        msg[1].style.border = 'none';
        msg[2].style.border = 'none';
        msg[3].style.border = 'none';
        msg[4].style.border = 'none';
        }
    else{
        console.log("Prencha todos os campos");
        document.getElementById("erroCampos2").style.display = "block";
        document.getElementById("confirmaEnvio2").style.display = "none";
    }
}

