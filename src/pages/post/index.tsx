import { useState } from 'react';

// interface
interface Post{
    title: string;
}

const Post = () => {

    // cr8 useState post
    const [post, setPost] = useState<Post[]>([])

    return (
        <div>
            {' ini adalah halaman post '}
        </div>
    );
}

export default Post;