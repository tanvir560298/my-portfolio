import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { ProjectCaseStudy } from './pages/ProjectCaseStudy'
import { ResourceDetail } from './pages/ResourceDetail'
import { Resources } from './pages/Resources'
import { Hub } from './pages/Hub'
import { personal, seo } from './data/content'

function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    document.title = seo.title
    if (hash) {
      requestAnimationFrame(() => document.querySelector(hash)?.scrollIntoView())
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])
  return null
}

export default function App() {
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: personal.name,
      jobTitle: personal.title,
      email: personal.email,
      address: personal.location,
    })
    document.head.appendChild(script)
    return () => script.remove()
  }, [])

  return (
    <>
      <ScrollManager />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/projects/:slug" element={<ProjectCaseStudy />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/:slug" element={<ResourceDetail />} />
          <Route path="/hub" element={<Hub />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}
