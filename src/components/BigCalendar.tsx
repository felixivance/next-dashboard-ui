"use client"
import React, { useState } from 'react'
import { Calendar, momentLocalizer, View, Views } from 'react-big-calendar'
import moment from 'moment'
import { calendarEvents } from '@/lib/data'

const localizer = momentLocalizer(moment)

type Props = {}

const BigCalendar = (props: Props) => {
    const [ view, setView] = useState<View>(Views.WORK_WEEK);

    const handleOnChangeView = (selectedView:View) => {
        setView(selectedView);
    }
  return (
    <div className='px-4'>
        <Calendar
        localizer={localizer}
        events={calendarEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "98%" }}
        views={["work_week","day"]}
        view={view}
        onView={handleOnChangeView}
        min={new Date(2025,1,0,8,0,0)}
        max={new Date(2025,1,0,17,0,0)}

        />
    </div>
  )
}

export default BigCalendar