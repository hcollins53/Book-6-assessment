import { getTopics } from "./dataAccess.js"


export const Topics = () => {
    const topics = getTopics()
    let html = "<ul class='userTopics'>"
    for( const topic of topics) {
        html += `<li>
        <input type="checkbox" name="topic" value="${topic.id}"/>${topic.name}
        </li>`
    }

html += "</ul>"
return html
}