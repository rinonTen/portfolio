import React, { useContext } from 'react';
import { Context } from '../contexts/globalContext';
import { Home, Works } from '../components';  
import WorksContainer  from './works';
import { Link } from 'react-router-dom';

export default function HomeContainer() { 
    const { works} = useContext(Context);

    const worksElements = works && works.slice(0, 3).map(work => <WorksContainer key={work.id} {...work}/>)

     return (
        <Home>
            <Home.SectionContainer>
                 <Home.ImageContainer>
                    <Home.Profile src="./images/my_image.JPG" alt="my image"/>
                </Home.ImageContainer>
                <Home.Article>
                    <Home.Header>
                        <Home.Heading>
                            Hi, I am Rinon,
                            Front-end developer
                        </Home.Heading>
                    </Home.Header>
                    <Home.Text>
                        I believe we can make the world a much better place through building products that solve people's problems. If you align with that vision, we should work together!
                    </Home.Text> 
                    <Home.ResumeButton>
                        <Link to="/works">
                            See projects
                        </Link>
                    </Home.ResumeButton>
                </Home.Article>
                <Home.ImageContainer>
                    <Home.Profile src="./images/my_image.JPG" alt="my image"/>
                    <Home.ImgShadow/>
                </Home.ImageContainer>
            </Home.SectionContainer> 
            <Works>
            <Works.Group>
                <Works.Section>
                    <Works.SectionContainer className="showOneWork">
                        <Works.SectionHeader>
                            <Works.Title>Featured works</Works.Title>
                        </Works.SectionHeader>
                        {worksElements}
                    </Works.SectionContainer>
                </Works.Section>
            </Works.Group>
        </Works> 
        </Home>
    )
}
