import React from 'react'

export default function Homepage() {
    return (
        <section className="page_section homepage_section">
            <div className="section_container homepage_container">
                <div className="image_container">
                    <img src="./images/rhino.jpg" alt="Profile picture" />
                </div>
                <article className="section_article homepage_article">
                    <div className="definition_container">
                        <div className="homepage_def homepage_def--info">
                            <p className="homepage_def--info--name">
                                Front-end developer
                                </p>
                        </div>
                    </div>
                    <p className="section_paragraph homepage_paragraph">
                        Self-motivated developer, who is willing to learn and create outstanding UI applications.
                    </p>
                    <div className="homepage_def homepage_def--info">
                        <span className="homepage_def--info--email">
                            <a href="mailto:https://mail.google.com/mail/u/1/#inbox">rinon.ten@onja.org</a>
                        </span>
                        <span className="homepage_def--info--phone">+261340513341</span>
                    </div>
                </article>
            </div>
        </section>
    )
}
