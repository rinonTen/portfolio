import React from 'react';
import { Works } from '../components';

export default function WorksContainer({ title, description, technologies, codeUrl, screenshot, url }) {
  
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
                    {
                    url && <Works.Link href={url}>
                        <Works.Button>Demo</Works.Button>
                    </Works.Link>
                    }
                    <Works.Link href={codeUrl}>
                        <Works.Button>Code</Works.Button>
                    </Works.Link>
                </Works.ButtonContainer> 
                {
                    description.map(item => <Works.WorkDescription key={item}>{item}</Works.WorkDescription>)
                }
                {
                technologies.map(item => <Works.Tech key={item}>{item}</Works.Tech>)
                }
            </Works.DescriptionContainer>
        </Works.Article>
    )
}
