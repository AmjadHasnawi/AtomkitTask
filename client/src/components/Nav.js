import React, { Component } from 'react';
import '../App.css';
import $ from 'jquery';
import axios from 'axios';


class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      student: {}
    }
  }

  filtration = () => {
    $("#myInput").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#myDIV #child").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  }

  componentDidMount() {
    axios.get('/endpoints/getStudent')
    .then((response) => {
      console.log("really", response);
      this.setState({
        student: response.data[0]
      })
    })
  }

  render() {
    return (
      <nav className="navbar navbar-expand-md bg-primary navbar-dark" style={{boxShadow:"0.5px 0.5px 0.5px 0.5px lightgrey"}}>
      
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse row" id="collapsibleNavbar">
      {/* <div className="row"> */}
      <div className="col-q-12 col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
        <ul className="navbar-nav">
        <li className="navbar-brand"><i className="fas fa-question-circle"></i></li>
          <li className="nav-item">
          <div  className="nav-link"><i style={{fontSize:"100%"}} className="far fa-bell"></i></div>
          </li>
          <li className="nav-item">
            <div  className="nav-link" ><i style={{fontSize:"100%"}} className="fas fa-comments"></i></div>
          </li>
          <li className="nav-item">
            <div className="nav-link" ><img style={{width:"28px", borderRadius:"50px"}} src={this.state.student.image} alt="picture" /></div>
          </li>  
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
              {this.state.student.firstname} {this.state.student.lastname}
            </a>
            {/* <div className="dropdown-menu">
              <a className="dropdown-item" href="#">Link 1</a>
              <a className="dropdown-item" href="#">Link 2</a>
              <a className="dropdown-item" href="#">Link 3</a>
            </div> */}
          </li>  
        </ul>
        </div>
        <div className="col-q-12 col-xs-7 col-sm-7 col-md-7 col-lg-7 col-xl-7">
      <input id="myInput" dir="rtl" type="text" style={{width:"90%", opacity:"0.3"}} className="backgroundimage" onChange={this.filtration} placeholder="ابحث عن دورات، معلمين، أوراق عمل"></input>
      </div>
      <div style={{width:"30%",marginTop:"15px"}} className="col-q-12 col-xs-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
        <img style={{width:"110px", display:"block", filter: "brightness(3)"}} src="http://turbozens.online/images/amazon-logo.png" alt="Amazon picture"/>
        <img style={{width:"50px", marginTop:"-15px", filter: "brightness(3)"}} src="https://image4.owler.com/logo/zain_owler_20171120_163025_original.png" alt="Zain picture"/>
        <p style={{display:"inline", color:"white", fontSize:"60%", position:"relative", top:"-9px" ,left:"4px"}}>بالاشتراك مع</p>
      </div>
      </div>
      {/* </div> */}
    </nav>
    )
  }    
}

export default Nav;
