//variables being declared

let events = []
const ul = document.querySelector("ul")


// creating my functions 
function deleteIt(events) {
    events.splice(events,1)
    render()
}


function render() {
    const html = events.map((events) => {
        return `
       <div class="list">
        <h2>Party Name: </h2>
        <li>  
        <span>${events.name}</span>
        </li>
        </div>
        <div class="list"> 
        <h2>Party Date/Time:</h2>
        <li>
        <span>${events.date}</span>
        </li>
        </div>
        <div class="list">
        <h2>Party Location:</h2>
        <li>
        <span>${events.location}</span>
        </li>
        </div>
        <div class="list">
        <h2>Party Description:</h2>
        <li> 
        <span>${events.description}</span>
        </li>
        </div>
        </br>
        <button type="deleteIt(${events})" class ="button"> I Dont Wanna Party! </button>
        <hr>
        `
    }) 
   ul.innerHTML = html.join("")
    
} 
async function fetchEvents() {
    const response = await fetch("https://fsa-crud-2aa9294fe819.herokuapp.com/api/2310/events")
    const data = await response.json()
    events = data.data
    console.log(events)
    render()

}

fetchEvents() 

