export const optionLinks = [
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
    
export const socialLinks = [
    {
        id: 1,
        classSocialLink: "facebook"
    },
    {
        id: 2,
        classSocialLink: "twitter"
    },
    {
        id: 3,
        classSocialLink: "squarespace"
    },
];

export const footerOptions 
= [...optionLinks.filter(i => i.link!=="tours"),{ id:4, link:"featured" }];
