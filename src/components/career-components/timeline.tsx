'use client'
import React from 'react'
// @ts-ignore
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';

const Timeline = () => {

    const jobs = [
        {
            id: 1,
            business: 'National Information Solutions Cooperative (NISC)',
            title: 'ETL Associate',
            description: [
                'Converted and migrated data for utility cooperatives across the U.S. to ensure compatibility with NISC\'s Oracle - based systems.',
                'Used Pentaho Data Integration to design and execute ETL workflows for data transformation and validation.',
                'Developed and maintained SQL scripts to clean, map, and load customer data into production environments.',
                'Collaborated with internal teams to ensure accurate and seamless onboarding of new clients to NISC platforms.'
            ],
            date: 'FEB 2025 - Present'
        }, {
            id: 2,
            business: 'National Information Solutions Cooperative (NISC)',
            title: 'Software Developer Intern',
            description: [
                'Performed research, design and development while maintaining software for utility and broadband companies across the nation in an Agile development process.',
                'Developed software with Angular, Java, CSS, HTML, XML, SQL, and Spring.'
            ],
            date: 'MAY 2024 - AUG 2024'
        }, {
            id: 3,
            business: 'Computer Information Systems and Consultants (CISC)',
            title: 'Information Technology Specialist',
            description: [
                'Maintained Linux and Windows servers and systems to keep networks fully operational.',
                'Explained security measures in simple terminology to help users identify and understand malware and phishing threats.'
            ],
            date: 'MAY 2022 - JAN 2023'
        }
    ]

    return (
        <div className='my-12'>
            <VerticalTimeline
                lineColor={'#03c7ff'}
                layout={'1-column-left'}
            >
                {jobs.map((job) => (
                    <VerticalTimelineElement
                        key={job.id}
                        className='timeline-element'
                        contentStyle={{ background: '#03c7ff', boxShadow: 'none' }}
                        date={job.date}
                        iconStyle={{}}
                        contentArrowStyle={{ borderRight: '10px solid #03c7ff' }}
                        icon={<></>}
                        shadowSize={'small'}
                    >
                        <h3 className='font-bold text-xl'>{job.title}</h3>
                        <h4 className='font-semibold mb-4 text-lg'>{job.business}</h4>
                        <ul>
                            {job.description.map(desc => (
                                <li className='mb-2'>
                                    {desc}
                                </li>
                            ))}
                        </ul>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </div>
    )
}

export default Timeline