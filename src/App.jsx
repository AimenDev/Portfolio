import Header from './sections/Header.jsx'
import Hero from './sections/Hero'
import Main from './sections/Main'
import Footer from './sections/Footer'

const App = () => {
  return (
    <main className="bg-zinc-800 space-y-8 shadow-md w-full md:w-[65%] mx-auto py-0 px-7">
        <Header />
        <Hero />
        <Main />
        <Footer />
    </main>
  )
}

export default App