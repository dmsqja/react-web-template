import React, { useEffect } from 'react';
import '../../styles/kakaomap.css';

const KakaoMapForm = ({ height = '600px' }) => {
    useEffect(() => {
        const loadKakaoMap = () => {
            window.kakao.maps.load(() => {
                const container = document.getElementById('map');
                const options = {
                    center: new window.kakao.maps.LatLng(36.799032, 127.074978),
                    level: 3,
                };

                const map = new window.kakao.maps.Map(container, options);
                const markerPosition = new window.kakao.maps.LatLng(36.799032, 127.074978);
                const marker = new window.kakao.maps.Marker({
                    position: markerPosition,
                    clickable: true,
                });
                marker.setMap(map);

                const iwContent = `
                    <div class="info-window">
                        <div class="info-window-title">선문대학교 아산캠퍼스</div>
                        <img
                            src="/assets/sm.jpg"
                            alt="선문대학교"
                            class="info-window-image"
                        />
                        <div class="info-window-links">
                            <a href="https://map.kakao.com/link/map/선문대학교,36.799032,127.074978"
                                class="info-window-link"
                                target="_blank">
                                큰지도
                            </a>
                            <a href="https://lily.sunmoon.ac.kr/MainDefault3.aspx"
                                class="info-window-link"
                                target="_blank">
                                홈페이지
                            </a>
                        </div>
                    </div>
                `;

                const infowindow = new window.kakao.maps.InfoWindow({
                    content: iwContent,
                    removeable: true,
                });

                window.kakao.maps.event.addListener(marker, 'click', function() {
                    infowindow.open(map,marker);
                });

                window.kakao.maps.event.addListener(map, 'click', function() {
                    infowindow.close();
                })
            });
        };

        const script = document.createElement('script');
        script.src = `http://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_MAP_API_KEY}&autoload=false`;
        script.async = true;
        
        script.onload = loadKakaoMap;
        document.head.appendChild(script);

        return () => {
            const script = document.querySelector('script[src*="dapi.kakao.com"]');
            if (script) {
                script.remove();
            }
        };
    }, []);

    return <div id="map"></div>;
};

export default KakaoMapForm;