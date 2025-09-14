import PathConfig from "../../common/PathConfig";
import HttpService from "../../services/HttpService"
import { useState, useEffect } from "react";
import ToasterService from "../../services/TosterService";
import { ProductCard } from "../../components/ReusableComponents";
function ShopPage() {

    const [products, setProducts] = useState([]);

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



    return (
        <div>
            <h1>Shop Page</h1>
            <ul>
                {products.length > 0 ? products.map((product => 
                     <ProductCard key={product.id} product={product}/>
                )) : "No product Found"}
            </ul>
        </div>
    )
}
export default ShopPage;