import React from 'react';
import { Link } from 'react-router-dom';
import { Works } from '../components';

export default function WorksContainer({ title, description, requirement, codeUrl, screenshot, url }) {
    function createMarkup() {
        return {
           __html: description};
     }; 
    return (
        <Works.Article>
            <Works.ImageContainer>
                <Works.Link href={url}>
                    <Works.Image src={`${screenshot && screenshot }`} alt={`${title}'screenshot`} />
                </Works.Link>
            </Works.ImageContainer>
            <Works.DescriptionContainer>
                <Works.WorkTitle>{title}</Works.WorkTitle>
                <Works.ButtonContainer>
                    <Works.Link href={url}>
                        <Works.Button>Demo</Works.Button>
                    </Works.Link>
                    <Works.Link href={codeUrl}>
                        <Works.Button>Code</Works.Button>
                    </Works.Link>
                </Works.ButtonContainer> 
                {
                    description.map(item => <Works.WorkDescription key={item}>{item}</Works.WorkDescription>)
                }
                {/* <Works.WorkDescription>{requirement}</Works.WorkDescription> */}
            </Works.DescriptionContainer>
        </Works.Article>
    )
}
