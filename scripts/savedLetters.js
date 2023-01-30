import { getAuthors, getLetters, getRecipients, getTopics } from "./dataAccess.js"


export const SavedLetters = (letter) => {
    const authors = getAuthors()
    const recipients = getRecipients()
    const topics = getTopics()

    const foundAuthor = authors.find(
        (author) => {
            return author.id === parseInt(letter.author)
        }
    )
    const foundRecipient = recipients.find(
        (recipient) => {
            return recipient.id === parseInt(letter.recipient)
        }
    )
    const foundTopic = topics.find(
        (topic) => {
            return topic.id === parseInt(letter.topic)

        })
    return `<li class="separateLetters">
    Dear ${foundAuthor.name} (${foundAuthor.email}),<br>
    <p>${letter.letter}<br></p>
    Love ${foundRecipient.name} (${foundRecipient.email})<br>
    Sent on ${letter.date}<br>
    <button class="topic">
    ${foundTopic.name}<br>
    </button>
    </li>`
}

export const FinalLetters = () => {
    const letters = getLetters()
    let html = "<ul>"
    const listItems = letters.map(SavedLetters)
    html+= listItems.join("")
    html+= "</ul>"
    return html
}

// ${topicNames}<br>
// topics.map(
   // topic => {
        //if(letter.topicId.includes(topic.id)) {
          //  topicNames += `${topic.name}`
      //  }
      // } 