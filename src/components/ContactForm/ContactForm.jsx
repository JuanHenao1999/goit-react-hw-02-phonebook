import { Component } from "react";
import css from "./ContactForm.module.css";
import propTypes from "prop-types";

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  }

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    let contactForAdd = { name: this.state.name, number: this.state.number };
    this.props.onSubmitData(contactForAdd);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <div className={css["form-container"]}>
        <form className={css["contact-form"]} onSubmit={this.handleSubmit}>
          <div className={css["input-container"]}>
            <label>Name</label>
            <br />
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleChange}
              value={this.state.name}
            />
          </div>
          <div className={css["input-container"]}>
            <label>Number</label>
            <br />
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleChange}
              value={this.state.number}
            />
          </div>
          <div>
            <button className={css["add-contact"]} type="submit">Add contact</button>
          </div>
        </form>
      </div>
    );
  }
};

ContactForm.propTypes = {
  onSubmitData: propTypes.func.isRequired,
};


