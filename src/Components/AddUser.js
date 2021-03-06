import React, { Component } from 'react';

class AddUser extends Component {

  
  constructor(props) {
    super(props);
    this.state = {
      trangThaiChinhSua: true,
      id:"",
      name:"",
      tel:"",
      Permission:"",

    }
  }

  isChange = (event) =>{
    const name = event.target.name;
    const value = event.target.value;
   
    this.setState({
       [name]:value
     });

     //pakge to item
    
    
}
  //// Thay đổi trạng thái của nút
  thayDoiTrangThai = () => {
    this.setState({
      trangThaiChinhSua: !this.state.trangThaiChinhSua
    })
  }
  ///
  hienThinnut = () => {
    if (this.state.trangThaiChinhSua === false) {
      return <div className="btn btn-block btn-outline-secondary" onClick={()=>this.thayDoiTrangThai()}>Đóng lại</div>;
    }
    else {
      return <div className="btn btn-block btn-outline-info" onClick={()=>this.thayDoiTrangThai()}>Thêm mới</div>;
    }
  }
  ////////////Hiển thị form
  hienThiform = () =>{
    if(this.state.trangThaiChinhSua === false)
    {
      return(
        <form>
      <div className="card text-left mb-3 mt-2">
      <div className="card-body ">
        <h4 className="card-title">Thêm mới user vào hệ thống</h4>
        <div className="form-group">
          <label htmlFor />
          <input type="text" onChange={(event)=>this.isChange(event)} name="name"  className="form-control" placeholder="Tên User" aria-describedby="helpId" />
        </div>
        <div className="form-group">
          <label htmlFor />
          <input type="text"  onChange={(event)=>this.isChange(event)} name="tel"  className="form-control" placeholder="Điện Thoại" aria-describedby="helpId" />
        </div>
        <div className="form-group">
          <label htmlFor />
          <select className="form-control" name="Permission"  onChange={(event)=>this.isChange(event)} >
            <option value="">Chọn quyền mặc định</option>
            <option value="">Admin</option>
            <option value="">Modrator</option>
            <option value="">Normal</option>
          </select>
        </div>
        <div className="form-group">
          <input type="reset" className="btn btn-primary" onClick = {(name,tel,Permission)=>this.props.add(this.state.name,this.state.tel,this.state.Permission)} value="Thêm mới"/>
        </div>
      </div>
    </div>
    </form>
      )
    }
  }



  render() {
   
    return (
      <div className="col-3">
      {this.hienThinnut()}
      {this.hienThiform()}
      </div>

    );
  }
}

export default AddUser;