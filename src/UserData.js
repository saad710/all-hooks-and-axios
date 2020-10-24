import React from 'react';

const UserData = (props) => {
    const {email,name,key} = props.user;
    return (
        <div>
            <h3>email:{email}</h3>
            <h4>name: {name}</h4>  
        </div>
    );
};

export default UserData;