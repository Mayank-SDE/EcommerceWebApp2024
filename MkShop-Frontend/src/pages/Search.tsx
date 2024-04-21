import { useState } from "react"
import ProductCart from "../components/ProductCard";

const Search = () => {
    const [search, setSearch] = useState<string>("");
    const [sort, setSort] = useState<string>("");
    const [maxPrice, setMaxPrice] = useState<number>(100000);

    const [category, setCategory] = useState<string>("");

    const [page, setPage] = useState<number>(1);

    const addToCartandler = () => {

    };
    const isNextPage = page < 4;
    const isPrevPage = page > 1;

    return (
        <div className="product-search-page">
            <aside>
                <h2>Filters</h2>
                <div>
                    <h4>Sort</h4>
                    <select value={sort} onChange={(event) => setSort(event.target.value)}>
                        <option value="">None</option>
                        <option value="asc">Price - (Low to High)</option>
                        <option value="dsc">Price - (High to Low)</option>
                    </select>
                </div>
                <div>
                    <h4>Max Price : {maxPrice || ""}</h4>
                    <input type="range" min={100} max={100000} value={maxPrice} onChange={(event) => setMaxPrice(Number(event.target.value))} />
                </div>
                <div>
                    <h4>Category</h4>
                    <select value={category} onChange={(event) => setCategory(event.target.value)}>
                        <option value="">ALL</option>
                        <option value="">Sample - 1</option>
                        <option value="">Sample - 2</option>
                    </select>
                </div>
            </aside>
            <main>
                <h1>Products</h1>
                <input type="text" placeholder="Search by name..." value={search} onChange={event => setSearch(event.target.value)} />

                <div className="search-product-list">
                    <ProductCart productId='agsaf' name='macbook' price={50000} stock={10} photo='https://m.media-amazon.com/images/I/619L9jf3-rL._AC_SX679_.jpg' handler={addToCartandler} />
                </div>
                <article>
                    <button disabled={!isPrevPage} onClick={() => setPage(prev => prev - 1)}>Prev</button>
                    <span>{page} of {4}</span>
                    <button disabled={!isNextPage} onClick={() => setPage(prev => prev + 1)}>Next</button>
                </article>
            </main>
        </div>
    )
}

export default Search