import React,{Component} from 'react';
import {Breadcrumb,BreadcrumbItem, Button,Form,FormGroup,FormFeedback,Label,Input,Col} from 'reactstrap';
import {Link} from 'react-router-dom';
class Contact extends Component{


    constructor(props){
        super(props);
        this.state={
            firstName:'',
            lastName:'',
            telNum:'',
            email:'',
            agree:false,
            contactType:'Tel.',
            message:'',
            touched:{
                firstName:false,
                lastName:false,
                telNum:false,
                email:false
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBlur=this.handleBlur.bind(this);
    }

    handleInputChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked :target.value;
        const name = target.name;
        this.setState({
            [name]:value
        });
    }
    handleSubmit(event){
        console.log('current state'+JSON.stringify(this.state))
        event.preventDefault();
    }

    handleBlur = (feild)=>(evt)=>{
        this.setState({
            touched:{...this.state.touched,[feild]:true}
        })
    }
    validate(firstName,lastName,telNum,email){
        const errors={
            firstName:'',
            lastName:'',
            telNum:'',
            email:'',
        };

        if(this.state.touched.firstName && firstName.length < 3)
        {
            errors.firstName="first name should be >= 3 charachters "
        } else if(this.state.touched.firstName && firstName.length > 10)
        {
            errors.firstName="first name should be <= 10 charachters "
        } if(this.state.touched.lastName && lastName.length < 3)
        {
            errors.lastName="last name should be >= 3 charachters "
        } else if(this.state.touched.lastName && lastName.length > 10)
        {
            errors.lastName="last name should be <= 10 charachters "
        }
        const reg = /^\d+$/;
        if(this.state.touched.telNum&& ! reg.test(telNum) ){
            errors.telNum="tel number should contain only numbers";
        }
        if (this.state.touched.email && email.split('').filter(x=>x==='@'.length!==1))
        {
            errors.email="email should contain @ sign  "
        }
        return errors;
    }
  render(){ 
      const errs = this.validate(this.state.firstName,this.state.lastName,this.state.telNum,this.state.email);
    return(
        <div className="container">
             <div className="row">
              <Breadcrumb>
                <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                <BreadcrumbItem active>Contact</BreadcrumbItem>
              </Breadcrumb>
              </div>
            <div className="row row-content">
                <div className="col-12">
                <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                        121, Clear Water Bay Road<br />
                        Clear Water Bay, Kowloon<br />
                        HONG KONG<br />
                        <i className="fa fa-phone"></i>: +852 1234 5678<br />
                        <i className="fa fa-fax"></i>: +852 8765 4321<br />
                        <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of our Location</h5>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info" href="/"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h3>Send Us Your Feedback .</h3>

                </div>
                <div className="col-12 col-md-9">
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup row>
                            <Label htmlFor="firstName" md={2}>First Name</Label>
                            <Col md={10}>
                                <Input type="text" id="firstName"
                                 name="firstName" placeholder="First Name"
                                  value={this.state.firstName}
                                  valid={errs.firstName === ''}
                                  invalid={errs.firstName !== ''}
                                  onChange={this.handleInputChange}
                                  onBlur={this.handleBlur('firstName')}
                                  /> 
                                  <FormFeedback>{errs.firstName}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="lastName" md={2}>Last Name</Label>
                            <Col md={10}>
                                <Input type="text" id="lastName" name="lastName" placeholder="Last Name"         valid={errs.lastName === ''}
                                  invalid={errs.lastName !== ''}   onChange={this.handleInputChange} onBlur={this.handleBlur('lastName')} value={this.state.lastName}/> 
                                <FormFeedback>{errs.lastName}</FormFeedback>

                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="telnum" md={2}>Contact Telephone </Label>
                            <Col md={10}>
                                <Input type="tel" id="telnum" name="telNum" placeholder="Contact Telephone"   valid={errs.telNum === ''}
                                  invalid={errs.telNum !== ''}  onChange={this.handleInputChange} onBlur={this.handleBlur('telNum')} value={this.state.telNum}/> 
                                <FormFeedback>{errs.telNum}</FormFeedback>

                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="email" md={2}>Email </Label>
                            <Col md={10}>
                                <Input type="tel" id="email" name="email" placeholder="Email"          valid={errs.email === ''}
                                  invalid={errs.email !== ''}  onChange={this.handleInputChange} onBlur={this.handleBlur('email')} value={this.state.email}/> 
                                <FormFeedback>{errs.email}</FormFeedback>

                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md={{size:6,offset:2}}>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" name="agree" checked={this.state.agree}    onChange={this.handleInputChange}/>
                                        <strong>
                                            May We Contact You?
                                            </strong>
                                    </Label>
                                </FormGroup>
                            </Col>
                            <Col md={{size:3,offset:1}}>
                                <Input type="select" name="contactType" value={this.state.contactType}    onChange={this.handleInputChange}>
                                        <option>Tel.</option>
                                        <option>Email.</option>
                                
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="message" md={2}>Your Feedback </Label>
                            <Col md={10}>
                                <Input type="textarea" id="message" name="message" rows="12" value={this.state.message}    onChange={this.handleInputChange}></Input> 
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md={{size:10,offset:2}}>
                            <Button type="submit" color="primary">
                                send Feedback
                            </Button>
                            </Col>
                        </FormGroup>
                    </Form>

                </div>
            </div>
        </div>
    );
}

}
export default Contact;