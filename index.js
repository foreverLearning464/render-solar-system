const solarSystem = document.getElementById("solarSystem")
const planets = [
    {
    "name": "Mercury",
    "diameter": 4879,
    "color": "grey"
    },
    {
    "name": "Venus",
    "diameter": 12104,
    "color": "yellow"
    },
    {
    "name": "Earth",
    "diameter": 12742,
    "color": "green"
    },
    {
    "name": "Mars",
    "diameter": 6779,
    "color": "pink"
    },
    {
    "name": "Jupiter",
    "diameter": 139822,
    "color": "yellow"
    },
    {
    "name": "Saturn",
    "diameter": 116464,
    "color": "orange"
    },
    {
    "name": "Uranus",
    "diameter": 50724,
    "color": "grey"
    },
    {
    "name": "Neptune",
    "diameter": 49244,
    "color": "blue"
    }
]

const renderPlanets = ()=>{
    for ( let i=0; i<planets.length; i++ ) {
        let planetEl = document.createElement('div') 
        let planet = planets[i]
        planetEl.style.width = planet.diameter/1000 + 'px'
        planetEl.style.height = planet.diameter/1000 + 'px'
        planetEl.style.backgroundColor = planet.color
        planetEl.style.margin = '20px'
        planetEl.style.borderRadius = '50%'
        solarSystem.appendChild(planetEl)      
    }
}
renderPlanets()


// Task:
// Write a function to render 
// the planets from the planets array using JavaScript.
 
// Stretch goals:
// - 1. Show planet facts on hover
// - 2. Make one side of the planets dark (you can do this with one CSS property!)