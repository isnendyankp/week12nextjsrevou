
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

export default PostServer;