import React, { Component } from 'react';
import "./Home.css";
// ADDED BUTTONS FOR TESTING
import { AddBtn, BackBtn, EditBtn, SaveBtn, SubmitBtn, ViewBtn, DeleteBtn, AddBtnAlt } from "../../components/Buttons";

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
           </div> 
        );
    }
}

export default Home;