import { formatDate } from '@/lib/utils'
import { EyeIcon, Link } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const StartupCard = ({post}: {post: StartupTypeCard }) => {
  const { _id, title, description, image, category, _createdAt, views, author: { _id: authorId, name} } = post;
  return (
    <li className="startup-card group">
        <div className="flex-between">
            <p className='startup_card_date'>
                {formatDate(_createdAt)}
            </p>
            <div>
              <EyeIcon className='size-6 text-primary'/>
              <span className='text-16-medium'>{views}</span>
            </div>
        </div>
        <div className='flex-between mt-5 gap-5'> 
          <div className='flex-1'>
            <Link href={`/user/${authorId}`}> 
              <p className='text-16-medium line-clamp-1'>{name}</p>
            </Link>
            <Link href={`/startup/${_id}`}>
              <h3 className='text-26-semibold line-clamp-1 mt-2'>{title}</h3>
            </Link>
          </div> 
          <Link href={`/user/${authorId}`}>
            <Image src="https://placehold.co/600x400" alt="placehold" width={48} height={48} className= "rounded-full"/>
          </Link>
        </div>
        <div>
          <Link href={`/startup/${_id}`}>
            <p className='startup-card_desc'>
              {description}
            </p>
            
          </Link>
        </div>
    </li>
  )
}

export default StartupCard
