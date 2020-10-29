import React from "react";

export default (initialState) => (FormClass) => {
  return class FormWhisState extends React.Component {
    constructor(props) {
      super(props);

      this.state = {};
      for (let key of Object.keys(initialState)) {
        this.state[key] = initialState[key];
      }
    }

    updateFormState = (event) => {
      this.setState({
        [event.target.name]: event.target.value,
      });
    };
    handleSubmit = (event,cb) => {
      event.preventDefault();
      cb();
    };

    render() {
      return (
        <FormClass
        {...this.state}
          handleSubmit={this.handleSubmit}
          updateFormState={this.updateFormState}
        />
      );
    }
  };
};
