import { useRouter } from 'next/router';


const PostByIdAndName = () => {
  const router = useRouter();

  return <div>{`ini adalah halaman post by id: ${router.query.id} and name:${router.query.name}`}</div>;
};

export default PostByIdAndName;


// explaination:
// 1. learn cr8 multiple parameter in url with post/[id]/[name].tsx