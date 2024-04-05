import React from "react";

class Form extends React.Component {
    state = {
        firstName: '',
        email: '',
        message: '',
        select: '',
        subscription: false,
        gender: ''
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleCheckboxChange = (e) => {
        this.setState({ [e.target.name]: e.target.checked });
    }

    validateName = () => {
        if (this.state.firstName.length < 5) {
            alert("Your first name can't be less than 5 letters");
        }
    }

    validateEmail = () => {
        if (!/^\S+@\S+\.\S+$/.test(this.state.email)) {
            alert("Email is not valid");
        }
    }

    render() {
        const { firstName, email, message, select, subscription } = this.state;

        return (
            <div>
                <input
                    type="text"
                    name="firstName"
                    placeholder="firstName"
                    value={firstName}
                    onChange={this.handleChange}
                    onBlur={this.validateName}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="email"
                    value={email}
                    onChange={this.handleChange}
                    onBlur={this.validateEmail}
                />

                <br />
                <textarea
                    name="message"
                    value={message}
                    onChange={this.handleChange}
                />

                <select name="select" value={select} onChange={this.handleChange}>
                    <option value="" disabled></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <br />
                <label>
                    <input
                        type="checkbox"
                        name="subscription"
                        checked={subscription}
                        onChange={this.handleCheckboxChange}
                    />
                    Subscription
                </label>
                <br />
                <input
                    type="radio"
                    name="gender"
                    value="male"
                    onChange={this.handleChange}
                />
                Male
                <input
                    type="radio"
                    name="gender"
                    value="female"
                    onChange={this.handleChange}
                />
                Female
            </div>
        );
    }
}

export { Form };