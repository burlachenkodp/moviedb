import React from "react";

const SORT_PROP = [
  { value: "any", label: "Any" },
  { value: "vote_average", label: "Sort by mark" },
  { value: "title", label: "Sort by title" },
];

const FILTER_PROP = [
  { value: "empty", label: "language" },
  { value: "en", label: "ENGLISH" },
  { value: "ko", label: "KOREAN" },
];

export const Filter = ({ typeSort, setTypeSort, lang, setLang }) => {
  return (
    <div>
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
    </div>
  );
};
