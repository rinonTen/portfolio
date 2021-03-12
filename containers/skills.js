import React from 'react';
import { Skills } from '../components';
import { Section } from '../stylesComponents/works';

export default function SkillsContainer({ logo, name, text }) {
    return (
        <Skills.Article>
            <Skills.LogoContainer>
                <Skills.Logo src={logo} alt="skill logo" />
            </Skills.LogoContainer>
            <Skills.Heading>{name}</Skills.Heading>
            <Skills.Text>
                {text}
            </Skills.Text>
        </Skills.Article>
    )
}
