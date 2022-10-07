import { getPets } from "./database.js"
import { getWalkers } from "./database.js"
/* Update the code in RegisteredPets module so that the <li> for each pet has an id attribute with the following format id="pet--1". The primary key should be correct for each element.
Add a click event listener to your HTML document.
Store the target HTML element of the click event in a variable.
Check if the id property of the element starts with the string of "pet".
If it does, use the split() method on the id property to get an array of two string (e.g. ["pet", "4"])
Use array deconstruction to assign the primary key to a variable named petPrimaryKey.
Find the whole pet object by iterating the array of pet objects and comparing each primary key to the integer value of the petPrimaryKey variable.
As soon as a match is found, display a message that the dog barks at you - "Rocket barks at you" */

document.addEventListener(
    "click", (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("pet")) {
            const [,petPrimaryKey] = itemClicked.id.split("--")
            let correctPet = null
            let correctWalker = null
            for (const pet of pets) {
                if (pet.id === parseInt(petPrimaryKey)) {
                    correctPet = pet
                }
            }
            for (const walker of walkers) {
                if (walker.id === correctPet.walkerId) {
                    correctWalker = walker.name
                }
            }
            window.alert(`${correctPet.name} is being walked by ${correctWalker}`)
        }
    }
)

const pets = getPets()
const walkers = getWalkers()

export const RegisteredPets = () => {
    let petHTML = "<ul>"

    for (const pet of pets) {
        petHTML += `<li id="pet--${pet.id}">${pet.name}</li>`
    }

    petHTML += "</ul>"

    return petHTML
}

