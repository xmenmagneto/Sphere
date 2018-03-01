import React, {Component} from 'react';
import MessageSection from './MessageSection';
import $ from 'jquery';
import '../styles/App.css';
import {API_ROOT} from "../constants";

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            messages: [],
            error: ''
        };
    }

    componentDidMount() {
        this.loadMessages();
    }

    addMessage(name){
        let {messages} = this.state;
        messages.push({id: messages.length, name});
        this.setState({messages});

        // Send to server
        const formData = new FormData();
        formData.set('message', name);

        $.ajax({
            method: 'POST',
            url: `${API_ROOT}/messages/new`,
            processData: false,
            contentType: false,
            dataType: 'text',
            data: formData,
        }).then(() => {
            console.log('created a message successfully.');
        },(error) => {
            console.log(error.responseText);
        }).then(() => {
            this.loadMessages();
        }).catch((e) => {
            console.log('create message failed.');
            console.error(e);
        });

    }

    deleteMessage(messageId) {
        // send DELETE request to server
        const formData = new FormData();
        formData.set('id', messageId);

        $.ajax({
            method: 'POST',
            url: `${API_ROOT}/messages/` + messageId + `/delete`,
            processData: false,
            contentType: false,
            dataType: 'text',
            data: formData,
        }).then(() => {
            console.log('message deleted successfully.');
        },(error) => {
            console.log(error.responseText);
        }).then(() => {
            this.loadMessages();
        }).catch((e) => {
            console.log('delete message failed.');
            console.error(e);
        });
    }

    setMessage(activeMessage){
        this.setState({activeMessage});
    }

    loadMessages = () => {
        return $.ajax({
            url: `${API_ROOT}/messages`,
            method: 'GET',
        }).then((response) => { //response - the message array retrieved from database
            this.setState({ messages: response == null ? [] : response, error: '' });
        }, (error) => {
            this.setState({ error: error.responseText});
        }).catch((error) => {
            this.setState({error: error});
        });
    };

    render(){
        return (
            <div className='app'>
                <div className='nav'>
                    <MessageSection
                        {...this.state}
                        addMessage={this.addMessage.bind(this)}
                        setMessage={this.setMessage.bind(this)}
                        deleteMessage={this.deleteMessage.bind(this)}
                    />
                </div>
            </div>
        )
    }
}

export default App