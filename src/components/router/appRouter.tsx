import { JSX, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from '../add/Error.tsx';
import Layout from '../layouts/Layout';
import Loader from '../add/Loader.tsx';
import NotFound from '../add/notfound.tsx';
import Helmet from "react-helmet"
const Home = lazy(() => import('../pages/Home'));
const Projects = lazy(() => import('../pages/Projects'));
const Resume = lazy(() => import('../pages/Resume'));
const Contact = lazy(() => import('../contact/contact.tsx'));
const Gadgets = lazy(() => import('../pages/Gadgets'));
const Blogs = lazy(() => import('../pages/Blogs'));
const OpenSource = lazy(() => import('../pages/openSource.tsx'));
const ThreeD = lazy(() => import('../pages/3d'));
const CommandPage = lazy(() => import('../pages/Command'));
const About = lazy(() => import('../pages/About'));
const AllSkillsPage=lazy(()=>import('../pages/skills.tsx'))

// this is the al routes which i've used on my entire project.
function RouterWrapper({ component: Component, title }: { component: React.LazyExoticComponent<() => JSX.Element>, title: string }) {
  return (
    <Error>
      <Suspense fallback={<Loader />}>
        <Layout>
          <Helmet>
            <title>{title}</title>
          </Helmet>
          <Component />
        </Layout>
      </Suspense>
    </Error>
  );
}

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RouterWrapper component={Home} title="Home" />} />
        <Route path="/projects" element={<RouterWrapper component={Projects} title="Projects" />} />
        <Route path="/resume" element={<RouterWrapper component={Resume} title="Resume" />} />
        <Route path="/contact" element={<RouterWrapper component={Contact} title="Contact" />} />
        <Route path="/skills" element={<RouterWrapper component={AllSkillsPage} title="All Skills Page" />} />
        <Route path="/gadgets" element={<RouterWrapper component={Gadgets} title="Gadgets" />} />
        <Route path="/blogs" element={<RouterWrapper component={Blogs} title="Blogs" />} />
        <Route path="/open-source" element={<RouterWrapper component={OpenSource} title="Open Source" />} />
        <Route path="/command" element={<RouterWrapper component={CommandPage} title="Command Page" />} />
        <Route path="/3d" element={<RouterWrapper component={ThreeD} title="3D" />} />
        <Route path="/about" element={<RouterWrapper component={About} title="About Page" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
