import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import greenchefLogo from '../../assets/images/experience/greenchef-logo.png'
import galateaLogo from '../../assets/images/experience/galatea-associates-logo.png'
import nasaLogo from '../../assets/images/experience/nasa-logo.png'

class ExperienceSection extends React.Component {
  render() {
    return (
      <Section title="Experience">
        <div className="row">
          <ExperienceUnit
            logo={greenchefLogo}
            colour='#FCFFFF'
            title='Green Chef'
            link='https://www.greenchef.com/'
            timeperiod='2018 - Present'
            subtitle='Built out front-end customer experiences, added features 
            to an in-house warehouse management system, sat in the hot-seat during production outages'
            backgroundSize='50%'
          />
          <ExperienceUnit
            logo={galateaLogo}
            colour='#333333'
            title='Galatea Associates'
            link='https://www.galatea-associates.com/'
            timeperiod='2015 - 2018'
            subtitle='Tech lead on a team creating cloud based microservices enabling 
            modernized trade booking, settlement, and position keeping.'
            backgroundSize='80%'
          />
          <ExperienceUnit
            logo={nasaLogo}
            colour='#FCFFFF'
            title='NASA'
            link='https://www.nasa.gov/'
            timeperiod='2013, 2014'
            subtitle='College internships where I built control modules for a proposed lunar crane and 
            reusable hardware components on FPGAs. Was unable to find where they hid the aliens.' 
          />
        </div>
      </Section>
    )
  }
}

export default ExperienceSection
