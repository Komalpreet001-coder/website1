const element1 = document.getElementById('element1')
const element2 = document.getElementById('element2')
const element3 = document.getElementById('element3')


element1.addEventListener('click', ()=> {
    element1.innerHTML = "I've been clicked! <br> Try Double Clicking me."
})

element1.addEventListener('dblclick', ()=> {
    element1.innerHTML = "I have been double clicked! <br> try single clickinge me."
})


element2.addEventListener('mouseover', ()=> {
    element2.style.color = "Yellow"
    element2.style.backgroundColor = "Blue"
})

element2.addEventListener('mouseout', ()=> {
    element2.style.color = "White"
    element2.style.backgroundColor = "#C71585"
})

let positionY = 0;
positionX = 0;

document.addEventListener ('keyup', (event)=> {
    // console.log tell us what key we press
    console.log(event.key)

    if (event.key == 'ArrowDown') {

    }
})
