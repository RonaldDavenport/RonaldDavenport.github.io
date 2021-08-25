const mainContainer = document.querySelector(".flex");
const input = document.querySelector(".input");
const button = document.querySelector(".button");
const secondContainer = document.querySelector(".flex2");


function addItems(){
 const taskItems = document.createElement("ol");
const task = input.value;
taskItems.innerHTML = task;
secondContainer.append(taskItems);
console.log(taskItems)
}

button.addEventListener('click', ()=> {
	addItems();
})

