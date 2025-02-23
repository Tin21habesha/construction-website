const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON requests

// Default Route
app.get("/", (req, res) => {
    res.send("Welcome to the Construction Website Backend!");
});

// Services Route
app.get("/services", (req, res) => {
    const services = [
        { id: 1, name: "Building Construction", description: "We build residential and commercial buildings." },
        { id: 2, name: "Road Construction", description: "We construct roads and highways with top quality." },
        { id: 3, name: "Consulting Services", description: "We offer expert construction consulting." }
    ];
    res.json(services);
});

// Projects Route
app.get("/projects", (req, res) => {
    const projects = [
        { id: 1, name: "Skyscraper Project", location: "Addis Ababa", year: 2023 },
        { id: 2, name: "Highway Bridge", location: "Gondar", year: 2024 }
    ];
    res.json(projects);
});

// Licenses & Certifications Route
app.get("/licenses", (req, res) => {
    const licenses = [
        { id: 1, name: "ISO 9001:2015", issued_by: "Ethiopian Standards Agency" },
        { id: 2, name: "Construction Permit Level 1", issued_by: "Ministry of Construction" }
    ];
    res.json(licenses);
});

// Contact Form Route
app.post("/contact", (req, res) => {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
        return res.status(400).json({ error: "All fields are required!" });
    }
    res.json({ success: "Message received successfully!" });
});

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get("/licenses", (req, res) => {
    const licenses = [
        { id: 1, name: "ISO 9001 Certification", issuedBy: "International Standards Organization", year: 2022 },
        { id: 2, name: "Construction Safety License", issuedBy: "Ethiopian Safety Authority", year: 2021 },
        { id: 3, name: "Environmental Compliance Certificate", issuedBy: "Ministry of Environment", year: 2023 },
    ];
    res.json(licenses);
});
