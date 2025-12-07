import React from 'react'

const NewsletterBox = () => {

    const onSubmitHandler = (event) => {
        event.preventDefault();
    }

  return (
    <div className = 'text-center'>
      <p className = 'text-2xl font-mredium text-gray-800'>Subscribe now & get 20% off</p>
      <p className = 'text-ggray-400 mt-3'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, impedit dicta. Itaque corporis possimus accusantium, facilis adipisci, quo repellendus quae recusandae aliquam quaerat eum esse voluptatum doloribus alias, non veritatis.
      </p>
      <form className = 'w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input className = 'w-full sm:flex-1 outline-none' type="email" placeholder = 'Enter your Email' required/>
        <button type = 'submit' className = 'bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
      </form>
    </div>
  )
}

export default NewsletterBox
