const mongoose = require("mongoose");

const complaintSchema = new mongoose.Schema({
  name: String,
  email: String,
  department: String,
  complaint: String,
  status: {
    type: String,
    default: "Pending",
  },
});

module.exports = mongoose.model("Complaint", complaintSchema);