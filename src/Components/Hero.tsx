
import dynamic from 'next/dynamic'

const ThreeDimension = dynamic(() => import('@/Components/ThreeDimension'), {
  ssr: false,
})


export default function Hero() {


  return (

    <ThreeDimension />
  )

}