import React from 'react';
import moment from 'moment';

const adimn1Avator = require('./../../assets/avators/admin1.jpg');
const adimn2Avator = require('./../../assets/avators/admin2.jpg');

export default function MessageItem (props) {
    var message = props.message;
    var user = props.user;
    return (
        <div className="message-item">
            <div className="message-avator">
                <img src={user && user.id == 1 ? adimn1Avator : adimn2Avator} />
            </div>
            <div className="message-header">
                <span className="send-user">{user.name}</span>  <span className="send-date">{moment(message.createTime * 1000).format('YYYY-MM-DD HH:mm:ss')}</span></div>
            <div className="message-content">{message.content}</div>
        </div>
    );
}