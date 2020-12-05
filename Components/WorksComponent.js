import React from 'react'

export default function WorksComponent({ title, description, requirement, id, screenshot, url }) {
    return (
        <section className="page_section work_section">
            <div className="section_container work_container">
                <div className="section_div work_section__div">
                    <div className="image_container">
                        <img src="./images/blog-template.jpg" alt={`${title}'s screenshot`} />
                    </div>
                    <article className="page_article work_section_article">
                        <h2 className=" page_heading work_section_heading">{title}</h2>
                        <p className="page_container work_section_paragraph">
                            {description}
                        </p>
                        <div className="button_container">
                            <a className="page_link demo_link" href={url}>
                                <button className="demo-btn" type="button">Demo</button>
                            </a>
                            <a className="page_link github_link" href="http://code">
                                <button className="code-btn" type="button">Code</button>
                            </a>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    )
}
