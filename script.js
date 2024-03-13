let viewedB = document.getElementById('viewed');
let unviewedB = document.getElementById('unviewed');

let cards0Dis = document.getElementById('cards0');
let cards1Dis = document.getElementById('cards1');
let cards2Dis =document.getElementById('cards2');

let viewed = function() {
    cards1Dis.style.display = 'grid';
    cards2Dis.style.display = 'none';
    cards0Dis.style.display = 'none';
}

let unviewed = function() {
    cards1Dis.style.display = 'none';
    cards2Dis.style.display = 'grid';
    cards0Dis.style.display = 'none';
}

unviewedB.addEventListener('click', unviewed);
viewedB.addEventListener('click', viewed);