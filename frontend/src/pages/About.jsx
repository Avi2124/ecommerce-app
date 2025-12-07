import React from 'react'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sit vitae sed eum in quasi autem harum voluptatum ab consectetur tempore exercitationem rerum labore unde hic itaque, nostrum, tenetur vero.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, sequi ducimus dolorem nostrum harum quam, libero, laudantium error assumenda repellat earum ad obcaecati. Ratione voluptates itaque qui dignissimos sit quo!</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus sint facilis eligendi temporibus ipsam debitis, error iusto harum tenetur atque, suscipit enim sequi possimus accusamus repellendus repudiandae nam, in obcaecati!</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US?'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit deleniti blanditiis vero, architecto voluptates adipisci ducimus quos maiores quae at culpa ea natus perspiciatis officiis alias ullam sint repellat enim!</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, sit doloribus! Vel ipsa totam repellat. Mollitia commodi nemo at dignissimos culpa tempore veniam repellendus vitae officiis omnis? Numquam, nesciunt vitae!</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda consequuntur reprehenderit quod maiores laborum reiciendis obcaecati magnam nulla placeat, laudantium ullam odio quos alias eligendi atque ex accusamus molestiae nisi!</p>
        </div>
      </div>

      <NewsletterBox />

    </div>
  )
}

export default About