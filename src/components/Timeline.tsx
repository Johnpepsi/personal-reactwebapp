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
        <h1>Professional Experience</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2025 - Current"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">System Support Tech L2</h3>
            <h4 className="vertical-timeline-element-subtitle">Regina Airport, Saskatchewan</h4>
            <p>
              Azure AD/Entra ID • Patching • Preventive Maintenance • Deploy workstations, deskphone, and printers • Network Cable Management • Airlines Application support • Server Installation • Software Troubleshooting • Support Microsoft 365 (Exchange Online, Teams, SharePoint, OneDrive)
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 - 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">IT Administrator</h3>
            <h4 className="vertical-timeline-element-subtitle">Regina, Saskatchewan</h4>
            <p>
              Active Directory • Manage Group Policy (GPO) • TCP/IP troubleshooting • Role-based access control (RBAC) • DHCP / IP management • John Deere Software Support • Server Administration • Kronos / Sage50 and Citrix troubleshooting • Microsoft Entra • Virtualization • Incident Management • Mobile Device Management (MDM) • Microsoft Azure
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024 - Current"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Freelance Web Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Regina, Saskatchewan</h4>
            <p>
              Frontend Development • HTTPS enforcement • Backend Development • React • API • Hosting Authentication • (JWT, sessions) • CI/CD basics • Email integration (contact forms) • CRUD operations • Domain & DNS management • Cloudflare • SEO optimization • Tailwind / Bootstrap • MySQL • NGINX • Reverse proxy 
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>

{/* Hobbies Page */}
  <div id="history">
      <div className="items-container">
        <h1>Infrastracture Homelab</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Current Project"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
            >
            <h3 className="vertical-timeline-element-title">DevOps / Self-Hosting</h3>
            <p>
              Frontend Development • Backend API Development • RESTful API Design • Database Integration • Authentication Systems • Client-Server Architecture • Application Debugging • Hosted web applications • Linux Web Servers • Apache Configuration • GitLab • Deployed code to servers • MySQL Administration • WinSCP • Reverse Proxy Configuration • Git Version Control • CI/CD • Docker 
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Recent Project"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">System Administration</h3>
            <p>
              Proxmox Virtualization • OPNsense Firewall • Windows Server Administration • Active Directory Testing • Group Policy Management • Server Deployment • Linux Server Administration • Infrastructure Troubleshooting • System Monitoring • Identity & Access Management • Cisco Gear Install
            </p>
            </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Recent Project"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Networking Environment</h3>
            <p>
              CCNA Lab Simulation • Network Connectivity Troubleshooting • VLAN Segmentation • Inter-VLAN Routing • Access Point Set-up • LAN/WAN Configuration • Switch & Router Diagnostics • DHCP & IP Management • TCP/IP • Infrastructure Monitoring • VPN
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
 </div>
  );
}

export default Timeline;