const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

//a <p> with red text that says “Hey I’m red!”
const redDiv = document.createElement('p');
redDiv.style.color = 'red';
redDiv.textContent = "Hey I'm red!"

container.appendChild(redDiv);

//an <h3> with blue text that says “I’m a blue h3!”
const blueHThree = document.createElement('h3')
blueHThree.style.color = 'blue';
blueHThree.textContent = 'I\'m a blue h3!'

container.appendChild(blueHThree);


//a <div> with a green border and pink background color with the following elements inside of it:
//
//    another <h1> that says “I’m in a div”
//    a <p> that says “ME TOO!”
//    Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.

const greenPinkDiv = document.createElement('div');
greenPinkDiv.style.border = '3px solid green';
greenPinkDiv.style['background-color'] = 'pink';

const anotherHOne = document.createElement('h1');
anotherHOne.textContent='I\'m in a div';

const aSpeakingP = document.createElement('p');
aSpeakingP.textContent = "ME TOO!";

greenPinkDiv.appendChild(aSpeakingP);

greenPinkDiv.appendChild(anotherHOne);

container.appendChild(greenPinkDiv);

const btn=document.querySelector('#btn');

btn.addEventListener('click', function (e){
    e.target.style.background = 'blue';
});

//buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

//We use the .forEach method to iterate through each button.

buttons.forEach((button)=>{
    // and for each one we add a 'click' listener
    button.addEventListener('click', ()=> {
        alert(button.id);
    });
});