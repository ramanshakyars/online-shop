import PathConfig from "../../common/PathConfig";
import HttpService from "../../services/HttpService";
import { useState, useEffect } from "react";
import ToasterService from "../../services/TosterService";
import { ProductCard } from "../../components/ReusableComponents";

function ShopPage({ searchText, setSearchText }) {
    const [allProducts, setAllProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);


    useEffect(() => {
        getProducts();
    }, []);

    useEffect(() => {
        handleSearch(searchText);
    }, [searchText, allProducts]);

    const getProducts = async () => {
        try {
            const response = await HttpService.get(PathConfig.GET_PRODUCTS);
            ToasterService.showSuccess("Products Fetched");
            setAllProducts(response.data);
            setFilteredProducts(response.data);
        } catch (error) {
            ToasterService.showError(error.message);
        }
    };

    const handleSearch = (searchText) => {
        if (!searchText) {
            setFilteredProducts(allProducts);
        } else {
            const filtered = allProducts.filter((product) =>
                [product.name, product.category, product.description]
                    .join(" ")
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
            );
            setFilteredProducts(filtered);
        }
    };





    return (
        <div className="container my-4">
            <h1 className="mb-4">Shop Page</h1>
            <div className="row">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))
                ) : (
                    <p>No product found</p>
                )}
            </div>
        </div>
    );
}

export default ShopPage;
