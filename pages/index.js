import Image from 'next/image'
import { Inter } from 'next/font/google'
import HeroBanner from '@/components/HeroBanner'
import Wrapper from '@/components/Wrapper'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <HeroBanner/>
      <Wrapper >
        <div className='text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]'>
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
              Cushioning for Your Miles
          </div>
          <div className="text-md md:text-xl">
              A lightweight Nike ZoomX midsole is combined with
              increased stack heights to help provide cushioning
              during extended stretches of running.
          </div>
        </div>
      </Wrapper>
    </main>
  )
}
