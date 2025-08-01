const { doctorListing } = require("../controller/doctorListing")
const router = require("express").Router()


router
    .get("/get-all-docters", doctorListing)


module.exports = router