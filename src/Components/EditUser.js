import React, { Component } from 'react';

class EditUser extends Component {
  constructor(props) {
      super(props);
      this.state = {
          id : this.props.userEditObject.id,
          name : this.props.userEditObject.name,
          tel : this.props.userEditObject.tel,
          Permission : this.props.userEditObject.Permission,
          

      }
  }
  
    isChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]:value});


    }

    saveButton = () =>{
       
        var info = {};
        info.id = this.state.id;
        info.name = this.state.name;
        info.tel = this.state.tel;
        info.Permission = this.state.Permission;
        this.props.getUserEditInfo(info);
        this.props.changeEditUserStatus();
    }
    //props.userEditObject
    render() {
        console.log(this.state)
        return (
            <div className="row">
            <form method="post">
                <div className="card  mb-3 mt-2">
                    <div className="card-body ">
                        <h4 className="card-title">Thêm mới user vào hệ thống</h4>
                        <div className="form-group">
                           
                            <input onChange={(event) => this.isChange(event)} defaultValue={this.props.userEditObject.name} type="text"  name="name"  className="form-control" placeholder="Tên User" aria-describedby="helpId" />
                        </div>
                        <div className="form-group">
                           
                            <input onChange={(event) => this.isChange(event)} defaultValue={this.props.userEditObject.tel} type="text"  name="tel"  className="form-control" placeholder="Điện Thoại" aria-describedby="helpId" />
                        </div>
                        <div className="form-group">
                            
                            <select onChange={(event) => this.isChange(event)} defaultValue={this.props.userEditObject.Permission} className="form-control" name="Permission"  >
                                <option>Chọn quyền mặc định</option>
                                <option>Admin</option>
                                <option>Modrator</option>
                                <option value="">Normal</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <input type="button"
                             className="btn btn-primary"
                              value="Lưu thông tin" 
                              onClick={()=>this.saveButton()} />
                        </div>
                    </div>
                </div>
            </form>
        </div>

        );
    }
}

export default EditUser;