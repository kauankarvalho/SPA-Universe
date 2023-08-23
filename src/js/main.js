const routes = {
  "/": "./src/pages/home.html",
  "/universe": "./src/pages/universe.html",
  "/exploration": "./src/pages/exploration.html",
}

function loadRouteHTML() {
  const app = document.querySelector("#app")
  const route = routes[location.pathname]

  fetch(route)
    .then((data) => data.text())
    .then((html) => {
      app.innerHTML = html
      addClickHandlers()
    })
}

function addClickHandlers() {
  const home = document.querySelector("#nav-home")
  const universe = document.querySelector("#nav-universe")
  const exploration = document.querySelector("#nav-exploration")

  home.addEventListener("click", handleNavigationClick)
  universe.addEventListener("click", handleNavigationClick)
  exploration.addEventListener("click", handleNavigationClick)
}

function handleNavigationClick(event) {
  event.preventDefault()
  history.pushState({}, "", event.target.href)
  loadRouteHTML()
}

loadRouteHTML()
