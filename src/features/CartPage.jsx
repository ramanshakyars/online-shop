import { use, useState , useEffect} from "react";
import HttpService from "../services/HttpService";
import PathConfig from "../common/PathConfig";

function CartPage() {
    const [cartItem, setCartItem] = useState([]);

    const getCartItmes = async () => {
        try {
            const response = await HttpService.get(PathConfig.GET_CART_ITEMS);
            setCartItem(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getCartItmes();
    }, []);

    return (
        <div className="container">
            <h1>Cart</h1>
            <div className="cartItemcard">
                {cartItem.map((item) => {
                    return (
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">{item.price}</p>
                            </div>
                        </div>
                    )
                })}
                {
                    cartItem.length === 0 && <h6>Cart is empty</h6>
                }

            </div>
        </div>
    )
}

export default CartPage;