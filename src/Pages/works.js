import React, { useContext, useEffect } from 'react'
import { Context } from '../contexts/globalContext'
import { Works } from '../components'
import { WorksContainer } from '../containers'

export default function WorksPage() {
  const { works, setHomeActive, setAboutActive, setWorksActive } =
    useContext(Context)

  const worksElements =
    works && works.map((work) => <WorksContainer key={work.id} {...work} />)
  function setWorksToActive() {
    setHomeActive('')
    setAboutActive('')
    setWorksActive('worksActive')
  }

  useEffect(() => {
    setWorksToActive()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <Works className='works_section'>
      <Works.Group>
        <Works.Section>
          <Works.SectionContainer className='showAllWorks'>
            <Works.SectionHeader>
              <Works.Title className='workspage_heading'>
                Featured works
              </Works.Title>
            </Works.SectionHeader>
            {worksElements}
          </Works.SectionContainer>
        </Works.Section>
      </Works.Group>
    </Works>
  )
}
