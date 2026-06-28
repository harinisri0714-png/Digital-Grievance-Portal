const express = require("express");
const router = express.Router();
const Complaint = require("../models/Complaint");

// GET all complaints
router.get("/", async (req, res) => {
  try {
    const complaints = await Complaint.find();
    res.json(complaints);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST new complaint
router.post("/", async (req, res) => {
  try {
    const complaint = new Complaint({
      name: req.body.name,
      email: req.body.email,
      department: req.body.department,
      complaint: req.body.complaint,
    });

    await complaint.save();

    res.json({
      message: "Complaint Submitted Successfully",
      data: complaint,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// UPDATE STATUS
router.put("/:id", async (req, res) => {
  try {
    const complaint = await Complaint.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );

    res.json(complaint);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;