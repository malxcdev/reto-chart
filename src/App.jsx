import Chart from './components/Chart'
import Resume from './components/Resume'
function App() {
  return (
    <>
    <section className='flex flex-col md:justify-center md:items-center gap-4 md:w-[500px] md:h-screen md:mx-auto'>
     <Resume />
     <Chart />
    </section>
    </>
  )
}

export default App
