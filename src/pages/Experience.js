import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css"
import SchoolIcon from "@mui/icons-material/School"
import WorkIcon from "@mui/icons-material/Work";
function Experience() {
    return (
        <div className='experience'>
            <VerticalTimeline linecolor="#3e497a">
                <VerticalTimelineElement className='vertical-timeline-element--education' date='2023-present'
                    iconStyle={{background: '#3e497a', color:"#fff"}} icon={<SchoolIcon/>}>
                    <h3 className='vertical-timeline-element-title'>Internship Representative of IT branch</h3>
                </VerticalTimelineElement>
                <VerticalTimelineElement className='vertical-timeline-element--education' date='2022-present'
                        iconStyle={{background: '#3e497a', color:"#fff"}} icon={<WorkIcon/>}>
                        <h3 className='vertical-timeline-element-title'>Problem Setter @CodeChefChapter NITJ</h3>
                </VerticalTimelineElement>
                <VerticalTimelineElement className='vertical-timeline-element--education' date='2021-2025'
                    iconStyle={{background: '#3e497a', color:"#fff"}} icon={<SchoolIcon/>}>
                    <h3 className='vertical-timeline-element-title'>BTech in Information Technology from NIT Jalandhar <br /><i>CGPA: 7.99(till 4th Sem)</i></h3>
                </VerticalTimelineElement>
                <VerticalTimelineElement className='vertical-timeline-element--education' date='2019-2021'
                    iconStyle={{background: '#3e497a', color:"#fff"}} icon={<SchoolIcon/>}>
                    <h3 className='vertical-timeline-element-title'> <i>Intermediate:</i> Maharaja Agarsen Public School, Moradabad (ISC Board) <br /> <i>Percentage: 93%</i></h3>
                </VerticalTimelineElement> 
            </VerticalTimeline>

        </div>
    );
}

export default Experience;
