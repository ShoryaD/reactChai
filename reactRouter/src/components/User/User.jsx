import React from 'react';
import { useParams } from 'react-router-dom';

function User() {
    const { userid } = useParams();
    
    return (
        <div className="flex items-center justify-center">
            <div className="text-black text-3xl p-4">
                User: {userid}
            </div>
        </div>
    );
}

export default User;
