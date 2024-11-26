// 일정 관리 화면
import BigCalendar from '../components/calendar/BigCalendar';
import '../styles/pages.css';

const Bigcalendar = () => {
  return (
    <div className="page calendar-page">
      <div className="page-header">
        <h1 className="page-title">
          <span className="text-gradient">BigCalendar</span>
        </h1>
      </div>
      <div className="calendar-container">
        <BigCalendar />
      </div>
    </div>
  );
};

export default Bigcalendar;