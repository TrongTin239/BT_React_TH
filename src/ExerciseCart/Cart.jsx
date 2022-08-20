import React, { Component } from "react";

export default class Cart extends Component {
  render() {
    let { cartData, deleteProd,changeNum } = this.props;
    return (
      <div>
        <div
          className="modal fade"
          id="modelId"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div
              className="modal-content"
              style={{ maxWidth: "800px", width: "800px" }}
            >
              <div className="modal-header">
                <h5 className="modal-title">Giỏ hàng</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <table className="table">
                  <thead>
                    <tr>
                      <td>Mã SP</td>
                      <td>Hình ảnh SP</td>
                      <td>Tên SP</td>
                      <td> Số lượng</td>
                      <td> Đơn giá</td>
                      <td> Thành tiền</td>
                      <td></td>
                    </tr>
                  </thead>
                  <tbody>
                    {cartData.map((prod, index) => {
                      return (
                        <tr key={index}>
                          <td>{prod.maSP}</td>
                          <td>
                            <img src={prod.hinhAnh} alt="..." width={50} />
                          </td>
                          <td>{prod.tenSP}</td>
                          <td>
                          <button className="me-1 btn btn-success" onClick={()=>changeNum(prod.maSP,true)}>+</button>
                            {prod.soLuong}
                          <button className="ms-1 btn btn-success" onClick={()=>changeNum(prod.maSP,false)} >- </button>
                            
                            </td>
                          <td>{prod.giaBan}</td>
                          <td>{prod.soLuong * prod.giaBan}</td>
                          <td>
                            <button
                              className="btn btn-danger"
                              onClick={() => deleteProd(prod.maSP)}
                            >
                              Xóa
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
