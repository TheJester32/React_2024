import React from "react";

class FormTask extends React.Component {
    state = {
        email: '',
        agreement: false,
        send: false
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleCheckboxChange = (e) => {
        this.setState({ [e.target.name]: e.target.checked });
    }

    handleSend = () => {
        if(this.state.agreement === true && /^\S+@\S+\.\S+$/.test(this.state.email) === true && this.state.email !== ''){
            this.setState({ send: !this.state.send }, () => {
                this.showEmailSent();
                this.clearFields();
            });
        }
    }

    validateEmail = () => {
        if (!/^\S+@\S+\.\S+$/.test(this.state.email)) {
            alert("Email is not valid");
        }
    }

    showEmailSent = () =>{
        if(this.state.send === true){
            alert('The form has sent');
        }
    }

    clearFields = () =>{
        this.setState({email: ''});
        this.setState({agreement: false});
        this.setState({send: false});
    }

    render() {
        const { email, agreement } = this.state;
    
        return (
            <div>
                <br />
                <br />
                <input
                    type="email"
                    name="email"
                    placeholder="email"
                    value={email}
                    onChange={this.handleChange}
                    onBlur={this.validateEmail}
                />
                <br />
                <label>
                    <input
                        type="checkbox"
                        name="agreement"
                        checked={agreement}
                        onChange={this.handleCheckboxChange}
                    />
                    I agree with all terms and conditions
                </label>
                <br />
                <button 
                    onClick={() => {
                        this.handleSend();
                    }}
                >  
                Send</button>
            </div>
        );
    }
}

export { FormTask };