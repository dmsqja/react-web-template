# 웹페이지 템플릿

이 프로젝트는 React 기반의 웹페이지 템플릿입니다. 현대적이고 반응형 디자인을 제공하여 웹 개발을 빠르게 시작할 수 있습니다.

## 특징

- 반응형 디자인
- 현대적인 UI 컴포넌트
- 커스터마이징 용이
- React로 제작

## 설치

프로젝트에 필요한 의존성:

1. 라우팅
   ```
   npm install react-router-dom
   ```
2. 캘린더 기능
   ```
   npm install @fullcalendar/react react-big-calendar
   ```
3. UI 컴포넌트

    index.hteml 파일의 <head> 태그 안에 다음 코드를 추가:
    ```
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    ```

## 사용법

개발 서버를 시작하려면 다음 명령어를 실행하세요:
```bash
npm start
```
이 명령어는 개발 모드에서 앱을 실행합니다. 브라우저에서 [http://localhost:3000](http://localhost:3000) 을 열어 확인할 수 있습니다.

## 빌드

프로덕션 빌드를 생성하려면 다음 명령어를 실행하세요:
```bash
npm run build
```
이 명령어는 `build` 폴더에 최적화된 빌드를 생성합니다.