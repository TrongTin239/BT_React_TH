import React, { Component } from "react";
import Cart from "./Cart";
import ProductList from "./ProductList";

const data = [
  {
    maSP: 1,
    tenSP: "VinSmart Live",
    manHinh: "AMOLED, 6.2, Full HD+",
    heDieuHanh: "Android 9.0 (Pie)",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 5700000,
    hinhAnh: "./img/vsphone.jpg",
  },
  {
    maSP: 2,
    tenSP: "Meizu 16Xs",
    manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
    heDieuHanh: "Android 9.0 (Pie); Flyme",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 7600000,
    hinhAnh: "./img/meizuphone.jpg",
  },
  {
    maSP: 3,
    tenSP: "Iphone XS Max",
    manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
    heDieuHanh: "iOS 12",
    cameraSau: "Chính 12 MP & Phụ 12 MP",
    cameraTruoc: "7 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 27000000,
    hinhAnh: "./img/applephone.jpg",
  },
];

export default class ExerciseCart extends Component {
  state = {
    cartData: [],
  };
  addCart = (prodClick) => {
    let prodCart = {
      maSP: prodClick.maSP,
      tenSP: prodClick.tenSP,
      giaBan: prodClick.giaBan,
      hinhAnh: prodClick.hinhAnh,
      soLuong: 1,
    };
    let prodUpdate = [...this.state.cartData];
    let index = prodUpdate.findIndex((sp) => sp.maSP === prodCart.maSP);
    if (index !== -1) {
      prodUpdate[index].soLuong += 1;
    } else {
      prodUpdate.push(prodCart);
    }
    this.setState({
      cartData: prodUpdate,
    });
  };

  deleteProd = (maSP) => {
    let prodUpdate = [...this.state.cartData];
    let index = prodUpdate.findIndex((sp) => sp.maSP === maSP);
    if (index !== -1) {
      prodUpdate.splice(index, 1);
    }
    this.setState({
      cartData: prodUpdate,
    });
  };
  changeNum = (maSp, value) => {
    let prodUpdate = [...this.state.cartData];
    let index = prodUpdate.findIndex((sp) => sp.maSP === maSp);
    if (value) {
      prodUpdate[index].soLuong += 1;
    } else {
      if (prodUpdate[index].soLuong > 1) {
        prodUpdate[index].soLuong -= 1;
      }
    }
    this.setState({
      cartData: prodUpdate,
    });
  };
  render() {
    let totalNum = this.state.cartData.reduce((num, prod, index) => {
      return (num += prod.soLuong);
    }, 0);
    return (
      <div className="container">
        <h3 className="text-center mb-5">Bài Tập Giỏ Hàng</h3>
        <Cart
          cartData={this.state.cartData}
          deleteProd={this.deleteProd}
          changeNum={this.changeNum}
        />
        <div className="text-right mb-1" style={{ textAlign: "right" }}>
          <span
            className="text-danger bold"
            style={{ cursor: "pointer", fontSize: "17px", fontWeight: "bold" }}
            data-bs-toggle="modal"
            data-bs-target="#modelId"
          >
            Giỏ hàng ({totalNum})
          </span>
        </div>
        <ProductList addCart={this.addCart} productlist={data} />
      </div>
    );
  }
}
