import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={}>
          <Route path="overview" index element={} />
          <Route path="experience" element={} />
          <Route path="projects" element={} />
          <Route path="case_studies" element={} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
