import './style.scss';

const task1 = 2;
const task2 = "hello";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = /*html*/ `
<h1>Exercise: PB-Console</h1>

<h2>Task 1</h2>
<p>${task1}</p>

<h2>Task 1</h2>
<p>${task2}</p>

`
