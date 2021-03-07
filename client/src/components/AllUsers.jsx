import React, { useEffect, useState } from 'react';
import * as API from "../utils/API";

function AllUsers() {
    const [usersState, setUsersState] = useState([]); // init to empty list

    useEffect(() => {
        API.getUsers()
        .then(res => {
            setUsersState(res.data);
        });
    }, []);

    return (
    <div>
    <h1>All Users</h1>
    <ul>
    {usersState.map(user => <li>{user.username}</li>)}
    </ul>    
    </div>
    );

}

export default AllUsers;