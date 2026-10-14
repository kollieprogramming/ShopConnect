
import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Impossible de charger les produits.");
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, []);

  const handleFilter = () => {
    let result = products;

    if (search.trim() !== "") {
      result = result.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (minPrice !== "") {
      result = result.filter(
        (p) => p.price >= Number(minPrice)
      );
    }

    if (maxPrice !== "") {
      result = result.filter(
        (p) => p.price <= Number(maxPrice)
      );
    }

    setFilteredProducts(result);
  };

  const resetFilters = () => {
    setSearch("");
    setMinPrice("");
    setMaxPrice("");
    setFilteredProducts(products);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Nos produits 🛍️</h2>

      <div
        style={{
          marginBottom: "20px",
          backgroundColor: "#f0f0f0",
          padding: "15px",
          borderRadius: "10px",
        }}
      >
        <h4>Filtres</h4>

        <input
          type="text"
          placeholder="Rechercher un produit..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ margin: "5px", padding: "8px" }}
        />

        <input
          type="number"
          min="0"
          placeholder="Prix min ($)"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          style={{ margin: "5px", padding: "8px", width: "100px" }}
        />

        <input
          type="number"
          min="0"
          placeholder="Prix max ($)"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          style={{ margin: "5px", padding: "8px", width: "100px" }}
        />

        <button onClick={handleFilter} style={{ margin: "5px", padding: "8px" }}>
          Filtrer
        </button>

        <button onClick={resetFilters} style={{ margin: "5px", padding: "8px" }}>
          Réinitialiser
        </button>
      </div>

      {loading && <p>Chargement des produits...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && !error && (
        <>
          <p>{filteredProducts.length} produit(s) trouvé(s)</p>

          {filteredProducts.length > 0 ? (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "20px",
              }}
            >
              {filteredProducts.map((p) => (
                <div
                  key={p.id}
                  style={{
                    border: "1px solid #ddd",
                    borderRadius: "10px",
                    padding: "15px",
                  }}
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    style={{
                      width: "100%",
                      height: "150px",
                      objectFit: "contain",
                    }}
                  />

                  <h4>{p.title}</h4>
                  <p><strong>{p.price} $</strong></p>

                  <Link to={`/products/${p.id}`}>
                    Voir les détails
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <p>Aucun produit trouvé.</p>
          )}
        </>
      )}

      <Outlet />
    </div>
  );
}
