
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
        </div>
    );
}

export default PostServer;