import React from 'react';
import reactDom from 'react-dom';
import '../css/styles.css';

const Header = (props) => {

    // state = {
    //     // active : false,
    //     keywords : ''
    // }

    // inputChangeHandler=(event)=>{
    //     // const value = event.target.value === '' ? false : true;
    //     this.setState({
    //         // active:value,
    //         keywords:event.target.value
    //     })
    // }
        // console.log(this.props.keywords)
        // const style = {
        //     backgroundColor : 'red'
        // }

        // if(this.state.keywords!='')
        //     style.backgroundColor = 'blue'
        // else
        //     style.backgroundColor = 'red'

        return(
            // <header style = {{backgroundColor : `${this.state.active? 'red' : 'blue'}`}}>
            <header>
                <div className="logo">Logo</div>
                <input type="text" onChange={props.keywords}/>
            </header>
        )
}

export default Header;