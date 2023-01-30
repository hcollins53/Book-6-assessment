const applicationState = {
    lettersToSend: [],
    recipients: [],
    authors:[],
    topics:[],
}

export const getLetters = () => {
    return applicationState.lettersToSend.map(letter => ({...letter}))
}
export const getAuthors = () => {
    return applicationState.authors.map(author => ({...author}))
}
export const getRecipients = () => {
    return applicationState.recipients.map(recipient => ({...recipient}))
}
export const getTopics = () => {
    return applicationState.topics.map(topic => ({...topic}))
}


const API = "http://localhost:8088"

export const fetchLettersToSend = () => {
    return fetch(`${API}/lettersToSend`) 
        .then(response => response.json())
        .then((letters) => {
            applicationState.lettersToSend = letters
        }
    )
}
export const fetchRecipients = () => {
    return fetch(`${API}/recipients`) 
        .then(response => response.json())
        .then((recipientsOfLetters) => {
            applicationState.recipients = recipientsOfLetters
        }
    )
}
export const fetchAuthors = () => {
    return fetch(`${API}/authors`) 
        .then(response => response.json())
        .then((famousAuthors) => {
            applicationState.authors = famousAuthors
        }
    )
}
export const fetchTopics = () => {
    return fetch(`${API}/topics`) 
        .then(response => response.json())
        .then((topicsOfLetter) => {
            applicationState.topics = topicsOfLetter
        }
    )
}

export const sendLetter = (userTypedLetter) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userTypedLetter)
    }
    return fetch(`${API}/lettersToSend`, fetchOptions)
    .then(response => response.json())
    .then(() => {
        document.querySelector("#container").dispatchEvent(new CustomEvent("stateChanged"))
    })
}