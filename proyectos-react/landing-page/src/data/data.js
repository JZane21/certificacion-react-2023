import React from "react";

function data(){
    const optionLinks = [
        {
            id:1,
            link:"home"
        },
        {
            id:2,
            link:"about"
        },
        {
            id:3,
            link:"services"
        },
        {
            id:4,
            link:"tours"
        },
    ];
    
    const socialLinks = [
        {
            id: 1,
            classSocialLink: "fa-facebook"
        },
        {
            id: 2,
            classSocialLink: "fa-twitter"
        },
        {
            id: 3,
            classSocialLink: "fa-squarespace"
        },
    ];

    return {
        optionLinks,
        socialLinks
    };
}

export { data }