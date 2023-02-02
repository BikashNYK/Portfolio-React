import React from 'react'
import { IoCodeWorking } from 'react-icons/io5';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Experience } from './data';
const Timeline = () => {
  return (
    <>
          <section style={{ display: 'flex', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', margin:'auto'}}>
              <VerticalTimeline> 
                  {Experience && Experience.map((e,i)=>{
                     return <VerticalTimelineElement
                          className="vertical-timeline-element--work"
                          contentStyle={{ background: 'rgb(21 , 24 , 31)', color: '#888' }}
                          contentArrowStyle={{ borderRight: '7px solid  rgb(21 , 24 , 31)' }}
                          date={e.date}
                          iconStyle={{ background: 'rgb(21 , 24 , 31)', color: '#888' }}
                          icon={<IoCodeWorking />} id={i}
                      >
                          <h3 className="vertical-timeline-element-title">{e.title}</h3>
                          <h4 className="vertical-timeline-element-subtitle">{e.location}</h4>
                          <p>
                              {e.board}
                          </p>
                      </VerticalTimelineElement>
                  })}
              </VerticalTimeline>
      </section>
    </>
  )
}

export default Timeline
