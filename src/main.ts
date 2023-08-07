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
const colors = ['RED', 'blue', 'green', 'brown', 'purple'];
// colors.sort((a, b) => a.toLowerCase() > b.toLowerCase() ? 1 : -1);
colors.sort((a, b) => b.toLowerCase() < a.toLowerCase() ? 1 : -1);
// let colorHtml = '';
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

// task 8 - sort students
const students = [
	{
		name: "Hans",
		score: 89
	},
	{
		name: "Alice",
		score: 79
	},
	{
		name: "Roger",
		score: 83
	}
];

const capitalizeFirstLetter = (text: string) => {
	return `${text.charAt(0).toUpperCase()}${text.slice(1).toLowerCase()}` 
}

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
	${colors.reduce((prev, curr) => prev + `<li style="color:${curr}">${capitalizeFirstLetter(curr)}</li>`, '' )}
</ul>

<h2>Task 8</h2>
<p>The average score is: ${students.reduce((totalScore,student) => totalScore + student.score, 0) / students.length}</p>
`
