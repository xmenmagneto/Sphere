import React, { Component } from 'react'
import MessageForm from './MessageForm'
import MessageList from './MessageList'
import PropTypes from 'prop-types';

class MessageSection extends Component {

    render() {
        return (
            <div className='support panel panel-primary'>
                <div className='panel-heading'>
                    <strong>Golang and Cassandra Web App</strong>
                </div>
                <div className='panel-body messages'>
                    <MessageList {...this.props} />
                    <MessageForm {...this.props} />
                </div>
            </div>
        )
    }

}

MessageSection.propTypes = {
    messages: PropTypes.array.isRequired,
    setMessage: PropTypes.func.isRequired,
    addMessage: PropTypes.func.isRequired,
    deleteMessage: PropTypes.func.isRequired
}

export default MessageSection
