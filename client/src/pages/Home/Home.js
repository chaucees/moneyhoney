import React, { Component } from 'react';
import "./Home.css";
// ADDED BUTTONS FOR TESTING
import { LoginBtn, AddBtn, BackBtn, EditBtn, SaveBtn, SubmitBtn, ViewBtn, DeleteBtn, AddBtnAlt } from "../../components/Buttons";
//ADDED FORMS FOR TESTING ALSO
// import { LoginForm, SignupNameForm, SignupPasswordForm } from "../../components/Forms";

class Home extends Component {

    render() {
        return (
            <div>
           <p>Home and Login Page</p>
           <AddBtn />
           <BackBtn />
           <EditBtn />
           <SaveBtn />
           <SubmitBtn />
           <ViewBtn />
           <DeleteBtn />
           <AddBtnAlt />
           <LoginBtn />
           {/* <LoginForm />
           <SignupNameForm />
           <SignupPasswordForm /> */}
           </div> 
        );
    }
}

export default Home;