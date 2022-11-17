import { BigStat } from '../components/BigStat/bigStat'
import { Header } from '../components/Header/header'
import { ShittyPage } from '../components/Header/shittyPage'
import { IntroSection } from '../components/IntroSection/introSection'
import { BusSection } from '../components/BusSection/busSection'

export default function Home() {
  return (
    <div className='custom-home-bg flex flex-col'>
      <Header />
      <IntroSection/>
      <BusSection/>
      <BigStat/>
      <ShittyPage/>
    </div>
  )
}
