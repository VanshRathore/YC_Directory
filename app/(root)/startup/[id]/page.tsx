import { client } from '@/sanity/lib/client';
import { STARTUPS_BY_ID_QUERY } from '@/sanity/lib/queries';
import { notFound } from 'next/navigation';
import React from 'react';
import { formatDate } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';
import { marked } from 'marked';


export const experimental_ppr = true;

const page = async ({ params }: { params: { id: string } }) => {
  const id = params.id;

  const post = await client.fetch(STARTUPS_BY_ID_QUERY, { id });

  console.log("Pitch Content:", post?.pitch);

  if (!post) {
    return notFound();
  }

  const parsedContent = await marked.parse(post?.pitch || 'No pitch details available.');

  return (
    <>
      <section className='pink_container !min-h-[230px]'>
        <p className='tag'>{formatDate(post?._createdAt)}</p>
        <h1 className='heading'>{post.title}</h1>
        <p className='sub-heading !max-w-5xl'>{post.description}</p>
      </section>

      <section className='section_container'>
        <img 
          src={post.image} 
          alt="thumbnail" 
          className='w-full h-auto rounded-xl' 
        />
        <div className='space-y-5 mt-10 max-w-4xl mx-auto'>
          <div className='flex-between gap-5'>
            <Link href={`/user/${post.author?._id}`} className='flex items-center gap-2 mb-3'>
              <Image 
                src={post.author.image} 
                alt='avatar' 
                width={64} 
                height={64} 
                className='rounded-full drop-shadow-lg' 
              />
              <div>
                <p className='text-20-medium'>{post.author.name}</p>
                <p className='text-16-medium !text-black-300'>
                  @{post.author.username}
                </p>
              </div>
            </Link>
            <p className='category-tag'>{post.category}</p>
          </div>
          <h3 className='text-30-bold'>Pitch Details</h3>
          {parsedContent ? (
            <article 
              className='prose max-w-4xl font-work-sans break-all'
              dangerouslySetInnerHTML={{__html: parsedContent}}/>
          ): (
            <p className='no-result'>No pitch details available.</p>
          )}
        </div>

        <hr className='divider'/>
      </section>
    </>
  )
}

export default page;
