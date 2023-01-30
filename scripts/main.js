//Make the modules necessary and database 
//make the applicationState array with letters, saved letters, recipients, authors, and topics stored
//functions- html elements and 

import { fetchAuthors, fetchLettersToSend, fetchRecipients, fetchTopics } from "./dataAccess.js"
import { PenPal } from "./PenPal.js"


const mainContainer = document.querySelector("#container")

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    })

export const render = () => {
    fetchLettersToSend().then(
        () => fetchRecipients())
        .then(
            () => fetchTopics())
        .then(
            () => fetchAuthors())
        .then( () => {
            mainContainer.innerHTML = PenPal()
        })
}
render()