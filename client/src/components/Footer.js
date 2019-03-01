import React, { Component } from 'react';
import '../App.css';


class Footer extends Component {
  render() {
    return (
      <div style={{backgroundColor:'#001527', color:"white"}}>
        <div className="row" style={{width:"95%", paddingTop:"40px"}}>
          <div className="col-q-12 col-sm-5 col-md-5 col-lg-2 col-xl-2">
            <div className="gridCenter" style={{marginBottom:"10px"}}>
            <b><p className="gridLeft" >من نحن</p></b>
            <p className="gridLeft" >أمازون</p>
            <p className="gridLeft" >الشروط و الأحكام</p>
            <p className="gridLeft" >سياسة الخصوصية</p>
            <p className="gridLeft" >نقاط البيع</p>
            </div>
          </div>
          <div className="col-q-12 col-sm-7 col-md-7 col-lg-4 col-xl-4" style={{marginBottom:"30px"}}>
            <div className="gridCenter" >
            <b><p className="gridLeft" >من نحن</p></b>
            <p className="gridLeft" >أمازون</p>
            <p className="gridLeft" >الشروط و الأحكام</p>
            <p className="gridLeft" >سياسة الخصوصية</p>
            <p className="gridLeft" >نقاط البيع</p>
            <p className="gridLeft" > </p>
            <p className="gridLeft" > </p>
            <b><p className="gridLeft">حمل تطبيق أمازون على موبايلك</p></b>
            <div className="row gridLeft">
            <div className="col-q-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
              <img style={{width:"100%", marginTop:"-5.5%"}} src="https://play.google.com/intl/ar/badges/images/generic/ar_badge_web_generic.png" alt="google play احصل عليه من"/>
            </div>
            <div className="col-q-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
              <img  style={{width:"90%"}} src="https://static.easymarkets.com/assets/assets/view/app-store-apple-ar.svg" alt="app store حمل من"/>
            </div>
            </div>
            </div>
          </div>
          <div className="col-q-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
            <div className="gridCenter">
              <b><p className="gridLeft">الدعم</p></b>
              <p className="gridLeft" >اتصل بنا</p>
              <p className="gridLeft" >الأسئلة الأكثر شيوعا</p>
              <p className="gridLeft" >منظار</p>
              <p className="gridLeft" >نقاط البيع</p>
              <p className="gridLeft" >أستاذي</p>
              <p className="gridLeft" >شبابيك</p>
              <p className="gridLeft" >ألعاب</p>
              <p className="gridLeft" >المدونة</p>
            </div>
          </div>
          <div className="col-q-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
            <div className="gridCenter">
              <b><p className="gridLeft" >روابط سريعة</p></b>
              <p className="gridLeft" >جروبات أمازون</p>
              <p className="gridLeft" >دبلومات و دورات</p>
              <p className="gridLeft" >المدارس و الجامعات </p>
              <p className="gridLeft" >بنك الأسئلة</p>
              <p className="gridLeft" >احسب معدلك</p>
              <p className="gridLeft" >الجدول الدراسي</p>
              <p className="gridLeft" >معلمون</p>
              <p className="gridLeft" >كتب الوزارة و أجوبتها</p>
            </div>
          </div>
        </div>
        <div className="row" style={{padding:"70px 0px 20px 0px"}}>
          <div className="col-md-4 text-center" style={{marginTop:"10px"}}> 2018 &copy; جميع الحقوق محفوظة</div>
          <div className="col-md-4 text-center" style={{marginTop:"10px"}}>
            <i style={{fontSize:"25px", margin:"0px 15px 0px 15px"}} className="fab fa-facebook-f"></i>
            <i style={{fontSize:"25px", margin:"0px 15px 0px 15px"}} className="fab fa-twitter"></i>
            <i style={{fontSize:"25px", margin:"0px 15px 0px 15px"}} className="fab fa-instagram"></i>
            <i style={{fontSize:"25px", margin:"0px 15px 0px 15px"}} className="fab fa-youtube"></i>
            <i style={{fontSize:"25px", margin:"0px 15px 0px 15px"}} className="fab fa-whatsapp"></i>
            <i style={{fontSize:"25px", margin:"0px 15px 0px 15px"}} className="far fa-envelope"></i>
          </div>
          <div className="col-md-4 text-center" style={{marginTop:"10px"}}>Atomkit <i style={{color:"red"}} className="fas fa-heart"></i> صنع بحب</div>
        </div>
      </div>
    );
  }
}

export default Footer;
