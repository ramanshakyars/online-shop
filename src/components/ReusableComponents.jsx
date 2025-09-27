export function ProductCard({ product }) {
    const productImage =
        product.images && product.images.length > 0
            ? product.images[0]
            : "https://via.placeholder.com/300x200";

    return (
        <div className="col-12 col-md-4 mb-4"> {/* 👈 Always 3 per row */}
            <div className="card h-100 shadow-sm border-0 product-card">
                {/* Product Image */}
                <img
                    src={productImage}
                    className="card-img-top"
                    alt={product.name}
                    style={{
                        height: "220px",
                        objectFit: "cover",
                        borderTopLeftRadius: "0.5rem",
                        borderTopRightRadius: "0.5rem",
                    }}
                />

                {/* Product Details */}
                <div className="card-body d-flex flex-column">
                    <h6 className="card-title text-truncate">{product.name}</h6>
                    <p className="card-text text-muted small mb-1">
                        {product.category || "General"}
                    </p>
                    <h6 className="text-dark fw-bold mb-3">
                        {product.currency} {product.price}
                    </h6>

                    {/* Actions */}
                    <div className="mt-auto d-flex justify-content-between">
                        <button className="btn btn-outline-secondary btn-sm">
                            <i className="bi bi-plus-circle me-1"></i> Quantity
                        </button>
                        <button className="btn btn-primary btn-sm">
                            <i className="bi bi-cart me-1"></i> Add
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
