import React from 'react'
import Card4 from '../Card4'

const Comments = () => {
  return (
    <div>
        <div>
            <h2 className='text-purple-500'>COMMENTS(3)</h2>
        </div>
        <div className='my-3'>
            {[0, 1, 2].map((e, idx) => (
                <Card4 key={idx} />
            ))}
        </div>
    </div>
  )
}

export default Comments