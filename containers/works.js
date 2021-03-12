import React from 'react';
import { Link } from 'react-router-dom';
import { Works } from '../components';

export default function WorksContainer({ title, description, requirement, screenshot, url }) {
    return (
        <Works.Article>
            <Works.ImageContainer>
                <Works.Link href={url}>
                    <Works.Image src={`${screenshot ? screenshot : "ajaf"}`} alt={`${title}'screenshot`} />
                </Works.Link>
            </Works.ImageContainer>
            <Works.DescriptionContainer>
                <Works.WorkTitle>{title}</Works.WorkTitle>
                <Works.WorkDescription>{description}</Works.WorkDescription>
                <Works.ButtonContainer>
                    <Works.Link href={url}>
                        <Works.Button>See more</Works.Button>
                    </Works.Link>
                </Works.ButtonContainer>
            </Works.DescriptionContainer>
        </Works.Article>
    )
}