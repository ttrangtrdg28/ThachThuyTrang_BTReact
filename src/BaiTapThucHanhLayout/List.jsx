import React, { Component } from "react";
import Item from "./Item";

export default class List extends Component {
  render() {
    return (
      <section className="pt-4">
        <div className="container px-lg-5">
          {/* Page Features*/}
          <div className="row gx-lg-5">
            <div className="col-lg-3 col-xxl-3 mb-5">
              <Item />
            </div>
            <div className="col-lg-3 col-xxl-3 mb-5">
              <Item />
            </div>
            <div className="col-lg-3 col-xxl-3 mb-5">
              <Item />
            </div>
            <div className="col-lg-3 col-xxl-3 mb-5">
              <Item />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
