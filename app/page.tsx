import { BlogPosts } from 'app/components/posts'
import Image from 'next/image'

export default function Page() {
  return (
    <section>
      {/* Images Section */}
      <div className="mb-4 flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 animate-fade-in">
        {/* First Image */}
        <div className="rounded-lg shadow-lg flex-1">
          <Image
            src="https://res.cloudinary.com/dwxxuolek/image/upload/v1724056044/Blue_and_White_Minimal_Modern_Simple_Typography_Art_Workshop_Instagram_Story_btei64.png"
            alt="Art Workshop"
            layout="responsive"
            width={500}
            height={300}
            className="rounded-lg"
          />
        </div>

        {/* Second Image */}
        <div className="rounded-lg shadow-lg flex-1">
          <Image
            src="https://res.cloudinary.com/dwxxuolek/image/upload/v1724057924/Yellow_and_Black_Simple_Save_Date_Instagram_Story_rfsdzq.png"
            alt="Save the Date"
            layout="responsive"
            width={500}
            height={300}
            className="rounded-lg"
          />
        </div>
      </div>

      {/* Paragraph */}
      <p className="mb-4 text-xl">
        {`As a `}
        <span
          className="text-yellow-500 font-semibold"
          style={{ fontFamily: '"Irish Grover", system-ui' }}
        >
          Technical Product Manager
        </span>
        {` and `}
        <span
          className="text-yellow-500 font-semibold"
          style={{ fontFamily: '"Irish Grover", system-ui' }}
        >
          Software Developer
        </span>
        {`, I’ve successfully led and executed projects at companies like Subko Coffee, driving enhancements in operational workflows and optimizing web applications. My achievements include a top 4 finish at Solana Hackday Delhi for a decentralized web app and spearheading the development of an award-winning Smart Helmet project. Passionate about technology, I actively contribute to the tech community through workshops and events as a member of SALAAH, promoting digital literacy.`}
      </p>

      {/* Blog Posts */}
      <div className="my-8 text-xl">
        <BlogPosts />
      </div>
    </section>
  );
}
