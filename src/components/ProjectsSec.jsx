import React from 'react'
import { PROJECTS } from '../constants'

const ProjectsSec = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <h2 className="my-20 text-4xl text-center">Projects</h2>
        <div className="">
            {PROJECTS.map((project, index) =>(
                <div key={index} className='mb-8 flex flex-wrap '>
                    <div className="w-full lg:w-1/4">
                    <img src={project.image} alt={project.title} width={150} height={150}  className='mb-6 rounded'/>
                    </div>

                    <div className="w-full max-w-xl lg:w-3/4">
                    <h6 className='mb-2 font-semibold'>{project.title}</h6>
                    <h6 className='mb-4 text-neutral-500'>{project.description}</h6>
                    <h6 className='mb-4 font-medium'>{
                    project.technologies.map((tech, index) => (
                        <span key={index} className='mr-2 mt-4 rounded bg-neutral-900 py-1 px-2 text-sm font-medium text-blue-400 mb-2'>
                            {tech}
                        </span>
                    ))
                }</h6>
                    
                    </div>
                </div>

            ))}
        </div>
    </div>
  )
}

export default ProjectsSec