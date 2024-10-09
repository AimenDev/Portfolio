import Header from './sections/Header.jsx'
import Hero from './sections/Hero'
import Main from './sections/Main'
import Footer from './sections/Footer'
import Skills from './sections/Skills.jsx'

const App = () => {
  return (
    <main className="bg-zinc-800 space-y-8 shadow-md w-full sm:w-[90%] 2xl:w-[65%] mx-auto py-0 px-7">
        <Header />
        <Hero />
        <Main />
        <Skills />
        <Footer />
    </main>
  )
}

export default App