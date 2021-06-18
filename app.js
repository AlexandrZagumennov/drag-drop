const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

const dragstart = (event) => {
    event.target.classList.add('hold');
    setTimeout(() => event.target.classList.add('hide'), 0);
};
const dragend = (event) => {
    event.target.classList.remove('hold' , 'hide');
};
const dragover = (event) => {
    event.preventDefault();
};
const dragenter = (event) => {
    event.target.classList.add('hovered');
}; 
const dragleave = (event) => {
    event.target.classList.remove('hovered');
}; 
const dragdrop = (event) => {
    event.target.classList.remove('hovered');
    event.target.append(item);
};

item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);

for (const paceholder of placeholders) {
    paceholder.addEventListener('dragover', dragover);
    paceholder.addEventListener('dragenter', dragenter);
    paceholder.addEventListener('dragleave', dragleave);
    paceholder.addEventListener('drop', dragdrop);
};




