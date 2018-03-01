import React, { Component } from 'react'
import Message from './Message'
import PropTypes from 'prop-types';

class MessageList extends Component {

    render() {
        return (
            <ul>{
                this.props.messages.map( message => {
                    return (<Message
                        key={message.id}
                        message={message}
                        // setMessage={this.props.setMessage}
                        // activeMessage={this.props.activeMessage}
                        {...this.props}
                    />)
                })
            }</ul>
        )
    }

}

MessageList.propTypes = {
    messages: PropTypes.array.isRequired,
    setMessage: PropTypes.func.isRequired,
    deleteMessage: PropTypes.func.isRequired
}

export default MessageList
