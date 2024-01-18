
interface Post {
    title: string;
}

interface Props {
    posts: Post[];
}

const PostServer = ({ posts } : Props) => {
    return (
        <div>
            {' ini adalah halaman post dengan server side fetch '}
            {/* menggunakan map untuk menampilkan data server side fetch */}
            {posts.map((post, index) => (
                <p key={index}>{post.title}</p>
            ))}
        </div>
    );
}

// cr8 getServerSideProps
export const getServerSideProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data: Post[] = await response.json();
    
}

export default PostServer;