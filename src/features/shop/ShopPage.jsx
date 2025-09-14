import PathConfig from "../../common/PathConfig";
import HttpService from "../../services/HttpService"
import { useState, useEffect } from "react";
import ToasterService from "../../services/TosterService";
import { ProductCard } from "../../components/ReusableComponents";
function ShopPage() {

    const [products, setProducts] = useState([]);
    const [seacrhtext, setSearchText] = useState("");

    const getProducts = async () => {
        try {
            const product = await HttpService.get(PathConfig.GET_PRODUCTS);
            ToasterService.showSuccess("Product Fetched");
            console.log(product);
            setProducts(product.data);
        }
        catch (error) {
            ToasterService.showError(error.message);
        }

    }

    useEffect(() => {
        getProducts();
    }, [])

    // filter products

    const filterProducts = (search) => {
        setSearchText(search.target.value);
        const filteredProducts = products.filter((product) =>
            product.name.toLowerCase().includes(search.target.value.toLowerCase() &&
            product.category.toLowerCase().includes(search.target.value.toLowerCase()) &&
            product.description.toLowerCase().includes(search.target.value.toLowerCase()) &&
            product.price.toLowerCase().includes(search.target.value.toLowerCase())

            ));
        setProducts(filteredProducts);
    }



    return (
        <div className="container my-4">
            <h1 className="mb-4">Shop Page</h1>
            <div className="flex-1 flex justify-center px-4">
                <div className="w-full max-w-md">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={seacrhtext}
                            onChange={filterProducts}
                            className="w-full rounded-lg bg-gray-700 text-gray-200 placeholder-gray-400 pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        <svg
                            className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
                            />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="row">
                {products.length > 0 ? (
                    products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))
                ) : (
                    <p>No product found</p>
                )}
            </div>
        </div>
    )
}
export default ShopPage;