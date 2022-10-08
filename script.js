let notes = ['hello', 'wagwan'];

function addNotes() {
    let temp = notes.map(note=> `<li>${note}</li>`).join('\n')
    document.querySelector('ul').innerHTML = temp;
}

addNotes();

let btnAdd = document.getElementById('btnAdd');
let btnDel = document.getElementById('btnDelete');
let btnColourRed = document.getElementById('btnRed');
let btnColourYellow = document.getElementById('btnYellow');
let btnColourGreen = document.getElementById('btnGreen');
let input = document.querySelector('input');

btnAdd.addEventListener('click', () => {
    notes.push(input.value);
    input.value ='';
    addNotes();

    console.log(input)
})

btnDel.addEventListener('click', ()=> {
    console.log([notes[0]]);
    let arrayPos = notes.indexOf(input.value);
    if(arrayPos != -1 ) {
        delete notes[arrayPos];
        addNotes();
    }

})

btnColourRed.addEventListener('click', ()=> {
    document.querySelector('ul').style.backgroundColor = 'red';
})

btnColourYellow.addEventListener('click', ()=> {
    document.querySelector('ul').style.backgroundColor = 'yellow';
})

btnColourGreen.addEventListener('click', ()=> {
    document.querySelector('ul').style.backgroundColor = 'green';
})