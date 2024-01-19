import { useEffect, useState } from 'react';
import { Card } from '@/components';

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
      <Card>

        {/* ini berguna untuk menampilkan data */}
        <h1>{' ini adalah halaman post dengan client side fetch '}</h1>

        {/* menggunakan map untuk menampilkan data client side fetch */}
        {posts.map((post, index) => (
            // add Card component to display the data from the API endpoint
            <Card key={index} className="text-center">
                <p >
                    {post.title}
                </p>
            </Card>
        ))}
      </Card>
    );
}

export default Post;