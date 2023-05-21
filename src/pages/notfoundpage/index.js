import React from "react";
import "./style.css";

export const NotFound = () => {
  return (
    <div id="content" className="">
      <div className=" container">
        <section className="error-404 not-found">
          <p className="error-title">Error 404</p>

          <h1 className="page-title">Oops.</h1>

          <div className="page-content">
            <p>
              The page you're looking for isn't available.
              <br />
              Try to search again or use the go back button below.
            </p>
            <p>
              <a
                href="http://localhost:3000/zee_web"
                className="button large text-decoration-none"
              >
                <span className="fa fab-arrows"></span>
                Go back
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};
