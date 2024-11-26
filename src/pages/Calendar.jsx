// 일정 관리 화면
import FullCalendar from '../components/calendar/FullCalendar';
import '../styles/pages.css';

const Calendar = () => {
  return (
    <div className="page calendar-page">
      <div className="page-header">
        <h1 className="page-title">
          <span className="text-gradient">FullCalendar</span>
        </h1>
      </div>
      <div className="calendar-container">
        <FullCalendar />
      </div>
    </div>
  );
};

export default Calendar;