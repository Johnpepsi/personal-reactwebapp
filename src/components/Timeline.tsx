import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2025 - Current"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">System Support Specialist</h3>
            <h4 className="vertical-timeline-element-subtitle">Regina, SK</h4>
            <p>
              Hardware Deployment • Server Installation • Preventive Maintenance • Network Cable Management • Airlines Application support • Software Troubleshooting • Teams Migration • MS Exchange • IT helpdesk
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 - 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">IT Administrator</h3>
            <h4 className="vertical-timeline-element-subtitle">Regina, SK</h4>
            <p>
              Active Directory • Group Policy (GPO) • User provisioning/access control • TCP/IP troubleshooting • Role-based access control (RBAC) • DHCP and IP management • John Deere Software Support • Server Administration • SharePoint Administration • Microsoft Entra • Virtualization • MS Teams Administration • Storage • Microsoft Azure
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024 - Current"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Freelance Web Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Regina, SK</h4>
            <p>
              Frontend Development • Backend Development • Static WebApp • Modern Frameworks • Hosting 
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024 - Current"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Infrastructure Homelab</h3>
            <h4 className="vertical-timeline-element-subtitle">Regina, SK</h4>
            <p>
              Proxmox VE • Apache • Raspberry Pi 4 • LAMP • Azure AD • Cisco Switch/Router Configuration • pFsense • Virtualization • Scripting • DNS • DHCP • File Servers • Active Directory • VMware • Hyper-V • Docker
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;