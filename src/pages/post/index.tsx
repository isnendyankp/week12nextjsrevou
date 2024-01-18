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
            {/* ini berguna untuk menampilkan data */}
            {' ini adalah halaman post dengan client side fetch '}
            {/* menggunakan map untuk menampilkan data client side fetch */}
            {posts.map((post, index) => (
                <p key={index}>{post.title}</p>
            ))}

        </div>
    );
}

export default Post;