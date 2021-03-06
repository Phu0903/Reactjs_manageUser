import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableData extends Component {
    mappingDataUser = () =>
            this.props.DataUserProps.map((value,key) =>(
                  <TableDataRow
                  changeEditUserStatus = {() => this.props.changeEditUserStatus()}
                  editFunClick={(user)=>this.props.editFun(value)} userName={value.name} key={key} stt={key} tel={value.tel} permission={value.Permission}></TableDataRow>
            ))
    render() {
        //console.log(this.props.DataUserProps);
        
           
        
        return (
            <div className="col-9">
                <table className="table table-striped table-inverse table-hover">
                    <thead className="thead-inverse">
                        <tr>
                            <th>STT</th>
                            <th>Tên</th>
                            <th>Điện Thoại</th>
                            <th>Quyền</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.mappingDataUser()}
                      
                    </tbody>
                </table>
            </div>


        );
    }
}

export default TableData;