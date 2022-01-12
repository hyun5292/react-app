import React from 'react';

function User({ user }) {
    //user 값이 존재하지 않으면 null을 렌더링: null checking
    /*
    if(!user) {
        return null;
    }
    */

    return (
        <div>
            <div>
                <b>ID</b>: { user.id }
            </div>
            <div>
                <b>Username</b>: {user.username}
            </div>
        </div>
    );
}

export default User;