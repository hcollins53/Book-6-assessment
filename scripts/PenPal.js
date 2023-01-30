
import { LetterForm } from "./Letters.js"
import { FinalLetters } from "./savedLetters.js"




export const PenPal = () => {
    return `
    <h1>Pen Pal Society</h2>
    <section class="letterSubmission">
       ${LetterForm()}
    </section>
    <h2>Letters</h2>
    <section class="savedLetters">
        ${FinalLetters()}
    </section>`
   
}