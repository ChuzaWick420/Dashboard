import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import Layout from './pages/layout/layout';
import Experience from './pages/experience/experience';
import Overview from './pages/overview/overview';
import Projects from './pages/projects/projects';
import Case_Studies from './pages/case_studies/case_studies';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Overview />} />
          <Route path="overview" element={<Overview />} />
          <Route path="experience" element={<Experience />} />
          <Route path="projects" element={<Projects />} />
          <Route path="case_studies" element={<Case_Studies />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
