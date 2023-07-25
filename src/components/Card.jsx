import React from 'react'

const Card = ({posts}) => {
  return (
    <div>
      {
        posts.map((post) => (
          <div key={post.id}>
            <p className='text-base font-bold'>{post.title}</p>
            <p className='mt-1 italic text-xs'>
              <div>By <span>{post.author}</span> on <span className='underline font-bold'>{post.category}</span></div>
            </p>
            <p className='text-xs italic'>Posted on : {post.date}</p>
            <p className='mt-3 mb-1'>{post.content}</p>
            <div className='mb-5'>
              {post.tags.map((tag, index) => (
                <span key={index} className='underline text-blue-500 px-1'>{`#${tag}`}</span>
              ))}
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Card