import React from "react"
import Link from "gatsby-link"

const SidebarLinks = (links) => (
    <div
        style={{
            border: '2px solid #e6e6e6',
            maxWidth: 960,
            padding: '0.5rem',
            marginBottom: '25px'
        }}
        >
        <strong>{links.title}.</strong><br />
            <a href="https://www.twitter.com/aaronhalstonlee"
                style={{
                    color: "black",
                    textDecoration: "none",
                }}
            > {links.twitter}</a>, 
            <a href="https://github.com/aaronhalstonlee"
                style={{
                    color: "black",
                    textDecoration: "none",
                }}
            > {links.github}</a>, 
            <a href="https://codepen.io/aaronhalstonlee"
                style={{
                    color: "black",
                    textDecoration: "none",
                }}
            > {links.codepen}</a>
    </div>
);

export default SidebarLinks;