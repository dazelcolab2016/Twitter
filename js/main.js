
var textLista=document.getElementById("textLista");


function listaTareas()
{
    var textArea=document.getElementById("textArea").value;
    var contenido = document.createElement("li");
    contenido.innerHTML=textArea;
    textLista.appendChild(contenido);
}

