
var listaMensajes = document.getElementById("lista-mensajes");

function crearNodos (container,mensaje) {
    
    var area=document.createElement('div');
    area.className = ("list checkbox option animated bounceInDown");
    var tacho = document.createElement('i');
    tacho.className = "fa  fa-trash-o  tacho";
    var label = document.createElement('label');
    label.className = "text-justify";
    var checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    area.appendChild(label);
    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(mensaje));
    area.appendChild(tacho);
    container.appendChild(area);
    tacho.addEventListener('click',eliminaNodos);
    checkbox.addEventListener('click',tachar);
}

function listaTareas() {
    var mensaje=document.getElementById("mensaje");
        if((mensaje.length) == 0)
            {
            alert ("Ingresa un mensaje");
        }
        else{
            crearNodos(listaMensajes,mensaje.value);
            
        }
        mensaje.focus();
        mensaje.value="";
}
    
function eliminaNodos(evt)
{
	evt.target.parentNode.className= "list  checkbox   animated bounceOutRight"; 
  	setTimeout (function() {
    listaMensajes.removeChild(evt.target.parentNode);  
  	}, 1000);  
}
function tachar(evt)
{
    var check=evt.target.parentNode;
    	var check=evt.target.parentNode;
	if(evt.target.checked)
		check.setAttribute("style","text-decoration:line-through");
	else
		check.setAttribute("style","text-decoration:none");
}








/*var textLista=document.getElementById("textLista");


function listaTareas()
{
    var textArea=document.getElementById("textArea").value;
    var contenido = document.createElement("li");
    contenido.innerHTML=textArea;
    textLista.appendChild(contenido);
    textArea.getElementById("textArea").value=" ";
}*/
