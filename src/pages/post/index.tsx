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
      <Card direction={'column'}>
            <h1>{' ini adalah halaman post dengan client side fetch '}</h1>
            <Card direction={'row'}>
                {posts.map((post, index) => (
                    <Card key={index} className="text-center" direction={'row'}>
                        <p>
                            {post.title}
                        </p>
                    </Card>
                ))}
            </Card>
      </Card>
    );
}

export default Post;