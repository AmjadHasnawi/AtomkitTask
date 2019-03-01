import React, { Component } from 'react';
import axios from 'axios';
import $ from 'jquery';
import '../App.css';




class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teachers : [],
      category: "الجميع"
    }
  }

  componentDidMount() {
    axios.get('/endpoints/getTeachers').
      then((response) => {
        console.log('hello world', response.data)
        this.setState({
          teachers : response.data
        })
      })
      .catch((err) => {
          console.log(err)
      })
  }

  filter = (category) => {
    console.log("category", category)
    this.setState({
      category: category
    })
  }

  render() {
    return (
      <div style={{marginBottom:"3px"}}>
        <div className="row">
          <div className="col-s-9 col-md-9 col-lg-9 col-xl-9" dir="rtl">
            <div style={{boxShadow:"0.5px 0.5px 0.5px 0.5px lightgrey", margin:"10px", padding:"7px", borderRadius:"5px", fontSize:"70%"}}>
              <p style={{display:"inline", margin:"5px"}}>بحث و تصنيف:</p>
              <p style={{display:"inline", margin:"5px", cursor:"pointer"}} onClick={() =>{this.filter("الجميع")}} >الجميع</p>
              <p style={{display:"inline", margin:"5px", cursor:"pointer"}} onClick={() =>{this.filter("علمي")}} >علمي</p>
              <p style={{display:"inline", margin:"5px", cursor:"pointer"}} onClick={() =>{this.filter("أدبي")}} >أدبي</p>
              <p style={{display:"inline", margin:"5px", cursor:"pointer"}} onClick={() =>{this.filter("صناعي")}} >صناعي</p>
              {/* <p style={{display:"inline", margin:"5px"}} >مواد تخصص : </p>
              <p style={{display:"inline", margin:"5px"}} >مواد مشتركة : </p>
              <p style={{display:"inline", margin:"5px"}} >السعر : </p> */}
            </div>
            <div className="row">
            {this.state.teachers.map((teacher) => {
              if (this.state.category === "الجميع") {
                return (
                  <div className="col-xl-2 col-lg-3 col-md-4 col-sm-12">
                    <div className="card gridCenter">
                      <img className="card-img-top" src={teacher.image} alt="Card image" style={{width:"100%"}} />
                      <div className="card-body">
                        <h4 className="card-title">{teacher.firstname}</h4>
                        <p className="card-text">Contact: {teacher.email}</p>
                        <a href="#" className="btn btn-primary">See Profile</a>
                      </div>
                    </div>
                  </div>
                )
              }
              if (teacher.category === this.state.category) {
                return (
                  <div className="col-xl-2 col-lg-3 col-md-4 col-sm-12">
                    <div className="card gridCenter">
                      <img className="card-img-top" src={teacher.image} alt="Card image" style={{width:"100%"}} />
                      <div className="card-body">
                        <h4 className="card-title">{teacher.firstname}</h4>
                        <p className="card-text">Contact: {teacher.email}</p>
                        <a href="#" className="btn btn-primary">See Profile</a>
                      </div>
                    </div>
                  </div>
                )
              }
            })}
            </div>
          </div>
          <div className="col-s-3 col-md-3 col-lg-3 col-xl-3" style={{boxShadow:"1px 1px 1px 1px lightgrey"}}>
            <h1>Hello Again</h1>
          </div>
        </div>
      </div>
    )
  }    
}

export default Home;
