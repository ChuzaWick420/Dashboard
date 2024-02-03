import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import Layout from './pages/layout/layout';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route path="overview" index element={} />
          <Route path="experience" element={} />
          <Route path="projects" element={} />
          <Route path="case_studies" element={} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
