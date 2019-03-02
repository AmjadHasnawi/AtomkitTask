import React, { Component } from 'react';
import axios from 'axios';
import { Redirect, Link } from 'react-router-dom';
import {storage} from '../firebase';
import Swal from 'sweetalert2';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';


const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});


class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      field: '',
      coursename: '',
      subjectname: '',
      price: '',
      numberofhours: '',
      image: null,
      imageURL: ''
    }
  }
  
  componentDidMount() {
  }
    
  sweetAlert = (message) => {
    Swal.fire({
      title: '!خطأ',
      text: message,
      type: 'error',
      confirmButtonText: 'Close'
    })
  }
  
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
    
  

  handleSubmit = (event) => {
    if (this.state.firstname === '') {
      this.sweetAlert('يجب اضافة الاسم الأول');
    } else if (this.state.lastname === '') {
      this.sweetAlert('يجب اضافة اسم العائلة');
    } else if (this.state.email === '') {
      this.sweetAlert('يجب اضافة الايميل ');
    } else if (this.state.field === '') {
      this.sweetAlert('يجب اضافة تصنيف الدورة');
    } else  if (this.state.coursename === '') {
      this.sweetAlert('يجب اضافة اسم الدورة');
    } else if (this.state.subjectname === '') {
      this.sweetAlert('يجب اضافة مجال الدورة');
    } else if (this.state.price === '') {
      this.sweetAlert('يجب اضافة سعر الدورة');
    } else if (this.state.numberofhours === '') {
      this.sweetAlert('يجب اضافة عدد ساعات الدورة');
    } else if (this.state.imageURL === '') {
      this.sweetAlert('يجب اضافة صورة شخصية');
    } else {
      event.preventDefault()
      const createCourse = {
        firstName: this.state.firstname,
        lastName: this.state.lastname,
        email: this.state.email,
        field: this.state.field,
        courseName: this.state.coursename,
        subjectName: this.state.subjectname,
        price: this.state.price,
        numberOfHours: this.state.numberofhours,
        imageURL: this.state.imageURL
      } 
  
      axios.post('/endpoints/createCourse', createCourse)
      .then(response => {
       console.log(response.data);
      })
    }  
  }

  handleImage = (e) => {
    if(e.target.files[0]) {
      this.setState({
        image: e.target.files[0]
      })
    }
  }

  handleUpload = (event) => {
    event.preventDefault()

    const uploadImage = storage.ref(`images/${this.state.image.name}`).put(this.state.image);
    uploadImage.on('state_changed', (snapshot) => {

    }, (error) => {
        console.log(error)
    }, () => {
        storage.ref('images').child(this.state.image.name).getDownloadURL().then(url => {
            console.log(url);
            this.setState({
                imageURL: url
            })
        })
    });
  }

  render(){
    const { classes } = this.props;
      return (
        <div style={{margin:"50px"}}>
          <main className={classes.main}>
            <CssBaseline />
            <Paper className={classes.paper}>
              <Typography component="h1" variant="h5" style={{fontSize:"2em", margin:"15px"}}>
                اضافة دورة جديدة
              </Typography>
              <form className={classes.form}>
              <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="firstname">الاسم الأول</InputLabel>
                  <Input id="firstname"  dir="rtl" name="firstname" autoComplete="firstname" autoFocus onChange={this.handleChange} />
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="lastname">اسم العائلة</InputLabel>
                  <Input id="lastname" dir="rtl" name="lastname" autoComplete="lastname" onChange={this.handleChange} />
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="email">الايميل</InputLabel>
                  <Input id="email" dir="rtl" name="email" autoComplete="email" onChange={this.handleChange} />
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="field">التصنيف: علمي، أدبي، صناعي</InputLabel>
                  <Input id="field" dir="rtl" name="field" autoComplete="field" onChange={this.handleChange} />
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="coursename">اسم الدورة</InputLabel>
                  <Input id="coursename" dir="rtl" name="coursename" autoComplete="coursename" onChange={this.handleChange} />
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="subjectname">مجال الدورة: حاسوب، رياضيات، علوم</InputLabel>
                  <Input id="subjectname" dir="rtl" name="subjectname" autoComplete="subjectname" onChange={this.handleChange} />
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="price">السعر</InputLabel>
                  <Input name="price" dir="rtl" type="price" id="price" autoComplete="price" onChange={this.handleChange}/>
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="numberofhours">عدد ساعات الدورة</InputLabel>
                  <Input name="numberofhours" dir="rtl" type="numberofhours" id="numberofhours" autoComplete="numberofhours" onChange={this.handleChange}/>
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                  نرجوا إرفاق الصورةالشخصية مع الطلب<input type="file" style={{margin:"10px 10px 10px 0px"}} onChange={this.handleImage} />
                  <button className="btn btn-primary" onClick={this.handleUpload}>تحميل</button>
                </FormControl>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={this.handleSubmit}
                >
                  انشاء الدورة
                </Button>
              </form>
            </Paper>
          </main>
        </div>
      )
  }
}

export default withStyles(styles)(Signin);