'use strict';
const STORAGE_KEY = 'projectsDB';
var gProjects = createProjects();

function createProjects() {
    var projects = loadFromStorage(STORAGE_KEY)
    if (!projects || !projects.length) {
        projects = [
            {
                id: "U-buy",
                name: "U-buy",
                client: "Privet",
                title: "Marketplace",
                desc: "Clothing Online Store ",
                url: "https://u-buy-app.herokuapp.com/home",
                publishedAt: 1448693940000,
                labels: [" Buy ,E-Commerce "],
                technology: ["React,Redux ,Scss ,NodeJS ,MongoDB"],
                img: "img/portfolio/U-buy.png"
            },
            {
                id: "Walk-with-me",
                name: "Walk with me",
                client: "Coding Academy",
                title: "Travel Booking",
                desc: "Website for booking trips according to location and guide.",
                url: "https://awesome-walk-with-me.herokuapp.com/",
                publishedAt: 1448693940000,
                labels: [" Travel "],
                technology: ["Vue ,Scss ,NodeJS ,MongoDB"],
                img: "img/portfolio/Walk-with-me.png"
                
            },
            {
                id: "Appsus",
                name: "Book-Shop",
                client: "Coding Academy",
                title: "Admin Page",
                desc: "App for keeping things (reference app google keep)",
                url: "https://dorgrosman.github.io/App-sus/#/",
                publishedAt: 1448693940000,
                labels: ["Management"],
                technology: ["Vue ,Css"],
                img: "img/portfolio/Appsus.png"
            },

        ]
    }
    // saveToStorage(STORAGE_KEY, projects)
    return projects
}

function getProjs() {
    return gProjects
}


function _saveToStorage() {
    saveToStorage(STORAGE_KEY, gProjects)
}

function getProjById(projId) {
    var proj = gProjects.find(function (proj) {
        return projId === proj.id
    })
    return proj
}