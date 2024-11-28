import React, { useState, useEffect } from 'react'
import TextScramble, { ScrambleTexts } from '@twistezo/react-text-scramble'

interface ScrambleProps {
  text: string;

}


export default function Scramble({ text }: ScrambleProps) {
  const [isClient, setIsClient] = useState(false)
  const scrambleTexts: ScrambleTexts = [text];
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