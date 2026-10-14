
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setProduct(null);
    setError("");

    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Produit introuvable.");
        }
        return res.json();
      })
      .then((data) => setProduct(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{ marginTop: "20px", maxWidth: "700px" }}>
      <h2>{product.title}</h2>

      <img
        src={product.image}
        alt={product.title}
        style={{ width: "180px", height: "180px", objectFit: "contain" }}
      />

      <p>{product.description}</p>
      <p><strong>Prix : {product.price} $</strong></p>
      <p>Catégorie : {product.category}</p>
      <p>Note : {product.rating?.rate ?? "Non disponible"}</p>

      <Link to="/products">← Retour aux produits</Link>
    </div>
  );
}
