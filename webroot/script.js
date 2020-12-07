// Collection of all the works
let portfolio = [
    {
        title: "Game landing page",
        description: "This website has multiple background-images and has to be built in mobile and desktop devices",
        requirement: "",
        screenshot: "",
        url: "https://ganamavo.github.io/game_landing_page/",
    },
    {
        title: "Responsive news site",
        description: "This is a page about news",
        requirement: "",
        screenshot: "./images/responsive_site.png",
        url: "https://ganamavo.github.io/responsive_news_site/",
    },
    {
        title: "Sports app",
        description: "My second frond end assessment which I had to build a page that is for a sport organisation",
        requirement: "",
        screenshot: "",
        url: "https://ganamavo.github.io/front-end-assessment/",
    },
    {
        title: "Fotograph",
        description: "Build with only html, css and a little bit of Javascript for the images slideshow",
        requirement: "",
        screenshot: "",
        url: "https://ganamavo.github.io/front-end-finals/",
    },
    
]
// Grab the container of all portfolio
const portfolioContainer = document.querySelector(".portfolio_container");
const listContainer = document.querySelector(".work_lists");
// Generate the html
const displayPortfolio = () => {
    let html = portfolio.map(work => {
        return `
        <article class="page_article portfolio_article">
                <header class="article_header portfolio_article_header">
                    <h2 class="article_heading portfolio_article_heading">
                       ${work.title}
                    </h2>
                </header>
                <div class="work_description">
                    <p class="page_paragraph portfolio_paragraph">
                        ${work.description}
                    </p>
                    <p class="page_paragraph portfolio_paragraph">
                    ${work.requirement}
                    </p>
                    <img class="work_image" src="${work.screenshot}" alt="${work.title}">
                    <div class="link_container">
                        <a class="portfolio_link" href="${work.url}">See full work</a>
                    </div>
                </div>
            </article>
        `
    }).join("");
    portfolioContainer.innerHTML = html;
}

displayPortfolio();

// Display the list of all portfolio
const displayList = () => {
    const listHtml = portfolio.map(list => {
        return `
        <li class="work">
            <a href="${list.url}">${list.title}</a>
        </li> `
    }).join("");
    listContainer.innerHTML = listHtml;
}

displayList();