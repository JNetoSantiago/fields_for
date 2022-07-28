import { Controller } from "@hotwired/stimulus"
import { useDebounce } from "https://esm.sh/stimulus-use@0.50.0"
import NestedForm from 'https://esm.sh/stimulus-rails-nested-form@4.0.0'

export default class extends NestedForm {
  static values = { url: String }
  static debounces = [
    {
      name: 'search',
      wait: 500
    }
  ]

  connect() {
    super.connect()
    useDebounce(this)
  }

  async search(event) {
    const response = await fetch(`${this.urlValue}?query=${event.target.value}`)
    const user = await response.json()[0]

    console.log(user)
  }
}
