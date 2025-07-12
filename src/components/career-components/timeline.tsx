'use client'
import React from 'react'
// @ts-ignore
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';

const Timeline = () => {
    return (
        <div>
            <VerticalTimeline
                className='text-secondary'
                lineColor={'#03c7ff'}>
                <VerticalTimelineElement
                    // contentStyle={{background: '#03c7ff'}}
                    date="Feb 2025 - present"
                    iconStyle={{}}
                    contentArrowStyle={{ borderRight: '10px solid #fff'}}
                    icon={<></>}
                    shadowSize={'small'}
                    // onTimelineElementClick={/*function*/ }
                >
                    <h3 className='vertical-timeline-element-title'>ETL Associate</h3>
                    <h4>Lake Saint Louis, Missouri</h4>
                    <ul className='text-[#0c152b]'>
                        <li className='mb-2'>Converted and migrated data for utility cooperatives across the U.S. to ensure compatibility with NISC&apos;s Oracle-based systems.</li>
                        <li className='mb-2'>Used Pentaho Data Integration to design and execute ETL workflows for data transformation and validation.</li>
                        <li className='mb-2'>Developed and maintained SQL scripts to clean, map, and load customer data into production environments.</li>
                        <li>Collaborated with internal teams to ensure accurate and seamless onboarding of new clients to NISC platforms.</li>
                    </ul>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    // contentStyle={{background: '#fff', color: '#03c7ff'}}
                    date="May 2024 - Aug 2024">
                    <h3 className='vertical-timeline-element-title'>Software Developer Intern</h3>
                    <h4>Lake Saint Louis, Missouri</h4>
                    <p>Test Test Test</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}

export default Timeline