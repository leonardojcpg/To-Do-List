// TO DO LIST!!!

// 1) CRIAR UMA LISTA DINAMICA VIA INPUT
// 2) ARMAZENAR O VALOR EM UM ARRAY
// 3) QUANDO DER CHECK, TEM QUE MUDAR O CSS
// 4) PODER EXCLUIR ITENS DA LISTA

const toDoList = [];
const list      = document.getElementById("listItem")

// adicionando item na lista

function criarItemLista(){
    const valueList = document.getElementById("itemList")

    /* elementos para criar dinamicamente: <li> <input type="checkbox"> <label> <span>  */

    const itemLista    = document.createElement("li");
    const itemInput    = document.createElement("input");
    itemInput.type     = "checkbox";
    const itemLabel    = document.createElement("label");
    const itemSpan     = document.createElement("span");
    itemSpan.innerText = "x";

    itemLista.appendChild(itemSpan);

    const nameValue     = valueList.value;
    itemLabel.innerText = nameValue;

    itemLista.appendChild(itemInput)
    itemLista.appendChild(itemLabel)

    list.appendChild(itemLista)
    toDoList.push();
}
// adicionando checked

function checked(event){
    const checkElement = event.target

    if(checkElement.checked){
        checkElement.parentNode.classList.add("feito")
    } else {
        checkElement.parentNode.classList.toggle("feito")
    }
}

// removendo item da lista

function removendoItem(){

    const parentList = document.querySelector("ul")
    const lastChild = parentList.lastChild;
    lastChild.remove()

}

const botaoRemove = document.getElementById("remove")
botaoRemove.addEventListener("click", removendoItem)

function identificarItem(event){
    const span = event.target;

    if(span.tagName === "SPAN"){
        removendoItem(span);
    }
}

function remover(span){
    span.parentElement.remove();
}

const botaoAdiciona = document.querySelector("button")
botaoAdiciona.addEventListener("click", criarItemLista)

list.addEventListener("click", checked)

list.addEventListener("click", identificarItem)