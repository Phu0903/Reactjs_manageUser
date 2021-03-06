import React, { Component } from 'react';

class TableDataRow extends Component {
    permission = ()=>{
        if  (this.props.permission === 1 )
        {
            return "Admin";
        } 
        else if(this.props.permission === 1 ) {return "Mondertor"}
        else {return "Normal User";}
    }
    editClick = () =>{
        this.props.editFunClick();
        this.props.changeEditUserStatus();
    }
    render() {
        return (
            <tr>
            <td >{this.props.stt+1}</td>
            <td>{this.props.userName}</td>
            <td>{this.props.tel}</td>
            <td>
              {this.permission()}
            </td>
            <td><div className="btn btn-warning">
                <i className="fa fa-edit" onClick={()=>this.editClick()}>Sửa</i>
            </div></td>
            <td><div className="btn btn-danger">
                <i className="fa fa-recycle" aria-hidden="true">Xóa</i>
            </div></td>
        </tr>
        );
    }
}

export default TableDataRow;