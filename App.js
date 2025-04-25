
import React from "react";
import { useState } from "react";

export default function App() {
  const [datum, setDatum] = useState("");
  const [kwh, setKwh] = useState(15);
  const [liter, setLiter] = useState(3);
  const [history, setHistory] = useState([]);

  const energiaLiter = 8.9;
  const vegyesFogyasztas =
    kwh && liter ? (Number(kwh) / energiaLiter + Number(liter)).toFixed(2) : "-";

  const handleSave = () => {
    if (datum && kwh && liter) {
      setHistory((prev) => [
        ...prev,
        { datum, vegyes: parseFloat(vegyesFogyasztas) },
      ]);
      setDatum("");
      setKwh(15);
      setLiter(3);
    }
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>Hibrid Fogyasztás Számoló</h1>
      <div style={{ marginTop: "1rem" }}>
        <label>Dátum:</label><br />
        <input type="date" value={datum} onChange={(e) => setDatum(e.target.value)} style={{ marginBottom: "1rem", width: "100%" }} /><br />
        <label>Elektromos fogyasztás (kWh/100km):</label><br />
        <input type="number" value={kwh} onChange={(e) => setKwh(e.target.value)} style={{ marginBottom: "1rem", width: "100%" }} /><br />
        <label>Benzin fogyasztás (l/100km):</label><br />
        <input type="number" value={liter} onChange={(e) => setLiter(e.target.value)} style={{ marginBottom: "1rem", width: "100%" }} /><br />
        <div style={{ marginBottom: "1rem", fontSize: "1.5rem" }}>
          Vegyes fogyasztás: <strong>{vegyesFogyasztas} l/100km</strong>
        </div>
        <button onClick={handleSave} style={{ padding: "0.5rem 1rem", backgroundColor: "#4CAF50", color: "white", border: "none", cursor: "pointer" }}>
          Mentés
        </button>
      </div>
      {history.length > 0 && (
        <div style={{ marginTop: "2rem" }}>
          <h2>Korábbi eredmények:</h2>
          <ul>
            {history.map((item, index) => (
              <li key={index}>
                {item.datum}: {item.vegyes} l/100km
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
