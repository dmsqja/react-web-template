// 일정 관리 화면
import CalendarForm_2 from '../components/calendar/CalendarForm_2';
import '../styles/pages.css';

const Calendar_2 = () => {
  return (
    <div className="page calendar-page">
      <div className="page-header">
        <h1 className="page-title">
          <span className="text-gradient">Calendar(Google)</span>
        </h1>
      </div>
      <div className="calendar-container">
        <CalendarForm_2 />
      </div>
    </div>
  );
};

export default Calendar_2;