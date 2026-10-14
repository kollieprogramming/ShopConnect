
import React, { useState, useMemo } from "react";

export default function Cart() {
  const [price] = useState(100);
  const [qty, setQty] = useState(1);

  const total = useMemo(() => price * qty, [price, qty]);

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "15px",
        marginTop: "20px",
      }}
    >
      <h3>Calcul du total 🛒</h3>
      <p>Prix unitaire : {price} $</p>

      <label>
        Quantité :{" "}
        <input
          type="number"
          min="1"
          value={qty}
          onChange={(e) =>
            setQty(Math.max(1, Number(e.target.value) || 1))
          }
          style={{ width: "70px" }}
        />
      </label>

      <p><strong>Total : {total} $</strong></p>
    </div>
  );
}
