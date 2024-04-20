import { Link } from 'react-router-dom';
import ProductCart from '../components/ProductCard';
const Home = () => {

    const addToCartandler = () => {

    }

    return (
        <div className="home">
            <section>

            </section>

            <h1>Latest Products <Link to="/search" className='findmore'>More</Link> </h1>
            <main>
                <ProductCart productId='agsaf' name='macbook' price={50000} stock={10} photo='https://m.media-amazon.com/images/I/619L9jf3-rL._AC_SX679_.jpg' handler={addToCartandler} />
            </main>
        </div>
    )
}

export default Home