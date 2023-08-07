import React, { Component } from "react";

export default class Item extends Component {
  render() {
    return (
      <div className="card bg-light border-0 h-100">
        <div className="card text-center">
          <div className="card-header py-5">
            <h3 className="text-muted font-weight-light">500 x 325</h3>
          </div>
          <div className="card-body">
            <h4 className="card-title h3">Card Title</h4>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
              placeat sint.
            </p>
          </div>
          <div className="card-footer">
            <button className="btn btn-primary">Find Out More!</button>
          </div>
        </div>
      </div>
    );
  }
}
