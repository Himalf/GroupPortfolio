import React from 'react';

function Skills() {
  return (
    <div>
      <section id="Skills" className='bg-black bg-opacity-30 shadow-lg rounded-2xl p-5 text-orange-500 '>
        <h2 className='text-3xl font-semibold mb-10'>Skills</h2>
          
          <div className='grid lg:grid-cols-4 gap-3 md:grid-cols-2'>
            <div>
            <h3 className='text-xl mb-2 flex items-center'>Frontend Development</h3>
            <ul>
              <li className='flex items-center py-1'>
                <span className='bg-yellow-600 rounded-md'>⚡</span> JavaScript
              </li>
              <li className='flex items-center py-1'>
                <span className='bg-blue-500 rounded-md'>⚛️</span> React
              </li>
              <li className='flex items-center py-1'>
                <span className='bg-green-500 rounded-md'>🌐</span> Next.js
              </li>
            </ul>
          </div>

         
          <div>
            <h3 className='text-xl mb-2 flex items-center'>Backend and Database</h3>
            <ul>
              <li className='flex items- py-1'>
                <span className='bg-green-500 rounded-md'>🛠️</span> Node.js
              </li>
              <li className='flex items-center py-1'>
                <span className='bg-red-500 rounded-md'>🚀</span> Express.js
              </li>
              <li className='flex items-center py-1'>
                <span className='bg-gray-500 rounded-md'>✨</span> Mysql
              </li>
            </ul>
          </div>

     
          <div>
            <h3 className='text-xl mb-2 flex items-center'>Essential Skills</h3>
            <ul>
              <li className='flex items-center py-1'>
                <span className='bg-black rounded-md'>🔧</span> Git
              </li>
              <li className='flex items-center py-1'>
                <span className='bg-blue-500 rounded-md'>🎨</span> Canva
              </li>

              <li className='flex items-center py-1'>
                <span className='bg-green-500 rounded-md'>🎨</span> Excel
              </li>
            </ul>
          </div>

          <div>
            <h3 className='text-xl mb-2 flex items-center'>Soft Skills</h3>
            <ul>
              <li className='flex items-center py-1'>
                <span className='bg-blue-800 rounded-md'>✔️</span> Team Collaboration
              </li>
              <li className='flex items-center py-1'>
                <span className='bg-blue-200 rounded-md'>✔️</span> Communication
              </li>

              <li className='flex items-center py-1'>
                <span className='bg-blue-500 rounded-md'>✔️</span> Problem Solving
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;
