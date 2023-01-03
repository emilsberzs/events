//Initialize buttons
const btn = document.querySelector('#btn');
const btn2 = document.querySelector('#btn2')
const btn3 = document.querySelector('#btn3')

//Add onclick event to the button
btn.onclick = () => alert("Hello World")


//Add Event Listener to second button
btn2.addEventListener('click', () => { alert("Hello World!") });

//Button with callback function
btn3.addEventListener('click', function(e) {
    e.target.style.background = 'blue';
});




//Attaching listeners to group of nodes


//Select all corresponding with querySelectorAll
const buttons = document.querySelectorAll('.btn')

//Iterate through all of them with .forEach
buttons.forEach((button) =>{
    //Add click listener to each of the buttons
    button.addEventListener('click', () => (alert(button.id)))
}
)