
import './../App.css';
import AddUser from './AddUser';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import DataUser from './Data.json';
import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';



class App extends Component {
  constructor(props){
    super(props);
    this.state={
      data : DataUser,
      searchText:'',
      editUserStatus:false,
      userEditObject:{}
    }
  }

  getNewUserData = (name,tel,Permission) =>{
    var item ={};
     item.id = uuidv4();
     item.name = name;
     item.tel = tel;
     item.Permission = Permission;
     var items = this.state.data;
     items.push(item);
     this.setState({
       data:items
     })
       console.log('ket noi oke');
      console.log(this.state.data);
  }

  getTextSearch = (dl) =>{
    this.setState({
      searchText:dl
    })
  }
   changeEditUserStatus = ()=>{
     this.setState({
       editUserStatus : !this.state.editUserStatus
     })
   }
  editUser = (user)=>{
    console.log("Đã kết nối");
    this.setState({
      userEditObject:user
    })
    console.log(user)
  }
  getUserEditInfoforApp = (info)=>{
   
    this.state.data.forEach((value,key) => {
        if(value.id === info.id)
        {
          value.name = info.name;
          value.tel = info.tel;
          value.Permission = info.Permission;
        }
    })
   
  }

  deleteUser = (idUser) =>{
    var tempData = this.state.data;
    tempData = tempData.filter(item => item.id !== idUser) // lọc id
        this.setState({
      data:tempData
    })
  }

  render() {
  
    var ketqua =[];
   
    this.state.data.forEach((item)=>{
         if(item.name.indexOf(this.state.searchText) !== -1){
           ketqua.push(item);
         }
    })
   
    return (
      <div className="App">
     <Header></Header>
     <div className="searchForm">
       <div className="container">
          <div className="row">
              <Search
              getUserEditInfoforApp = {(info)=> this.getUserEditInfoforApp(info)}
              userEditObject={this.state.userEditObject}
              checkConnetProps={(dl)=>this.getTextSearch(dl)}
              editUserStatus={this.state.editUserStatus}
              changeEditUserStatus = {() => this.changeEditUserStatus()}
              ></Search>
            
              <TableData  
              deleteUser = {(idUser)=>this.deleteUser(idUser)}
              changeEditUserStatus = {() => this.changeEditUserStatus()} editFun={(user)=>this.editUser(user)} DataUserProps={ketqua}> </TableData>
              <AddUser add={(name,tel,Permission)=>this.getNewUserData(name,tel,Permission)}></AddUser>
             
          </div>
       </div>
     </div>
   </div>
    );
  }
}



export default App;
