import React from 'react';
import birthdayAppImage from '../static/images/birthday-app.png';
import photografImage from '../static/images/photograf.png';

const images = {
    birthday: birthdayAppImage,
    fotograph: photografImage,
    default: "https://i.picsum.photos/id/0/450/150.jpg?hmac=FqGsSttgluHt-th1J_aPKM0SdwR3X_ZV4IVVYSI3yn4"
}

export default function WorksComponent({ title, description, requirement, id, screenshot, url, codeUrl }) {

    const image = images[screenshot] || images.default;

    return (
        <section className="page_section work_section">
            <div className="section_container work_container">
                <div className="section_div work_section__div">
                    <div className="image_container">
                        <img className="work_screenshot" src={image} alt={`${title}'s screenshot`} />
                    </div>
                    <article className="page_article work_section_article">
                        <h2 className=" page_heading work_section_heading">{title}</h2>
                        <p className="page_container work_section_paragraph">
                            {description}
                        </p>
                        <div className="button_container">
                            <a className="page_link demo_link" href={url} target="_blank">
                                <button className="demo-btn" type="button">Demo</button>
                            </a>
                            <a className="page_link github_link" href={codeUrl} target="_blank">
                                <button className="code-btn" type="button">Code</button>
                            </a>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    )
}
