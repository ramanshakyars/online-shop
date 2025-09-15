import PathConfig from "../../common/PathConfig";
import HttpService from "../../services/HttpService"
import { useState, useEffect } from "react";
import ToasterService from "../../services/TosterService";
import { ProductCard } from "../../components/ReusableComponents";
function ShopPage({ searchText, setSearchText }) {
    const [products, setProducts] = useState([]);
    // const [filteredProducts, setFilteredProducts] = useState([]);


    const getProducts = async () => {
        try {
            const product = await HttpService.get(PathConfig.GET_PRODUCTS);
            ToasterService.showSuccess("Product Fetched");
            setProducts(product.data);
            //  setFilteredProducts(response.data);

        }
        catch (error) {
            ToasterService.showError(error.message);
        }

    }

    useEffect(() => {
        getProducts();
        filterProducts(searchText);
    }, [])

    // filter products

    const filterProducts = (searchText) => {
        setSearchText(searchText);
        const filteredProducts = products.filter((product) =>
            product.name.toLowerCase().includes(filterProducts.toLowerCase() &&
                product.category.toLowerCase().includes(searchText.toLowerCase()) &&
                product.description.toLowerCase().includes(searchText.toLowerCase()) &&
                product.price.toLowerCase().includes(searchText.toLowerCase())

            ));
        setProducts(filteredProducts);
    }



    return (
        <div className="container my-4">
            <h1 className="mb-4">Shop Page</h1>
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