import Image from "next/image";
import SearchForm from "../../components/SearchForm";
import { auth } from "@/auth";
import StartupCard from "@/components/StartupCard";

export default async function Home({searchParams}: {searchParams: Promise<{query?: string}>}) {
  const query = (await searchParams).query;

  const posts = [{
    _createdAt: new Date(),
    views: 100,
    author: {_id: 1 , name: "John Doe"},
    _id:1,
    description : "This is a sample startup description.",
    image : "https://i.pinimg.com/736x/63/4f/58/634f581931b49fd08029d8edeedf3676.jpg",
    category : "Tech",
    title : "Sample Startup",
  }];
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Pitch your startup,
          connect with Entrepreneurs</h1>
          <p className="subheading !max-w-3xl">
            Submit Ideas, Vote on Pitches, and Get Noticed in virtual
            Competitions.
          </p>
          <SearchForm query={query}/>
      </section>
      <section className="section_container">
        <p className="text-30-semibold ">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ?(
            posts.map((post: StartupCardType, number)=>(
              <StartupCard key={post?._id} post={post}/>
            ))
          ):(
            <p className="no-results">No startups found</p>)}
        </ul>
      </section>
    </>
  );
} 

