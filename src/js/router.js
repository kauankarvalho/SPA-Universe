export class Router {
  constructor() {
    this.routes = {}
    this.handleNavigationClick = this.handleNavigationClick.bind(this)
  }

  add(routerName, page) {
    this.routes[routerName] = page
  }

  handleNavigationClick(event) {
    event.preventDefault()
    history.pushState({}, "", event.target.href)

    this.loadRouteHTML()
  }

  loadRouteHTML() {
    const app = document.querySelector("#app")
    const route = this.routes[location.pathname]

    fetch(route)
      .then((data) => data.text())
      .then((html) => {
        app.innerHTML = html
        this.addClickHandlers()
      })
  }

  addClickHandlers() {
    const home = document.querySelector("#nav-home")
    const universe = document.querySelector("#nav-universe")
    const exploration = document.querySelector("#nav-exploration")

    if (location.pathname === "/") {
      const linkButton = document.querySelector("#link-button")
      linkButton.addEventListener("click", this.handleNavigationClick)
    }

    home.addEventListener("click", this.handleNavigationClick)
    universe.addEventListener("click", this.handleNavigationClick)
    exploration.addEventListener("click", this.handleNavigationClick)
  }
}
