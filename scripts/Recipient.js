import { getRecipients } from "./dataAccess.js"



export const Recipients = () => {
    const recipients = getRecipients()
    return `<ul>
    <li>
    <select class ="recipients" id="recipients">
    option value="0">Choose a recipient</option>
    ${
        recipients.map(
            recipient => {
                return `<option value="${recipient.id}">${recipient.name}</option>`
            }
        ).join("")
    }
    </select>
    </li>
    </ul>`
}