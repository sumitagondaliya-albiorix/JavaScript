let form = document.getElementById('form');


form.addEventListener("submit", (e) => {
    e.preventDefault();
    let element = form.querySelector('#name');
console.log(element.value);
localStorage.setItem("name",element.value)
})
