import React, { useContext } from 'react';
import { Context } from '../contexts/globalContext';
import { Works } from '../components';
import { WorksContainer } from '../containers';

export default function WorksPage() {

    const { works } = useContext(Context);
    const worksElements = works && works.map(work => <WorksContainer key={work.id} {...work} />)

    return (
        <Works>
            <Works.Group>
                <Works.Section>
                    <Works.SectionContainer >
                        <Works.SectionHeader>
                            <Works.Title>Featured works</Works.Title>
                        </Works.SectionHeader>
                        {worksElements}
                    </Works.SectionContainer>
                </Works.Section>
            </Works.Group>
        </Works>
    )
}
