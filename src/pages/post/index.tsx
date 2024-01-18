import { useState } from 'react';

// interface
interface Post{
    title: string;
}

const Post = () => {

    // cr8 useState post
    const [posts, setPost] = useState<Post[]>([])

    // cr8 fetchPosts
    const fetchPosts = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data: Post[] = await response.json();
        setPost(data);
    }

    return (
        <div>
            {' ini adalah halaman post dengan client side fetch '}
        </div>
    );
}

export default Post;