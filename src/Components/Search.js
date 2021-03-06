import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {
    constructor(props) {
        super(props);
       
        this.state = {
            tempValue: '',
            userObj:{}
        }
    }
    isChange = (event) => {
        console.log(event.target.value);
        this.setState({
            tempValue: event.target.value
        });
        this.props.checkConnetProps(this.state.tempValue);//hiện kết quả lập tức

    }
    getUserEditInfo = (info) =>{
        this.setState({
            userObj : info
        });
        this.props.getUserEditInfoforApp(info);

    }
    //props.changeEditUserStatus
    isShowEditForm = () =>{
         if(this.props.editUserStatus === true)
         {
             return <EditUser
             getUserEditInfo = {(info) => this.getUserEditInfo(info)}
             userEditObject = {this.props.userEditObject}
             changeEditUserStatus={()=>this.props.changeEditUserStatus()} ></EditUser>
         }
    }
  
    render() {
        return (

            <div className="col-12">
               {this.isShowEditForm()}
                <div className="form-group">
                    <div className="btn-group">
                        <input type="text" className="form-control" onChange={(event) => this.isChange(event)} placeholder="Nhập từ khóa" />
                        <div className="btn btn-info" onClick={(dl) => this.props.checkConnetProps(this.state.tempValue)}>Tìm</div>
                    </div>
                </div>
            </div>






        );
    }
}

export default Search;