import React from "react"
import Link from "gatsby-link"

const Sidebar = (props) => (
    <div
        style={{
            border: '2px solid #e6e6e6',
            maxWidth: 960,
            padding: '0.5rem',
            marginBottom: '25px'
        }}
        >
        <strong>
            <Link to="/about-me"
                style={{
                    color: "black",
                    textDecoration: "none",
                }}
            >{props.title}.</Link>
        </strong><br />{props.twitter}
    </div>
);

export default Sidebar;