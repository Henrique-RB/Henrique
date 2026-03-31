const btnListar = document.getElementById('btnListar');
const inpFrutas = document.getElementById('inpFrutas');
const btnAdic = document.getElementById('btnAdic');
const itensList = document.getElementById('itensList');
const btnFirst = document.getElementById('btnFirst');
const btnLast = document.getElementById('btnLast');
const btnElem = document.getElementById('btnElem');
const btnSelectDel = document.getElementById('btnselectdel');

let vetor = ['Banana', 'Uva', 'Maça', 'Pera'];
let selectedIndex = -1;

btnAdic.onclick = ()=>{
    let elemento = inpFrutas.value.trim();
    if (elemento === '') {
        return;
    }
    vetor.push(elemento);
    listar();
};

btnListar.onclick = ()=>{
   listar();
};

function listar(){
    itensList.innerHTML = 'Frutas:'; 
    vetor.map((item, index)=>{
        let li = document.createElement('li');
        li.textContent = item;
        li.onclick = () => {
            document.querySelectorAll('#itensList li').forEach(l => l.classList.remove('selected'));
            li.classList.add('selected');
            selectedIndex = index;
        };
        itensList.appendChild(li);
    });   
};

btnFirst.onclick = ()=>{
    vetor.shift();
    selectedIndex = -1;
    listar();
};

btnLast.onclick = ()=>{
    vetor.pop();
    if (selectedIndex === vetor.length) selectedIndex = -1;
    listar();
};

btnElem.onclick = ()=>{
    vetor.splice(2 ,1 );
    selectedIndex = -1;
    listar();
};

btnSelectDel.onclick = ()=>{
    const indexStr = inpFrutas.value.trim();
    if (indexStr !== '') {
        const index = parseInt(indexStr);
        if (!isNaN(index) && index >= 0 && index < vetor.length) {
            vetor.splice(index, 1);
            selectedIndex = -1;
            listar();
            inpFrutas.value = '';
            return;
        }
    }
    
    if (selectedIndex >= 0) {
        vetor.splice(selectedIndex, 1);
        selectedIndex = -1;
        listar();
    } else {
        alert('Digite um índice válido (ex: 0, 1) ou selecione um item da lista.');
    }
};
