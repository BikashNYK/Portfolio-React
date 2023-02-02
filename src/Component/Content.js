import React from 'react'
import './Content.css'
const Content = () => {
  return (
    <>

    <div className=' w-full h-420 flex flex-col items-center justify-center '>
        <p className=' text-lg text-textBase text-center responsive' style={{lineHeight:"1.4rem"}}>
                  Hello! As a multitasking master with a creative approach to problem-solving, I'm always ready to take on new challenges. My dependability, time management skills, and eagerness to learn to make me a valuable asset to any team. With a flexible and hardworking attitude, I'm self-motivated and constantly seeking out new skills and opportunities for growth. Whether it's coming up with innovative ideas or tackling problems with a positive and open mindset, I'm always ready to roll up my sleeves and get to work. Plus, with a great sense of humor and an ability to instill confidence in others, I'm a reliable and organized team player who always arrives on time and ready to go. So bring on the tasks and challenges – I'm ready to tackle them all!
        </p>

        <button className=' w-full md:w-auto relative mt-6 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800 hover:shadow-lg hover:shadow-teal-500/50 '>
            <span className=' w-full md:w-auto relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>Download</span>
        </button>
    </div>
    
    </>
  )
}

export default Content