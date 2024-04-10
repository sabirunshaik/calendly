import React from 'react'
import img from "../assets/reward.png"
const Nav = () => {
  return (
    <>
    <nav className='flex m-4 justify-between mx-32 items-center '>
     <div className='flex items-center justify-start gap-3 '>
        <img className='h-9' src="https://th.bing.com/th?id=OIP.DJfPkR40bFj3vLBZF4dGVQHaCR&w=350&h=107&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="" />
        <h1 className='font-bold text-lg border-l-2 border-slate-400 px-2'>Help Center</h1>
     </div>
     <div className='flex  gap-4 items-center justify-center'>
        
            <ul className='md:flex hidden gap-6 px-3 border-r-2'>
                <li>Developer</li>
                <li>Report abuse</li>
                <li>Contact us</li>
            </ul>
       
        <div className='flex gap-3'>
            <button>Log in</button>
            <button>Sign up</button>
        </div>
     </div>
    </nav>
    <section className='flex items-center justify-center flex-col md: w-screen gap-6 my-24'>
       <h1 className='text-4xl font-bold'>What we can help you with ?</h1>
       
<form class="max-w-md mx-auto w-full">   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-white rounded-full bg-gray-500 dark:bg-white dark:border-slate-400 dark:placeholder-gray-400 dark:text-black" placeholder="Search our article" required />
       
    </div>
</form>
    <div className='flex flex-col md:flex-row gap-6'>
      <div className=' flex flex-col gap-6'>
        <div className='flex gap-2'>
           <img className='h-6 flex flex-row' src={img} alt="" />
            <h1 className='text-blue-600'>Setting up your first event</h1>  
        </div>
        <div className='flex gap-2'>
           <img className='h-6 flex flex-row' src={img} alt="" />
            <h1 className='text-blue-600'>Schedule with video conferencing</h1> </div>
        <div className='flex gap-2'>
           <img className='h-6 flex flex-row' src={img} alt="" />
            <h1 className='text-blue-600'>Automate tasks with Workflows</h1>  
        </div>
    </div>
    <div className=' flex flex-col gap-6'>
        <div className='flex gap-2'>
           <img className='h-6 flex flex-row' src={img} alt="" />
            <h1 className='text-blue-600'>Troubleshooting availability</h1>  
        </div>
        <div className='flex gap-2'>
           <img className='h-6 flex flex-row' src={img} alt="" />
            <h1 className='text-blue-600'>Embed option overview</h1> </div>
        <div className='flex gap-2'>
           <img className='h-6 flex flex-row' src={img} alt="" />
            <h1 className='text-blue-600'>Using Calendly for Chrome</h1>  
        </div>
    </div>
    </div>
    </section>
    <section>
        <h1 className='flex items-center justify-center text-4xl font-bold'>Categories</h1>
        <div>
            <div className='flex flex-col md:flex-row gap-6 justify-center items-center mt-12'>
                <div className='border-2 border-blue-500 h-[19rem] w-[20rem] flex flex-col items-center  px-4 rounded-xl'>
                    <h1 className='flex items-end justify-center rounded-tr-lg rounded-bl-lg border border-blue-500 w-12 ml-[17rem] bg-blue-500 text-white font-bold'>New</h1>
                    <div className='flex items-center justify-center'>
                    <img className='h-28 items-center justify-center' src="https://th.bing.com/th/id/OIP.cHPyfc312ciBpQR-qrO6AQHaFZ?w=243&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" /></div>
                    <h1 className='text-xl font-bold'>Getting Started</h1>
                    <p className='text-slate-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero nulla quis, eum vero omnis itaque blanditiis aliquam tempora hic</p>
                </div>
                <div className='border-2 h-[19rem] w-[20rem] flex flex-col items-center  px-4 py-8 rounded-xl'>
                    <img className='h-28' src="https://th.bing.com/th/id/OIP.Q7j3oE8JRngjP5gpK--ZQwHaHa?w=196&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
                    <h1 className='text-xl font-bold'>Using Calendly </h1>
                    <p className='text-slate-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero </p>
                </div>
                <div className='border-2 h-[19rem] w-[20rem] flex flex-col items-center  px-4 py-8 rounded-xl'>
                    <img className='h-28' src="https://th.bing.com/th/id/OIP.isy3el9tvlZT5pqzk06H0AHaHa?w=214&h=214&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
                    <h1 className='text-xl font-bold'>Calendly for mobile</h1>
                    <p className='text-slate-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero nulla quis, eum vero omnis itaque blanditiis aliquam tempora hic</p>
                </div>
            </div>
            <div className='flex  flex-col md:flex-row gap-6 justify-center items-center mt-12'>
                <div className='border-2 h-[19rem] w-[20rem] flex flex-col items-center  px-4 py-8 rounded-xl'>
                 
                    <div className='flex items-center justify-center'>
                    <img className='h-28 items-center justify-center' src="https://th.bing.com/th/id/OIP.4vE-lTz5TmkIi1mfYLDbtwHaHl?w=171&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" /></div>
                    <h1 className='text-xl font-bold'>Integaretion & Automation</h1>
                    <p className='text-slate-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero nulla quis, eum vero omnis itaque blanditiis aliquam tempora hic</p>
                </div>
                <div className='border-2 h-[19rem] w-[20rem] flex flex-col items-center  px-4 py-8 rounded-xl'>
                    <img className='h-28' src="https://th.bing.com/th/id/OIP.b17xmEOXktdN2vtoVC99dAHaHa?w=209&h=209&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
                    <h1 className='text-xl font-bold'>Account setting</h1>
                    <p className='text-slate-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero nulla quis, eum vero omnis itaque blanditiis aliquam tempora hic</p>
                </div>
                <div className='border-2 h-[19rem] w-[20rem] flex flex-col items-center  px-4 py-8 rounded-xl'>
                    <img className='h-28' src="https://th.bing.com/th/id/OIP.kfJkAOE0pHZp2-0cXjQAwgHaE7?w=266&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
                    <h1 className='text-xl font-bold'>video tutorial</h1>
                    <p className='text-slate-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero nulla quis, eum vero omnis itaque blanditiis aliquam tempora hic</p>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div className='flex md:flex-row flex-col border-t-2 border-dashed m-28 py-28'>
            <div className='flex flex-col w-[21rem]'>
                <div>
                    <h1 className='font-bold text-slate-800 text-3xl'>Easy</h1>
                    <h1 className='font-bold text-blue-600 text-3xl'>ahead</h1>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat illo modi asperiores quibusdam voluptatibus</p>
                <div className='flex'>
                    <img className='h-24' src="https://th.bing.com/th/id/OIP.NNY1egMmJCjJIvXiY2J1egHaE8?w=249&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
                    <img className='h-[4.5rem] mt-3' src="https://th.bing.com/th/id/OIP.LoigFN-6FvqexiNOfJrfcQHaD0?w=296&h=179&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
                </div>
                <img className='h-[4.5rem] w-[8.5rem] mx-3' src="https://th.bing.com/th/id/OIP.wt0WY72Qq8WhWeDqpgrBxwHaC9?w=287&h=139&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
            </div>
           <div className='flex flex-col gap-4 ml-8 w-[15rem]'>
            <h1 className='font-bold text-xl'>About</h1>
              <ul>
              <li>About Calendly </li>
              <li>Contact Sales </li>
              <li>Newsroom </li>
              <li>Career </li>
              <li>Security </li>
              </ul>
              <h1 className='font-bold text-xl'>support</h1>
              <ul>
              <li>Help center</li>
              <li>Video Tutorial</li>
              
              </ul>
            </div> 
            <div className='flex flex-col gap-4 ml-8 w-[15rem]'>
            <h1 className='font-bold text-xl'>Solution</h1>
              <ul>
              <li>Customer Success</li>
              <li>Sales </li>
              <li>Recruiting</li>
              <li>Information technology </li>
              <li>Marketing </li>
              </ul>
              <h1 className='font-bold text-xl'>Add-Ons</h1>
              <ul>
              <li>Download for Chrome </li>
              <li>Download for Firefox</li>
             
              </ul>
            </div> 
            <div className='flex flex-col gap-4 ml-8 w-[15rem]'>
            <h1 className='font-bold text-xl'>Popular features</h1>
              <ul>
              <li>Embed Calendly</li>
              <li>Availablity</li>
              <li>Sending Notification </li>
              <li>Using calendly mobile</li>
             
              </ul>
              <h1 className='font-bold text-xl'>Developers</h1>
              <ul>
              <li>Developer Tools</li>
             
              </ul>
            </div> 
        </div>
    </section>
    </>
  )
}

export default Nav
