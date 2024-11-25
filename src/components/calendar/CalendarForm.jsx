import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import '../../styles/calendar.css';

const CalendarForm = () => {
    // 상태 관리
    const [events, setEvents] = useState([
        {
            title: '알바',
            start: '2024-11-23',
            backgroundColor: 'var(--primary)',
            borderColor: 'var(--primary)'
        },
        {
            title: '몰입형',
            start: '2024-11-25',
            end: '2024-11-29',
            backgroundColor: 'var(--secondary)',
            borderColor: 'var(--secondary)'
        }
    ]);
    
    const [newEvent, setNewEvent] = useState({
        content_title: '',
        description: '',
        location: '',
        start: '',
        end: ''
    });
    
    const [showModal, setShowModal] = useState(false);

    // 이벤트 저장 핸들러
    const handleSave = () => {
        if (!newEvent.content_title || !newEvent.start || !newEvent.end) {
            alert('제목과 날짜를 모두 입력해주세요.');
            return;
        }

        const event = {
            title: `${newEvent.content_title}${newEvent.description ? ` - ${newEvent.description}` : ''}`,
            start: newEvent.start,
            end: newEvent.end,
            location: newEvent.location,
            backgroundColor: 'var(--primary)',
            borderColor: 'var(--primary)'
        };

        setEvents(prev => [...prev, event]);
        setNewEvent({
            content_title: '',
            description: '',
            location: '',
            start: '',
            end: ''
        });
        setShowModal(false);
    };

    return (
        <div className="calendar-container container my-4">
            <div className="calendar-header">
                <h2>일정 관리</h2>
                <button
                    className="btn-add"
                    onClick={() => setShowModal(true)}
                >
                    일정 추가
                </button>
            </div>

            <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth'
                }}
                height="auto"
                locale="ko"
                firstDay={0}
                events={events}
                eventDisplay="block"
                dayMaxEvents={true}
            />

            {/* 모달 컴포넌트 */}
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2>새 일정 추가</h2>
                            <button
                                className="btn-close"
                                onClick={() => setShowModal(false)}
                            >
                                x
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <label>제목</label>
                                <input
                                    type="text"
                                    placeholder="일정 제목을 입력하세요."
                                    value={newEvent.content_title}
                                    onChange={(e) => setNewEvent(prev => ({
                                        ...prev,
                                        content_title: e.target.value
                                    }))}
                                />
                            </div>
                            <div className="form-group">
                                <label>설명</label>
                                <input
                                    type="text"
                                    placeholder="일정 설명을 입력하세요."
                                    value={newEvent.description}
                                    onChange={(e) => setNewEvent(prev => ({
                                        ...prev,
                                        description: e.target.value
                                    }))}
                                />
                            </div>
                            <div className="form-group">
                                <label>장소</label>
                                <input
                                    type="text"
                                    placeholder="장소를 입력하세요."
                                    value={newEvent.location}
                                    onChange={(e) => setNewEvent(prev => ({
                                        ...prev,
                                        location: e.target.value
                                    }))}
                                />
                            </div>
                            <div className="form-group">
                                <label>시작 날짜</label>
                                <input
                                    type="date"
                                    value={newEvent.start}
                                    onChange={(e) => setNewEvent(prev => ({
                                        ...prev,
                                        start: e.target.value
                                    }))}
                                />
                            </div>
                            <div className="form-group">
                                <label>종료 날짜</label>
                                <input
                                    type="date"
                                    value={newEvent.end}
                                    onChange={(e) => setNewEvent(prev => ({
                                        ...prev,
                                        end: e.target.value
                                    }))}
                                />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                className="btn-save"
                                onClick={handleSave}
                            >
                                저장
                            </button>
                            <button
                                className="btn-cancel"
                                onClick={() => setShowModal(false)}
                            >
                                취소
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CalendarForm;