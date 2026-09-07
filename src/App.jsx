import Navbar from "./components/Navbar"
import { useState, useEffect } from "react"
import Loader from "./components/Loader"
import Hero from "./components/Hero"
import Experience from "./components/Experience"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Education from "./components/Education"
import Certifications from "./components/Certifications"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"
import PrivacyPolicy from "./components/PrivacyPolicy"
import TermsOfService from "./components/TermsOfService"

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [viewState, setViewState] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-dark min-h-screen font-sans selection:bg-primary selection:text-textPrimary">
      {isLoading && <Loader onLoadingComplete={() => setIsLoading(false)} />}
      <Navbar viewState={viewState} onViewChange={setViewState} />
      <main>
        {viewState === 'home' ? (
          <>
            <Hero />
            <Experience />
            <Skills />
            <Projects viewState={viewState} onViewChange={setViewState} />
            <Education />
            <Certifications viewState={viewState} onViewChange={setViewState} />
            <Contact />
          </>
        ) : (
          <div className="pt-24 min-h-screen">
            {viewState === 'all_projects' && <Projects viewState={viewState} onViewChange={setViewState} />}
            {viewState === 'all_certificates' && <Certifications viewState={viewState} onViewChange={setViewState} />}
            {viewState === 'privacy_policy' && <PrivacyPolicy onViewChange={setViewState} />}
            {viewState === 'terms_of_service' && <TermsOfService onViewChange={setViewState} />}
          </div>
        )}
      </main>
      <Footer viewState={viewState} onViewChange={setViewState} />
      <ScrollToTop />
    </div>
  )
}

export default App
