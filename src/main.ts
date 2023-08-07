import './style.scss';

const task1 = 2;
const task2 = "hello";
const number = 5;

document.querySelector<HTMLDivElement>('#app')!.innerHTML = /*html*/ `
<h1>Exercise: PB-Console</h1>

<h2>Task 1</h2>
<p>${task1}</p>

<h2>Task 2</h2>
<p>${task2}</p>

<h2>Task 3</h2>
<p>${number}</p>

<h2>Task 4</h2>
<p>${typeof number}</p>



`
