function createDaysOfTheWeek() {
	const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
	const weekDaysList = document.querySelector('.week-days');

	for (let index = 0; index < weekDays.length; index += 1) {
		const days = weekDays[index];
		const dayListItem = document.createElement('li');
		dayListItem.innerHTML = days;

		weekDaysList.appendChild(dayListItem);
	};
};

createDaysOfTheWeek();
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const holiday = ['24', '25', '31'];
const friday = ['4', '11', '18', '25'];
// exercicio 1 
function createDaysNumeric(dezDaysList, holiday, friday) {
	const ulPai = document.getElementById('days');
	for (let index in dezDaysList) {
		let li = document.createElement('li');
		li.innerText = dezDaysList[index];
		li.className = 'day';
		ulPai.appendChild(li);
	}
	let liDaUlDays = document.querySelectorAll('.day');
	for (let index in liDaUlDays) {
		for (let index2 in holiday) {
			if (liDaUlDays[index].innerText === holiday[index2]) {
				liDaUlDays[index].className = 'day holiday'
			}
		}
	}
	for (let index in liDaUlDays) {
		for (let index2 in friday) {
			if (liDaUlDays[index].innerText === friday[index2]) {
				if (liDaUlDays[index].className === 'day holiday') {
					liDaUlDays[index].className = 'day holiday friday'
				} else {
					liDaUlDays[index].className = 'day friday'
				}
			}
		}
	}
}
createDaysNumeric(dezDaysList, holiday, friday)
//exercicio 2
function criarBotaoFeriados() {
	const buttonsContainer = document.querySelector('.buttons-container');
	const button = document.createElement('button');
	button.id = 'btn-holiday';
	button.innerText = 'Feriados'
	buttonsContainer.appendChild(button)
}
criarBotaoFeriados();
const buttonHoliday = document.getElementById('btn-holiday');
// exercicio 3
function mudarCorDosFeriados() {
	const arrayHolidayDays = document.querySelectorAll('.holiday');
	for (let index in arrayHolidayDays) {
		let colorAtual = arrayHolidayDays[index].style.backgroundColor;
		if (colorAtual === '') {
			arrayHolidayDays[index].style.backgroundColor = 'red';
			arrayHolidayDays[index].style.color = 'white';
		} else {
			arrayHolidayDays[index].style.backgroundColor = '';
			arrayHolidayDays[index].style.color = '';
		}
	}
}
buttonHoliday.addEventListener('click', mudarCorDosFeriados)

// exercio 4
function criarBotaoSexta() {
	const buttonsContainer = document.querySelector('.buttons-container');
	const button = document.createElement('button');
	button.id = 'btn-friday';
	button.innerText = 'Sexta-feira'
	buttonsContainer.appendChild(button)
}
criarBotaoSexta();

//exercicio 5
const buttonFriday = document.getElementById('btn-friday');

function mudarCorDasSextaFeita() {
	const arrayFriday = document.querySelectorAll('.friday');
	for (let index in arrayFriday) {
		let colorAtual = arrayFriday[index].style.backgroundColor;
		if (colorAtual === '') {
			arrayFriday[index].style.backgroundColor = 'blue';
			arrayFriday[index].style.color = 'white';
		} else {
			arrayFriday[index].style.backgroundColor = '';
			arrayFriday[index].style.color = '';
		}
	}
}
buttonFriday.addEventListener('click', mudarCorDasSextaFeita)

//exercicio 6

function addEventInArray(event) {
	let todosDias = document.getElementsByClassName('day');
	for (let index in todosDias) {
		todosDias[index].addEventListener('mouseover', efeitoZoom)
		todosDias[index].addEventListener('mouseout', function (event) {
			event.target.style.fontSize = ''
		})

		function efeitoZoom(event) {
			let selecaoAtual = document.querySelector('.selected')
			selecaoAtual.className = "color "
			console.log(event.target)
			let liOver = event.target
			liOver.style.fontSize = '35px';
		}
	}
}
addEventInArray();

//exercicio 7

const elemento = document.createElement('span');
const input = document.getElementById('task-input');
const elementoASerAddFilho = document.getElementsByClassName('my-tasks')[0];
const buttonAdd = document.querySelector('#btn-add')
function adicionaTarefa (event) {
	console.log(event.target)
}
buttonAdd.addEventListener('click', function(event){console.log(event.target)})