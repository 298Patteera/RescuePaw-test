const express = require("express")
const router = express.Router()
const petController = require("../controllers/petController")

router.get("/", petController.getAllPets)
router.get("/:id", petController.getPetById)

module.exports = router
