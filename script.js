//Кнопка заказа
const btnMe = document.getElementById('btn me')
btnMe.onclick = function () {
    alert('Заказано 2кг по цене трёх')
}

//Кнопка отзыва
const btnHe = document.getElementById('btn he')
btnHe.onclick = function () {
	if (document.getElementById('text').value == "")
	{
		alert("А отзыв где????")
	} else {
		alert('Отозвано. Ваше мнение важна')
		document.getElementById('text').value = "";
	}
}

//Кнопка статуса
const inputElement = document.getElementById('status')
const btnShe = document.getElementById('btn she')
const statusElement = document.getElementById('listStatus')
btnShe.onclick = function () {
	if (inputElement.value == "")
	{
		alert("Введите статус!")
	} else {
		const newStatus = {
			name: inputElement.value,
			active: true,
		}
		statusElement.innerHTML = GetCurrentStatus(newStatus)
	}
	inputElement.value = "";
}
statusElement.onclick = function(event){
	const type = event.target.dataset.type
	if (type === 'remove')
	{
		statusElement.innerHTML = "";
	}
}
function GetCurrentStatus(status) {
	return `
		<li class="str">
        	<span class="currentStatus">${status.name}</span>
			<span id="btn-cancel" class="btn-cancel" data-type="remove">&times;</span>
    	</li>
	`
}

//Переключение страниц
var HIDDEN_CLASS_NAME = 'hidden'
var TARGET_CLASS_NAME = 'target'
var SOURCE_CLASS_NAME = 'source'

var targetIdToShow = 1

function main() {
	var targets = getElements(TARGET_CLASS_NAME)
	var sources = getElements(SOURCE_CLASS_NAME)
	sources.forEach(function (sourceNode) {
		var sourceNodeId = extractId(sourceNode, SOURCE_CLASS_NAME)
		sourceNode.addEventListener('click', function () {
			showTarget(targets, sourceNodeId)
		})
	})
	showTarget(targets, targetIdToShow)
}

function getElements(type) {
	return [].slice.call(document.querySelectorAll('.' + type)).sort(function (targetNode1, targetNode2) {
		var target1Num = extractId(targetNode1, TARGET_CLASS_NAME)
		var target2Num = extractId(targetNode2, TARGET_CLASS_NAME)
		return target1Num > target2Num
	})
}

function extractId(targetNode, baseClass) {
	var currentClassIndex = targetNode.classList.length
	while (currentClassIndex--) {
		var currentClass = targetNode.classList.item(currentClassIndex)
		var maybeIdNum = parseInt(currentClass.split('-')[1])
		if (isNaN(maybeIdNum)) {
			continue
		}
		var classStrinToValidate = baseClass + '-' + maybeIdNum
		if (classStrinToValidate === currentClass) {
			return maybeIdNum
		}
	}
}

function showTarget(targets, targetId) {
	targets.forEach(function (targetNode, targetIndex) {
    var currentTargetNodeId = extractId(targetNode, TARGET_CLASS_NAME)
		if (currentTargetNodeId === targetId) {
			targetNode.classList.remove(HIDDEN_CLASS_NAME)
		} else {
			targetNode.classList.add(HIDDEN_CLASS_NAME)
		}
	})
}

main()