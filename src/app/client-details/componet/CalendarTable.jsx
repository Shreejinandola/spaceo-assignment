
'use client';
import React from 'react';
import FullCalendar from '@fullcalendar/react';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import moment from 'moment';
// import '@fullcalendar/core/index.css';
// import '@fullcalendar/resource-timeline/index.css';
const list = [
    { id: 'a', title: 'Member 1', color: '#C0A0FF' },
    { id: 'b', title: 'Member 2', color: '#9AE095' },
    { id: 'c', title: 'Member 3', color: '#A0C6FF' },
    { id: 'd', title: 'Member 4', color: '#FFE1A0' },
    { id: 'e', title: 'Member 5', color: '#74EBE1' },
    { id: 'f', title: 'Member 6', color: '#A0FFB5' },
    { id: 'g', title: 'Member 7', color: '#FFA0F9' },
    { id: 'h', title: 'Member 8', color: '#9EE1FF' },
    { id: 'i', title: 'Member 9', color: '#FFA0A0' },
    { id: 'j', title: 'Member 10', color: '#F5A623' },
    { id: 'k', title: 'Member 11', color: '#FFFFA0' },

]
const CalendarTable = () => {
    return (
        <div className="overflow-x-auto" >
            <FullCalendar
                plugins={[resourceTimelinePlugin]}
                initialView="resourceTimelineDay"
                schedulerLicenseKey="GPL-My-Project-Is-Open-Source"
                headerToolbar={false}
                slotLabelInterval="01:00"
                slotMinTime="06:00:00"
                slotMaxTime="14:00:00"
                height="auto"
                resources={list}
                events={[
                    {
                        id: 'e1',
                        resourceId: 'b',
                        title: 'Client Name',
                        uiDate: "10:20 am - 10:45 am",
                        bgColor: "#EEF6FF",
                        start: moment().hour(6).minute(0).format(),
                        end: moment().hour(7).minute(30).format(),
                    },
                    {
                        id: 'e2',
                        resourceId: 'b',
                        title: 'Client Name',
                        bgColor: "#EEF6FF",
                        uiDate: "8:00 am - 8:30 am",
                        start: moment().hour(8).minute(30).format(),
                        end: moment().hour(10).minute(0).format(),
                    },
                    {
                        id: 'e3',
                        resourceId: 'e',
                        title: 'Client Name',
                        bgColor: "#FBF5FF",
                        uiDate: "9:30 am - 10:00 am",
                        start: moment().hour(7).minute(30).format(),
                        end: moment().hour(9).minute(0).format(),
                    },
                    {
                        id: 'e4',
                        resourceId: 'h',
                        title: 'Client Name',
                        bgColor: "#FBF5FF",
                        uiDate: "11:30 am - 12:00 pm",
                        start: moment().hour(9).minute(30).format(),
                        end: moment().hour(11).minute(0).format(),
                    },
                    {
                        id: 'e5',
                        resourceId: 'h',
                        title: 'Client Name',
                        uiDate: "1:15 pm - 2:00 am",
                        start: moment().hour(11).minute(30).format(),
                        bgColor: "#FEF7EC",
                        end: moment().hour(13).minute(0).format(),
                    },
                    {
                        id: 'e6',
                        resourceId: 'k',
                        title: 'Client Name',
                        uiDate: "12:30 pm - 1:00 pm",
                        bgColor: "#EEF6FF",
                        start: moment().hour(7).minute(0).format(),
                        end: moment().hour(9).minute(0).format(),
                    },
                ]}
                eventContent={(arg) => {
                    return {
                        html: `
                        <div style="
                          background-color:${arg.event.extendedProps.bgColor};
                          color: #000;
                          
                        ">

                           <div style="font-size: 9px;">${arg.event.title}</div>
                          <div style="font-size: 9px;">${arg.event.extendedProps.uiDate}</div>
                        </div>
                      `
                    };
                }}
            />

        </div >
    );
};

export default CalendarTable;
