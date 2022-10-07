import { getWalkers } from "./database.js"
import { getWalkerCities } from "./database.js"
import { getCities } from "./database.js"

document.addEventListener(
    "click", (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("walker")) {
            const [,walkerId] = itemClicked.id.split("--")
            let correctWalker = null
            for (const walker of walkers) {
                if (walker.id === parseInt(walkerId)) {
                    correctWalker = walker
                }
            }
            const filterWalkerCitiesByWalker = (correctWalker) => {
                let correctCities = []
                for (const walkerCity of walkerCities) {
                    if (correctWalker.id === walkerCity.walkerId) {
                        correctCities.push(walkerCity)
                    }
                }
                return correctCities
            }
            const filteredWalkerCities = filterWalkerCitiesByWalker(correctWalker)

            let assignedCityNames = (assignments) => {
                let cityNames = ""
                for (const assignment of assignments) {
                    for (const city of cities) {
                        if (assignment.cityId === city.id) {
                            cityNames += `${city.name}`
                            if (assignments.length > 1) {
                                for (let i = 0; i < assignments.length; i++) {
                                cityNames += ' and ';
                                }
                            }
                        }
                    }
                } return cityNames
            }
            let walkerToCityMatch = assignedCityNames(filteredWalkerCities)
            window.alert(`${correctWalker.name} services ${walkerToCityMatch}`)
        }
    }
)

const walkerCities = getWalkerCities()
const walkers = getWalkers()
const cities = getCities()

export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`
    }

    return walkerHTML += "</ul>"

}

