// WebRTC page
import WebRTCComponents from '../components/webrtc/WebRTCComponents.tsx';
import '../styles/pages.css';

const WebRTC = () => {
    return (
        <div className="page webrtc-page">
            <div className="page-header">
                <h1 className="page-title">
                    <span className="text-gradient">Meeting</span>
                </h1>
            </div>
            <div className="webrtc-container">
                <WebRTCComponents />
            </div>
        </div>
    );
};

export default WebRTC;