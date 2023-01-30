import { Authors } from "./Author.js"
import { getLetters, sendLetter } from "./dataAccess.js"
import { Recipients } from "./Recipient.js"
import { Topics } from "./Topics.js"


const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "submitLetter") {
        const userAuthor = document.querySelector("select[class='authors']").value
        const userLetter = document.querySelector("textarea[name='letter']").value
        const userRecipient = document.querySelector("select[class='recipients']").value
        const userTopic = document.querySelector("input[name='topic']").value
       /*
        let userTopics = document.querySelector("ul[class='userTopic']")
       const userTopicArray = []
       let checkedTopics = userTopics.querySelectorAll("input[name='topic']:checked")
       checkedTopics.forEach((topic) => {
        userTopicArray.push(parseInt(topic.value))
       })
       */
                
       
        // Make an object out of the user input
        const dataToSendToAPI = {
            author: userAuthor,
            letter: userLetter,
            recipient: userRecipient,
            topic: userTopic,
            date: new Date()
        }

        // Send the data to the API for permanent storage
        sendLetter(dataToSendToAPI)
    }
})



export const LetterForm = () => {
    let html = `
        <div class="field authors">
            <label class="label" for="author">Author</label>
             ${Authors()}
        </div>
        <div class="field textBox">
            <label class="label" for="letter">Letter</label>
            <textarea type="text" name="letter" class="textarea"> </textarea>
        </div>
        <div class="field topics">
            <label class="label" for="topic">Topics</label>
            ${Topics()}
        </div>
        <div class="field recipients">
            <label class="label" for="recipient">Recipient</label>
            ${Recipients()}
        </div>

        <button class="button" id="submitLetter">Send Letter</button>
    `

    return html
}