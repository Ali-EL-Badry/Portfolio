import React, { useState } from "react";
import "./Feedback.css";

const Feedback = () => {
    const [formData, setFormData] = useState({
        name: "",
        service: "Others",
        feedback: "",
    });

    const FORM_ACTION = "https://formspree.io/f/xeoekgwl"; // Your Formspree link

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(FORM_ACTION, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        })
        .then(() => {
            alert("Feedback submitted successfully!");
            setFormData({ name: "", service: "Others", feedback: "" }); // Clear form
        })
        .catch((error) => console.error("Error submitting feedback:", error));
    };

    return (
        <div className="feed">
            <h2 className="title">Feedback Form</h2>
            <form onSubmit={handleSubmit} className="form">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="service">Type of Service</label>
                    <select id="service" name="service" onChange={handleChange} value={formData.service}>
                        <option value="data-science">Data Science</option>
                        <option value="web-development">Web Development</option>
                        <option value="Others">Others</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="feedback">Feedback</label>
                    <textarea id="feedback" name="feedback" rows={4} value={formData.feedback} onChange={handleChange} required />
                </div>
                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    );
};

export default Feedback;
