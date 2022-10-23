
import { PostCard, PostWidget} from '../components';
import { getPosts } from '../services';
import { FeaturedPosts } from '../sections';



export default function blog({ posts }) {
  return (
    <div>
    <div className="container mx-auto px-10 mb-8">
     
           
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post) => (
            <PostCard post={post.node} key={post.title} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            
          </div>
        </div>
      </div>
      <div  className="bg-white shadow-lg rounded-lg p-8 pb-20 mb-8">
      <h3 className="text-xl text-center mb-8 font-semibold border-b pb-4 ">A lire aussi</h3>
        <div className="grid grid-cols-1 gap-4 mb-4 ">
      <FeaturedPosts/>
      </div>
      </div>
    </div>
    
    </div>
  );
}

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts }
  };
}


