import React, { useState, useEffect } from 'react'
import TextScramble, { ScrambleTexts } from '@twistezo/react-text-scramble'


const scrambleTexts: ScrambleTexts = [
  'AH LAB',
]

export default function Scramble() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null
  }

  return (
    <>
      <div className='example'>
        <TextScramble
          texts={scrambleTexts}
          letterSpeed={6}
          nextLetterSpeed={150}
        />
      </div>
    </>
  )
}