import React from "react";
import classes from "./Filter.module.scss";


const SORT_PROP = [
  { value: "any", label: "Sort" },
  { value: "vote_average", label: "Sort by mark" },
  { value: "title", label: "Sort by title" },
];

const FILTER_PROP = [
  { value: "language", label: "Country" },
  { value: "en", label: "English" },
  { value: "ko", label: "Korean" },
  { value: "es", label: "Spanish" },
];

export const Filter = ({ typeSort, setTypeSort, lang, setLang }) => {
  return (
    <section className={classes["filter-container"]}>
      <select value={typeSort} onChange={(e) => setTypeSort(e.target.value)}>
        {SORT_PROP.map((item) => (
          <option value={item.value} key={item.value}>
            {item.label}
          </option>
        ))}
      </select>

      <select value={lang} onChange={(e) => setLang(e.target.value)}>
        {FILTER_PROP.map((item) => (
          <option value={item.value} key={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </section>
  );
};
