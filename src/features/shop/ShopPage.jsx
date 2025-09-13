import PathConfig from "../../common/PathConfig";
import HttpService from "../../services/HttpService"
import { useState, useEffect } from "react";
import ToasterService from "../../services/TosterService";
function ShopPage() {

    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        const product = await HttpService.get(PathConfig.GET_PRODUCTS);
        ToasterService.showSuccess("Product Fetched");
        console.log(product);
        setProducts(product.data);
    }

    useEffect(() => {
        getProducts();
    }, [])



    return (
        <div>
            <h1>Shop Page</h1>
            <ul>
                {products.length > 0 ? products.map((product) => {
                    return <li>{product.name}</li>
                }) : "No product Found"}
            </ul>
        </div>
    )
}
export default ShopPage;