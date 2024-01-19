import { useEffect, useState } from 'react';
import { OldCard } from '@/components';

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
      <OldCard direction="row">

        {/* ini berguna untuk menampilkan data */}
        <h1>{' ini adalah halaman post dengan client side fetch '}</h1>

        {/* menggunakan map untuk menampilkan data client side fetch */}
        {posts.map((post, index) => (
            // add Card component to display the data from the API endpoint
            <OldCard key={index} direction="row" justifyContent='center'>
                <p key={index}>
                    {post.title}
                </p>
            </OldCard>
        ))}
      </OldCard>
    );
}

export default Post;