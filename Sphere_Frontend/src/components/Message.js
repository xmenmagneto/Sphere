import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Message extends Component {

    onClick(e) {
        e.preventDefault()
        const {setMessage, message} = this.props
        setMessage(message)
    }

    onDelete() {
        const {deleteMessage, message} = this.props
        deleteMessage(message.id)
    }

    render() {
        const { message, activeMessage } = this.props
        const active = message === activeMessage ? 'active' : ''
        return (
            <li className={active}>
                <span>
                    <a onClick={this.onClick.bind(this)}>
                        {message.message}
                    </a>
                </span>
                <span className="align-right">
                    <a onClick={this.onDelete.bind(this)} className="delete">Delete</a>
                </span>
            </li>
        )
    }

}

Message.propTypes = {
    message: PropTypes.object.isRequired,
    setMessage: PropTypes.func.isRequired,
    deleteMessage: PropTypes.func.isRequired
}

export default Message
