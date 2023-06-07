import React, { Component } from "react";
import css from "./ContactList.module.css";
import PropTypes from 'prop-types';


export class ContactList extends Component {
  deleteId = Id => {
    this.props.del(Id);
  };
  render() {
    const { contacts } = this.props;
    return (
      <div>
        <ul>
          {contacts?.map((contact) => {
            return (
              <div className={css["container-contact"]} key={contact.id}>
                <li>{contact.name}: {contact.number}</li>
                <button className={css["delete-contact"]}
                data-id={contact.id}
                onClick={() => this.deleteId(contact.id)}>Delete</button>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.array,
  del: PropTypes.func,
};
