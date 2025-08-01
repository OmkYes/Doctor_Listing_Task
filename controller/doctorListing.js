const asyncHandler = require("express-async-handler");
const Docter = require("../model/Docter");

exports.doctorListing = asyncHandler(async (req, res) => {
    const { location, specialization } = req.query;
    let filter = {};
    if (location) {
        filter.location = { $regex: location, $options: "i" };
    }
    if (specialization) {
        filter.specialization = { $regex: specialization, $options: "i" }
    }
    const result = await Docter.find(filter);
    res.json({ message: "doctor get success", result });
});
