import { BlogPosts } from 'app/components/posts'
import Image from 'next/image'

export default function Page() {
  return (
    <section>
      <div className="mb-4">
        {/* Image with Animation */}
        <div className="animate-fade-in mb-4">
          <Image
            src="https://res.cloudinary.com/dwxxuolek/image/upload/v1724056044/Blue_and_White_Minimal_Modern_Simple_Typography_Art_Workshop_Instagram_Story_btei64.png"
            alt="Art Workshop"
            width={200} // Adjust width as needed
            height={100} // Adjust height as needed
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      <p className="mb-4 text-xl">
        {`I'm a Vim enthusiast and tab advocate, finding unmatched efficiency in
        Vim's keystroke commands and tabs' flexibility for personal viewing
        preferences. This extends to my support for static typing, where its
        early error detection ensures cleaner code, and my preference for dark
        mode, which eases long coding sessions by reducing eye strain.`}
      </p>

      <div className="my-8 text-xl">
        <BlogPosts />
      </div>
    </section>
  );
}
