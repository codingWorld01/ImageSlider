const pictures = [

    "1",
    "2",
    "3",
    "4",
    "5"

]

const btn = document.querySelectorAll('button')
console.log(btn);
let content = 0;
const items = document.querySelectorAll('items')
const img = document.getElementById('img');

btn.forEach(element => {

    element.addEventListener("click", function (e) {

        if (element.classList.contains('btn-left'))
            content--;

        if (content < 0)
            content = pictures.length - 1

        img.src = `./img/${pictures[content]}.jpg`;


        if (element.classList.contains('btn-right'))
            content++;

        if (content > pictures.length - 1)
            content = 0

        img.src = `./img/${pictures[content]}.jpg`;


    });
})
