import { lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ErrorBoundary from '../components/common/ErrorBoundary'
import Layout from '../layouts/Layout.tsx'

const Home = lazy(() => import('../pages/Home'))
const Projects = lazy(() => import('../pages/Projects'))
const Resume = lazy(() => import('../pages/Resume'))
const Contact = lazy(() => import('../pages/Contact'))
const Gadgets = lazy(() => import('../pages/Gadgets'))
const Blogs = lazy(() => import('../pages/Blogs'))
const OpenSource = lazy(() => import('../pages/openSource'))
const ThreeD = lazy(() => import('../pages/3d.tsx'))

function RouterWrapper({ component: Component }) {
  return (
    <ErrorBoundary>
      <Layout>
        <Component />
      </Layout>
    </ErrorBoundary>
  )
}

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RouterWrapper component={Home} />} />
        <Route path="/projects" element={<RouterWrapper component={Projects} />} />
        <Route path="/resume" element={<RouterWrapper component={Resume} />} />
        <Route path="/contact" element={<RouterWrapper component={Contact} />} />
        <Route path="/gadgets" element={<RouterWrapper component={Gadgets} />} />
        <Route path="/blogs" element={<RouterWrapper component={Blogs} />} />
        <Route path="/open-source" element={<RouterWrapper component={OpenSource} />} />
        <Route path="/3d" element={<ThreeD />} />
      </Routes>
    </BrowserRouter>
  )
}