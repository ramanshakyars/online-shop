export function ProductCard({ product }) {
    return <div>
        <div className="row">
            <div className="col-sm-3">
                <img src="{productDetails.image}" alt="" />
            </div>
            <h6>{product.name}</h6>
            <h6>{product.price}</h6>
            <button>add Quantity</button>
            <button>Add to Cart</button>
        </div>
    </div>;
}



