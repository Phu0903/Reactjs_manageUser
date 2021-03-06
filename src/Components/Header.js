import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
              <div className="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="display-3">Project quản lý thành viên bằng React JS</h1>
    <p className="lead">Với dữ liệu Json</p>
    <hr className="my-2" />
    <p>More info</p>
    <p className="lead">
      <a className="btn btn-primary btn-lg" href="Jumbo action link" role="button">Jumbo action name</a>
    </p>
  </div>
</div>

            </div>
        );
    }
}

export default Header;