import { getCities } from "./database.js"

const cities = getCities()

export const CityList = () => {
    let citiesHTML = "<ol>"

    for (const city of cities) {
         citiesHTML += `<li id="city--${city.id}>${city.name}</li>`
    }

    citiesHTML += "</ol>"

    return citiesHTML
}