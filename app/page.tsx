import { BlogPosts } from 'app/components/posts'
import Logo from 'app/components/logo' // Adjust the path as needed

export default function Page() {
  return (
    <section>
      <div className="mb-4">
        <div className="fixed top-0 left-0 p-4">
          <Logo /> {/* Use the Logo component here */}
        </div>
      </div>
      <p className="mb-4 text-xl"> {/* Adjust the font size here */}
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
