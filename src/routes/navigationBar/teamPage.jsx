import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../../styles/index.css'; // Global styles
import '../../styles/team-page.css'; // Streets-specific styles


export default function Team() {
    const teamMembers = [
        {
            name: "Vickie Larsen",
            role: "Public Humanist",
            description: "Expert in cultural heritage and public history projects.",
            // Add image path if available
        },
        {
            name: "Dean Stevens",
            role: "Tech Lead",
            description: "Leads the technical direction and architecture of our project.",
        },
        {
            name: "Mattilyn Evenson",
            role: "Historical and Archival Story Manufacturer",
            description: "Specializes in creating and preserving historical narratives.",
        },
        {
            name: "Lennx Brown",
            role: "QGIS Specialist",
            description: "Uses QGIS to visualize and interpret geospatial data.",
        },
        {
            name: "Simon Zychowski",
            role: "Lead Full-Stack Developer",
            description: "Responsible for both front-end and back-end development.",
        },
        {
            name: "Mackailee Longobricco",
            role: "Full-Stack and UI/UX Developer",
            description: "Develops and designs the user experience for web applications.",
        },
        {
            name: "Richard Rost",
            role: "Full-Stack Developer",
            description: "Focuses on building scalable and efficient applications.",
        },
        {
            name: "Noah Diener",
            role: "Image Processing Lead",
            description: "Leads the image processing and enhancement efforts.",
        },
        {
            name: "Maren Ewertz",
            role: "Multimedia Specialist",
            description: "Handles multimedia content creation and integration.",
        }
    ];

    return (
        <div className="team-container">
            <div className="border-box"><h1>Meet the Team</h1></div>
            <div className="team-grid">
                {teamMembers.map((member, index) => (
                    <div key={index} className="team-card">
                        <h3>{member.name}</h3>
                        <p className="role">{member.role}</p>
                        {member.description && <p className="description">{member.description}</p>}
                    </div>
                ))}
            </div>
        </div>
    );
}
