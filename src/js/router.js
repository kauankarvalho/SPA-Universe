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

    let route = this.routes[location.pathname]
    if (route === undefined) {
      route = this.routes["/404"]
      location.pathname = "/404"
    }

    fetch(route)
      .then((data) => data.text())
      .then((html) => {
        app.innerHTML = html
        this.addClickHandlers()
      })
  }

  addClickHandlers() {
    if (location.pathname === "/404") {
      const linkHome = document.querySelector("#link-home")
      linkHome.addEventListener("click", this.handleNavigationClick)
    } else {
      const home = document.querySelector("#nav-home")
      const universe = document.querySelector("#nav-universe")
      const exploration = document.querySelector("#nav-exploration")

      if (location.pathname === "/") {
        const linkUniverse = document.querySelector("#link-universe")
        linkUniverse.addEventListener("click", this.handleNavigationClick)
      }

      home.addEventListener("click", this.handleNavigationClick)
      universe.addEventListener("click", this.handleNavigationClick)
      exploration.addEventListener("click", this.handleNavigationClick)
    }
  }
}
