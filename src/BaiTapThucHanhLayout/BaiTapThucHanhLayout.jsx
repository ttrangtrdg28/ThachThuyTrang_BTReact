import React, { Component } from "react";
import Header from "./Header";
import Banner from "./Banner";
import List from "./List";
import Footer from "./Footer";
import Body from "./Body";

export default class BaiTapThucHanhLayout extends Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}
