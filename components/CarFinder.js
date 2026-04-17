"use client";

import { useMemo, useState } from "react";

const emptyResult = {
  title: "Vælg en bil for at se data",
  stockHp: "-",
  tunedHp: "-",
  torque: "-",
  description: "Her vises et realistisk eksempel på effekt og moment for den valgte bil.",
  engine: ""
};

export default function CarFinder({ vehicleData, compact = false }) {
  const types = Object.keys(vehicleData);
  const [selection, setSelection] = useState({
    type: "",
    brand: "",
    model: "",
    year: "",
    engine: ""
  });
  const [result, setResult] = useState(emptyResult);

  const brands = useMemo(
    () => (selection.type ? Object.keys(vehicleData[selection.type]) : []),
    [selection.type, vehicleData]
  );

  const models = useMemo(
    () =>
      selection.type && selection.brand
        ? Object.keys(vehicleData[selection.type][selection.brand])
        : [],
    [selection.brand, selection.type, vehicleData]
  );

  const years = useMemo(
    () =>
      selection.type && selection.brand && selection.model
        ? Object.keys(vehicleData[selection.type][selection.brand][selection.model])
        : [],
    [selection.brand, selection.model, selection.type, vehicleData]
  );

  const engines = useMemo(
    () =>
      selection.type && selection.brand && selection.model && selection.year
        ? Object.keys(
            vehicleData[selection.type][selection.brand][selection.model][selection.year]
          )
        : [],
    [selection.brand, selection.model, selection.type, selection.year, vehicleData]
  );

  function updateField(field, value) {
    setSelection((current) => {
      if (field === "type") {
        return { type: value, brand: "", model: "", year: "", engine: "" };
      }

      if (field === "brand") {
        return { ...current, brand: value, model: "", year: "", engine: "" };
      }

      if (field === "model") {
        return { ...current, model: value, year: "", engine: "" };
      }

      if (field === "year") {
        return { ...current, year: value, engine: "" };
      }

      return { ...current, [field]: value };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (Object.values(selection).some((value) => value === "")) {
      setResult({
        ...emptyResult,
        title: "Vi mangler stadig nogle oplysninger",
        description:
          "Vælg type, mærke, model, årgang og motor for at se et eksempel på resultatvisning."
      });
      return;
    }

    const data =
      vehicleData[selection.type][selection.brand][selection.model][selection.year][selection.engine];

    setResult({
      title: `${selection.brand} ${selection.model} ${selection.year}`,
      stockHp: `${data.stockHp} hk`,
      tunedHp: `${data.tunedHp} hk`,
      torque: data.torque,
      description: data.description,
      engine: selection.engine
    });
  }

  return (
    <div className="finder-layout">
      <form className="finder-form" onSubmit={handleSubmit}>
        <div className="field-grid">
          <label>
            Type
            <select value={selection.type} onChange={(event) => updateField("type", event.target.value)}>
              <option value="">Vælg type</option>
              {types.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </label>

          <label>
            Mærke
            <select
              value={selection.brand}
              onChange={(event) => updateField("brand", event.target.value)}
              disabled={!brands.length}
            >
              <option value="">Vælg mærke</option>
              {brands.map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
          </label>

          <label>
            Model
            <select
              value={selection.model}
              onChange={(event) => updateField("model", event.target.value)}
              disabled={!models.length}
            >
              <option value="">Vælg model</option>
              {models.map((model) => (
                <option key={model} value={model}>
                  {model}
                </option>
              ))}
            </select>
          </label>

          <label>
            Årgang
            <select
              value={selection.year}
              onChange={(event) => updateField("year", event.target.value)}
              disabled={!years.length}
            >
              <option value="">Vælg årgang</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </label>

          <label className="field-span">
            Motor
            <select
              value={selection.engine}
              onChange={(event) => updateField("engine", event.target.value)}
              disabled={!engines.length}
            >
              <option value="">Vælg motor</option>
              {engines.map((engine) => (
                <option key={engine} value={engine}>
                  {engine}
                </option>
              ))}
            </select>
          </label>
        </div>

        <button className="button finder-button" type="submit">
          {compact ? "Se eksempel" : "Søg bil"}
        </button>
        <p className="helper-text">
          Placeholder-data ligger samlet i `data/site.js`, så sektionen er nem at udvide med flere
          mærker, modeller og motorvarianter senere.
        </p>
      </form>

      <aside className="finder-result" aria-live="polite">
        <div className="result-head">
          <span className="result-label">Eksempel på resultat</span>
          <h3>{result.title}</h3>
        </div>
        <div className="stats-grid">
          <article className="stat">
            <span>Standard effekt</span>
            <strong>{result.stockHp}</strong>
          </article>
          <article className="stat">
            <span>Optimeret effekt</span>
            <strong>{result.tunedHp}</strong>
          </article>
          <article className="stat">
            <span>Moment</span>
            <strong>{result.torque}</strong>
          </article>
        </div>
        <p className="section-copy" style={{ marginTop: 18 }}>
          {result.description}
        </p>
        {result.engine ? <p className="helper-text"><strong>Motor:</strong> {result.engine}</p> : null}
        <p className="disclaimer">
          Disclaimer: Viste data er vejledende eksempler. Endeligt resultat afhænger af bilens
          tilstand, softwareversion, brændstofkvalitet og eventuelle hardwareændringer.
        </p>
      </aside>
    </div>
  );
}
