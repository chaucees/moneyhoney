import React, { Component } from 'react';
import "./Home.css";
import { AddBtn, BackBtn, EditBtn, SaveBtn, SubmitBtn, ViewBtn, DeleteBtn } from "../../components/Buttons";

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
           </div> 
        );
    }
}

export default Home;