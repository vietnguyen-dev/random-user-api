import React from 'react'
import User from './User'


const UserList = (props) => {
    return (
        <div>
            {props.users.map(user => <User 
                key={user.id}
                name={user.name}
                gender={user.gender}
            />)}
        </div>
    )
}

export default UserList
