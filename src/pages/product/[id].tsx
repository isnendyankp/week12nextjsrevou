import { useRouter } from 'next/router'

const ProductById = () => {

    const router = useRouter()

    return (
        <div>
            {' ini adalah halaman product by id '}
        </div>
    )
}

export default ProductById

// explaination:
// 1. check web browser with url: http://localhost:3000/product/1