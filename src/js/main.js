import { Router } from "./router.js"

const router = new Router()

router.add("/", "./src/pages/home.html")
router.add("/universe", "./src/pages/universe.html")
router.add("/exploration", "./src/pages/exploration.html")

router.loadRouteHTML()

window.onpopstate = () => router.loadRouteHTML()
