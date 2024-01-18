import { useEffect, useState } from 'react';

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

    // cr8 useEffect
    useEffect(
        () => {
        fetchPosts();
        },
        []
    )

    return (
        <div>
            {' ini adalah halaman post dengan client side fetch '}
        </div>
    );
}

export default Post;