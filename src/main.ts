import './style.scss';

const task1 = 2;
const task2 = "hello";
const number = 5;
const isOnline = true;

const firstName = 'Jake';
const lastName = 'Rolanding';
const city = 'Berlin';
const favoriteBand = 'Hatari';
const favoriteMovie = 'Blue Velvet';
const favoriteBook = 'Jenseits von Gut und Böse';

// task 7 - display a list of colors
const colors = ['red', 'blue', 'green', 'orange', 'purple', 'tan', 'pink'];
let colorHtml = '';
//for-of
// for (const color of colors) {
// 	colorHtml += `<li style="color: ${color}">${color}</li>`;
// }

//for
// for (let i = 0; i <= colors.length - 1; i++) {
// 	const color = colors[i];
// 	colorHtml += `<li>${color}</li>`;
// }

// forEach
// colors.filter(m => m.length <= 6).forEach(m => colorHtml += `<li>${m}</li>`);

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

<h2>Task 5</h2>
<p>${isOnline}</p>

<h2>Task 6</h2>
<ul>
	<li>${firstName}</li>
	<li>${lastName}</li>
	<li>${city}</li>
	<li>${favoriteBand}</li>
	<li>${favoriteMovie}</li>
	<li>${favoriteBook}</li>
</ul>
<p><em>My name is ${firstName} ${lastName}, I live in ${city}, my favorite band is ${favoriteBand}, my favorite movie is ${favoriteMovie}, and my favorite book is ${favoriteBook}.</em></p>

<h2>Task 7</h2>
<p>There are ${colors.length} colors.</p>
<ul>
	<!-- ${colors.map(m => `<li>${m}</li>`).join('')} -->
</ul>
`
