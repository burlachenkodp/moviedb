import React from "react";

export const Search = ({ handleSubmit, handleChange }) => {
  return (
    <div className="container">
      <div className="row">
        <section className="row-item">
          <form action="" onSubmit={handleSubmit}>
            <div className="input-field">
              <input
                type="text"
                placeholder="TYPE MOVIE"
                onChange={handleChange}
              />
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};
