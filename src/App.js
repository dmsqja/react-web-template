import { Suspense } from 'react';
import AppRoutes from './Routes';
import './styles/styles.css';

function App() {
  return (
      <Suspense fallback={
        <div className="loading">
          <div className="loading-spinner"></div>
        </div>
      }>
        <AppRoutes />
      </Suspense>
  );
}

export default App;