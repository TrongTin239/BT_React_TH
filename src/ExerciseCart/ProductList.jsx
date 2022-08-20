import React, { Component } from "react";
import ProducItem from "./ProducItem";

export default class ProductList extends Component {
  render() {
    let { productlist, addCart } = this.props;
    return (
      <div className="">
        <div className="row">
          {productlist.map((prod, index) => {
            return (
              <div className="col-4 " key={index}>
                <ProducItem addCart={addCart} product={prod} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
