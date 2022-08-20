import React, { Component } from "react";

export default class ProducItem extends Component {
  render() {
    let { product, addCart } = this.props;
    return (
      <div>
        <div className="card text-white bg-dark">
          <img
            className="card-img-top"
            height={400}
            src={product.hinhAnh}
            alt="Title"
          />
          <div className="card-body bg-dark">
            <h4 className="card-title">{product.tenSP}</h4>
            <button className="btn btn-danger" onClick={() => addCart(product)}>
              Thêm giỏ hàng
            </button>
          </div>
        </div>
      </div>
    );
  }
}
