import React from "react";

export default class FormWhisState extends React.Component {

    constructor(props) {
        super(props)
    //anti patern!!!!!!!!!!!!!
        this.state = props.initialState;
    

    }
    
    updateFormState = (event) => {
        this.setState({
          [event.target.name]: event.target.value,
        });
      };
      

    handleSubmit = (event) => {
        event.preventDefault();
       this.props.cb(this.state);
      };
  
  render() {
    return this.props.render(this.updateFormState,this.handleSubmit,this.state);
  }
}
