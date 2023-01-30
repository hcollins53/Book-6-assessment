import { getAuthors } from "./dataAccess.js"


export const Authors = () => {
    const authors = getAuthors()
    return `<ul>
    <li class ="author">
    <select class ="authors" id="authors">
    option value= "0">Choose an author</option>
    ${
        authors.map(
            author => {
                return `<option value="${author.id}">${author.name}</option>`
            }
        ).join("")
    }
    </select>
    </li>
    </ul>`
}