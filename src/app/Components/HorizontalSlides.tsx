import React from 'react'
import Image from 'next/image';
import '../Stylesheets/hzslides.css'



const rowOne = [
  "https://github.com/user-attachments/assets/dd8206ad-2003-462c-a2da-2f9db4fe76ce",
  "https://github.com/user-attachments/assets/926309f1-d367-4827-86b1-230532795cd1",
  "https://github.com/user-attachments/assets/7e1eebcb-41d0-4fb7-9c7d-a59a23d47772",
  "https://github.com/user-attachments/assets/8c5488c9-b6ae-489c-80ce-d45b959750e3",
]

const rowTwo = [
  "https://github.com/user-attachments/assets/6df93ac2-d383-4daf-98ed-df7215ded671",
  "https://github.com/user-attachments/assets/a3e83e10-b1f7-4c1a-be66-6f3be2aa3e48",
  "https://github.com/user-attachments/assets/90d45e37-ff82-49a3-a2dd-7ad8c4aea0eb",
  "https://github.com/user-attachments/assets/e921394f-b228-4dc7-a853-db7e73460474"
];

export default function HorizontalSlides() {
  return (
    <div className="container-gallery">
      <div className="row row-1" data-scroll data-scroll-speed="-1" data-scroll-direction="horizontal">
        {rowOne.map((src, index) => (
          <div key={index} className="flex-col">
            <div className="horizontal-single-item">
              <div className="overlay">
                <Image src={src} alt={`Item ${index + 1}`} layout="fill" objectFit="cover" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="row row-2" data-scroll data-scroll-speed="1" data-scroll-direction="horizontal">
        {rowTwo.map((src, index) => (
          <div key={index} className="flex-col">
            <div className="horizontal-single-item">
              <div className="overlay">
                <Image src={src} alt={`Item ${index + 5}`} layout="fill" objectFit="cover" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}