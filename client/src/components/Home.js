import React, { Component } from 'react';
import axios from 'axios';
import $ from 'jquery';
import '../App.css';
import { Redirect, Link } from 'react-router-dom';




class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses : [],
      clone: [],
      subjects: [],
      category: "الجميع",
      incDec: [],
    }
  }

  componentDidMount() {
    axios.get('/endpoints/getCourses').
      then((response) => {
        this.setState({
          courses : response.data,
          clone: response.data
        })
      })
      .catch((err) => {
          console.log(err)
      })
      axios.get('/endpoints/getSubjects').
      then((response) => {
        this.setState({
          subjects : response.data
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

  openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
  }

  incDec = (e) => {
    let incDec;
    if (e.target.value === "increment") {
      this.state.courses.sort((a, b) => {
        return a.price - b.price;
      })
    } else if (e.target.value === "decrement") {
      this.state.courses.sort((a, b) => {
        return b.price - a.price;
      })
    } 
    this.setState({
      clone : this.state.courses
    })
  }

  render() {
    return (
      <div>
     
      <div style={{marginBottom:"3px"}}>
        <div className="row">
          <div className="col-sm-12 col-md-9 col-lg-9 col-xl-9" dir="rtl">
            <div style={{boxShadow:"0.5px 0.5px 0.5px 0.5px lightgrey", margin:"20px", padding:"7px", borderRadius:"5px", fontSize:"100%"}}>
              <p style={{display:"inline", margin:"5px"}}>بحث و تصنيف:</p>
              <p style={{display:"inline", margin:"5px", cursor:"pointer"}} onClick={() =>{this.filter("الجميع")}} >الجميع</p>
              <p style={{display:"inline", margin:"5px", cursor:"pointer"}} onClick={() =>{this.filter("علمي")}} >علمي</p>
              <p style={{display:"inline", margin:"5px", cursor:"pointer"}} onClick={() =>{this.filter("أدبي")}} >أدبي</p>
              <p style={{display:"inline", margin:"5px", cursor:"pointer"}} onClick={() =>{this.filter("صناعي")}} >صناعي</p>
              <p style={{display:"inline", margin:"5px"}} >مواد تخصص : </p>
              <select style={{width:"5em", borderRadius:"20px", fontSize:"0.8em"}}>
                <option value="all">الجميع</option>
              </select>
              <p style={{display:"inline", margin:"5px"}} > مواد مشتركة : </p>
              <select style={{width:"5em", borderRadius:"20px", fontSize:"0.8em"}}>
                <option value="all">الجميع</option>
              </select>
              <p style={{display:"inline", margin:"5px"}} > السعر : </p>
              <select style={{width:"5em", borderRadius:"20px", fontSize:"0.9em"}} onChange={this.incDec}>
                <option value="all">الجميع</option>
                <option value="increment">تصاعدي</option>
                <option value="decrement">تنازلي</option>
              </select>
            </div>
            <div id="myDIV" className="row">
            {this.state.clone.map((course) => {
              if (this.state.category === "الجميع") {
                return (
                  <div id="child" className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                    <div  className="card gridCenter">
                      <img className="card-img-top" src={course.image} alt="Card image" style={{width:"100%"}} />
                      <div className="card-body">
                        <p className="card-title"> الأستاذ:{course.firstname}{course.lastname}</p>
                        <p className="card-text">الدورة: {course.courseName}</p>
                        <p className="card-text">سعر الدورة: {course.price} دينار</p>
                        <p className="card-text">مدة الدورة: {course.numberOfHours} ساعة</p>
                        <Link to="/createCourse" className="btn btn-primary">أضف دورة</Link>
                      </div>
                    </div>
                  </div>
                )
              }
              if (course.field === this.state.category) {
                return (
                  <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
                    <div className="card gridCenter">
                      <img className="card-img-top" src={course.image} alt="Card image" style={{width:"100%"}} />
                      <div className="card-body">
                        <p className="card-title"> الأستاذ:{course.firstname}{course.lastname}</p>
                        <p className="card-text">الدورة: {course.courseName}</p>
                        <p className="card-text">سعر الدورة: {course.price} دينار</p>
                        <p className="card-text">مدة الدورة: {course.numberOfHours} ساعة</p>
                        <Link to="/createCourse" className="btn btn-primary">أضف دورة</Link>
                      </div>
                    </div>
                  </div>
                )
              }
            })}
            </div>
          </div>
          <div className="col-s-3 col-md-3 col-lg-3 col-xl-3" style={{boxShadow:"1px 1px 1px 1px lightgrey", marginLeft:"-16px"}}>
          <div id="mySidenav" className="sidenav">
            <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>&times;</a>
            {this.state.subjects.map((subject) => {
              return(
               <a href="#">{subject.subjectName}</a>
              )
            })}
          </div>
            <div style={{cursor:"pointer"}} dir="rtl">
            <p  style={{display:"inline", margin:"5px", fontSize:"20px", float:"right"}} onClick={this.openNav}>المواد المطروحة</p>
            <i style={{float:"right", margin:"15px 5px 0px 0px", fontSize:"17px", color:"darkblue"}} className="fas fa-chevron-circle-left" onClick={this.openNav}></i>
            <Link to="/createCourse" style={{margin:"5px", fontSize:"20px", float:"right", clear:"right", color:"black", textDecoration:"none"}}>اضافة دورة جديدة</Link>
            <Link to="/createCourse"><i style={{float:"right", margin:"15px 5px 0px 0px", fontSize:"17px", color:"darkblue"}} className="fas fa-chevron-circle-left"></i></Link>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }    
}

export default Home;
