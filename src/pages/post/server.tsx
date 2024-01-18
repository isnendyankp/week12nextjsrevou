
interface Post {
    title: string;
}

interface Props {
    posts: Post[];
}

const PostServer = () => {
    return (
        <div>
            {' ini adalah halaman post dengan server side fetch '}
        </div>
    );
}

export default PostServer;