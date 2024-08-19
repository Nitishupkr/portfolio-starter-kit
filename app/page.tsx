import { BlogPosts } from 'app/components/posts'
import Image from 'next/image'

export default function Page() {
  return (
    <section>
      {/* Images Section */}
      <div className="mb-4 flex space-x-4 animate-fade-in">
        {/* First Image */}
        <div className="rounded-lg shadow-lg">
          <Image
            src="https://res.cloudinary.com/dwxxuolek/image/upload/v1724056044/Blue_and_White_Minimal_Modern_Simple_Typography_Art_Workshop_Instagram_Story_btei64.png"
            alt="Art Workshop"
            width={200} // Adjust width as needed
            height={100} // Adjust height as needed
            className="rounded-lg"
          />
        </div>

        {/* Second Image */}
        <div className="rounded-lg shadow-lg">
          <Image
            src="https://res.cloudinary.com/dwxxuolek/image/upload/v1724057924/Yellow_and_Black_Simple_Save_Date_Instagram_Story_rfsdzq.png"
            alt="Save the Date"
            width={200} // Adjust width as needed
            height={100} // Adjust height as needed
            className="rounded-lg"
          />
        </div>
      </div>

      {/* Paragraph */}
      <p className="mb-4 text-xl">
        {`I'm a Vim enthusiast and tab advocate, finding unmatched efficiency in
        Vim's keystroke commands and tabs' flexibility for personal viewing
        preferences. This extends to my support for static typing, where its
        early error detection ensures cleaner code, and my preference for dark
        mode, which eases long coding sessions by reducing eye strain.`}
      </p>

      {/* Blog Posts */}
      <div className="my-8 text-xl">
        <BlogPosts />
      </div>
    </section>
  );
}
