import React from 'react'

export default function Homepage() {
    return (
        <section className="page_section homepage_section">
                <div className="section_container homepage_container">
                    <div className="image_container">
                        <img src="./images/rhino.jpg" alt="Profile picture"/>
                    </div>
                    <article className="section_article homepage_article">
                        <div className="definition_container">
                            <dl className="homepage_def homepage_def--info">
                                <dt className="homepage_def--info--name">
                                    Rinon Tendrinomena
                                </dt>
                                <dd className="homepage_def--info--job">
                                    Front-end developer
                                </dd>
                            </dl>
                            <dl className="homepage_def homepage_def--info">
                                <dt className="homepage_def--info--email">
                                    <a href="mailto:https://mail.google.com/mail/u/1/#inbox">rinon.ten@onja.org</a>
                                </dt>
                                <dt className="homepage_def--info--phone">+261340513341</dt>
                            </dl>
                        </div>
                        <p className="section_paragraph homepage_paragraph">
                            Self-motivated developer, who is willing to learn and create outstanding UI applications.
                        </p>
                    </article>
                </div>
            </section>
    )
}
