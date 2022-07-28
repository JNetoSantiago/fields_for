import { Controller } from "@hotwired/stimulus"
import { useDebounce } from "https://esm.sh/stimulus-use@0.50.0"

export default class extends Controller {
    static values = { url: String }
    static targets = [ 'searchInput', 'authorIdTemplate', 'target' ]
    static debounces = [
        {
        name: 'search',
        wait: 500
        }
    ]

    connect() {
        useDebounce(this)
    }

    async search(event) {
        const response = await fetch(`${this.urlValue}?query=${event.target.value}`)
        const user = await response.json()[0]

        const idHiddenField = this.authorIdTemplate.content.clone(true)
        idHiddenField.innerHTML.replace(/NEW_RECORD/g, user.created_at)
        idHiddenField.value = user.id
        this.targetTarget.appendChild(idHiddenField)
    }
}
