import { FaArrowRight } from 'react-icons/fa'

export const About = () => {
  return (
    <div className='py-10 px-3 font-urbanist md:px-8 lg:px-30'>
      <h2 className='text-3xl md:text-5xl lg:text-6xl font-semibold text-center'>Why must choose Us</h2>
      <p className='text-center mx-auto text-sm py-6 px-2 md:w-[60%]'>We have been around for over 10 years. Accompany all our customers all over the world. Thousands of our customers always recommend us because of the service we provide. We are always re-elected and now you will choose us as your travel agent!</p>
      <div className='max-sm:space-y-6 py-6 md:flex items-center px-3 lg:px-15  md:gap-5 w-fit'>
        <div className='py-6 border-t-6 border-t-[#25A59E] space-y-4 px-4 lg:px-8 lg:py-7 dark:bg-white dark:text-black  shadow-2xl w-fit'>
          <p className='text-[28px]  md:text-[29px] tracking-wide leading-tight lg:leading-9'>Best Giude, Best Experience.</p>
          <p className='pb-5'>Your trip will be very memorable with the best guide.</p>
          <div className='flex items-center text-[#25A59E] justify-end space-x-3'>
          <button>More details</button>
          <FaArrowRight/>
          </div>
        </div>
        <div className='py-6 border-t-6 border-t-[#25A59E] space-y-4 px-4 lg:px-8 bg-[#25A59E] shadow-2xl'>
          <p className='text-[28px]  md:text-3xl lg:text-4xl tracking-wide leading-tight lg:leading-13'>Always have Special Tickets.</p>
          <p className='pb-5'>We always offer special tickets and we give them to all customers</p>
          <div className='flex items-center justify-end space-x-3'>
          <button>More details</button>
          <FaArrowRight/>
          </div>
        </div>
        <div className='py-6 border-t-6 border-t-[#25A59E] space-y-4 px-4 lg:px-8 dark:bg-white dark:text-black shadow-2xl'>
          <p className='text-[28px]  md:text-3xl lg:text-4xl tracking-wide leading-tight lg:leading-13'>Always Ready Support 24/7.</p>
          <p className='pb-5'>We always make time to ask questions anytime and anywhere.</p>
          <div className='flex items-center justify-end text-[#25A59E] space-x-3'>
          <button>More details</button>
          <FaArrowRight/>
          </div>
        </div>
      </div>
    </div>
  )
}
