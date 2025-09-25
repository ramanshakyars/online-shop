import PathConfig from "../../common/PathConfig";
import HttpService from "../../services/HttpService";
import { useState, useEffect } from "react";
import ToasterService from "../../services/TosterService";
import { ProductCard } from "../../components/ReusableComponents";

function ShopPage({ searchText, setSearchText }) {
    const [allProducts, setAllProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [filters, setFilters] = useState({
        price: 10000,
        category: [],
        brand: [],
    });


    useEffect(() => {
        getProducts();
    }, []);

    useEffect(() => {
        applyFilters();
    }, [searchText, filters, allProducts]);

    const getProducts = async () => {
        try {
            const response = await HttpService.get(PathConfig.GET_PRODUCTS);
            // ToasterService.showSuccess("Products Fetched");
            setAllProducts(response.data);
            setFilteredProducts(response.data);
        } catch (error) {
            ToasterService.showError(error.message);
        }
    };

    const applyFilters = () => {
        let filtered = allProducts;

        // 🔍 Search filter
        if (searchText) {
            filtered = filtered.filter((product) =>
                [product.name, product.category, product.description, product.price, product.brand]
                    .join(" ")
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
            );
        }

        // 💰 Price filter
        filtered = filtered.filter((product) => product.price <= filters.price);

        // 🏷️ Category filter (TODO)
        if (filters.category.length > 0) {
            filtered = filtered.filter((product) =>
                filters.category.includes(product.category)
            );
        }

        // 🏭 Brand filter (TODO)
        if (filters.brand.length > 0) {
            filtered = filtered.filter((product) =>
                filters.brand.includes(product.brand)
            );
        }

        setFilteredProducts(filtered);
    };

    return (
        <div className="container my-4">
            <h1 className="mb-4">Shop Page</h1>
            <div className="row">
                {/* Sidebar filters */}
                <div className="col-3">
                    <h4>Filter your Products</h4>

                    {/* Price filter */}
                    <div className="mb-3">
                        <label className="form-label">Price Range: Up to ₹{filters.price}</label>
                        <input
                            type="range"
                            min={0}
                            max={10000}
                            step={100}
                            value={filters.price}
                            onChange={(e) =>
                                setFilters({ ...filters, price: Number(e.target.value) })
                            }
                            className="form-range"
                        />
                    </div>

                    {/* TODO: Add Category and Brand filters here */}
                </div>

                {/* Products grid */}
                <div className="col-9">
                      {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))
                ) : (
                    <p>No product found</p>
                )}
                </div>
            </div>
        </div>
    );
}

export default ShopPage;
