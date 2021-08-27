console.log("Hello world")

async function getData(){
const container = document.querySelector(".container")
const button = document.querySelector(".submitbutton")
const weather = document.querySelector(".weather")
const input = document.querySelector(".searchbar")
const text = document.createElement("h2")
const weatherData = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&APPID=45a131a93d8ccc48307c56d777f6b3fb
`)
const jsonweatherData = await weatherData.json();




 async function searchData(){
 
 let results  = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=imperial&APPID=45a131a93d8ccc48307c56d777f6b3fb`); 

 const data = await results.json();
 const weatherTemp = data.main.temp
 console.log(weatherTemp)
//  const text = document.createElement("h2")
 text.innerHTML= weatherTemp
 weather.append(text)
 container.append(weather)
 


 



}

button.addEventListener("click", () => searchData());




}
getData()
