import React, { useEffect, useRef, useState } from 'react';
import { useQuery } from '@apollo/client';
import dayGridPlugin from '@fullcalendar/daygrid';
import FullCalendar from '@fullcalendar/react';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import timeGridPlugin from '@fullcalendar/timegrid';
import ptBrLocale from '@fullcalendar/core/locales/pt-br'; 
import { GET_ALL_EMPLOYEES } from '../../graphql/queries';
import { Popup } from '../Popup';
import { IScheduling } from '../../interfaces/IScheduling';
import { IEmployee } from '../../interfaces/IEmployee';


const Calendar: React.FC = () => {
  const { data: { getAllEmployee: employees = [] } = {}, refetch } = useQuery(GET_ALL_EMPLOYEES);
  const calendarRef = useRef<FullCalendar>(null);
  const [selectedEvent, setSelectedEvent] = useState<IScheduling | null>(null);

  useEffect(() => {
    refetch();
    const calendarApi = calendarRef?.current?.getApi();

    if (employees.length > 0 && calendarApi) {
      const events: Event[] = employees
        .flatMap((employee: IEmployee) =>
        employee.scheduling?.map((appointment: IScheduling) => {
            const { id, title: titleEvent, description, date, duration, clientName, clientPhone, clientEmail } = appointment;

            if (titleEvent && description && date) {
              return {
                id,
                employeeName: employee.name,
                title: employee.name,
                titleEvent: titleEvent,
                description,
                date,
                duration,
                clientName,
                clientPhone,
                clientEmail,
              };
            }

            return null;
          }) || []
        )
        .filter(Boolean);
        if (events.length > 0) {
          const eventClickHandler = (info: any) => {
            const extendedProps = info.event.extendedProps;
            
            const {
              employeeName,
              titleEvent,
              description,
              clientName,
              clientPhone,
              clientEmail,
            } = extendedProps;

            const date = info.event.start ? info.event.start.toISOString() : '';

            setSelectedEvent({
              id: info.event.id,
              employeeName,
              title: info.event.title,
              titleEvent,
              description,
              date,
              duration: info.event.duration || '',
              clientName,
              clientPhone,
              clientEmail,
            });
          };

          calendarApi.addEventSource(events);
          calendarApi.on('eventClick', eventClickHandler);
        }
    }

    return () => {
      if (calendarApi) {
        calendarApi.removeAllEvents();
      }
    };
  }, [employees, calendarRef]);

  const closePopup = () => {
    setSelectedEvent(null);
  };

  return (
    <>
      <h1>Agenda</h1>
      <FullCalendar
        headerToolbar={{ left: 'title', center: '', right: 'prev,next' }}
        height={500}
        ref={calendarRef}
        plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]}
        locale={ptBrLocale}  // Configura o idioma para português
      />
      {selectedEvent && <Popup event={selectedEvent} onClose={closePopup} />}
    </>
  );
};

export default Calendar;
