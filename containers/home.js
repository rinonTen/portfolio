import React, { useContext } from 'react';
import { Context } from '../contexts/globalContext';
import { Home, Skills, Works } from '../components'; 
import SkillsContainer  from './skills'; 
import WorksContainer  from './works';
 
export default function HomeContainer() {
    const { works, technologies } = useContext(Context);
    const worksElements = works && works.slice(0, 3).map(work => <WorksContainer key={work.id} {...work}/>)
    const technologiesElements = technologies && technologies.map(skill => {
       return <SkillsContainer key={skill.id} {...skill}/>
    })
     return (
        <Home>
            <Home.SectionContainer>
                <Home.Article>
                    <Home.Header>
                        <Home.Heading>
                            Hi, I am Rinon,
                            Web developer
                        </Home.Heading>
                    </Home.Header>
                    <Home.Text>
                        We can make our world in a better place through programming. Your website will look stunning by combining all the experience that I have.
                        Open for everyone, work for everyone!
                    </Home.Text>
                    <Home.ResumeButton>
                        See resume
                    </Home.ResumeButton>
                </Home.Article>
                <Home.ImageContainer>
                    <Home.Profile src="./images/my-image.jpg" alt="my image"/>
                </Home.ImageContainer>
            </Home.SectionContainer>
            <Skills>
            <Skills.SectionContainer>
                <Skills.Header>
                    <Skills.Title>My tools</Skills.Title>
                </Skills.Header>
                {
                     technologiesElements
                }
            </Skills.SectionContainer>
            </Skills>
            <Works>
            <Works.Group>
                <Works.Section>
                    <Works.SectionContainer>
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
