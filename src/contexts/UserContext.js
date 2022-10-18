import React, { createContext, useState } from 'react';


export const AuthContext = createContext();

const UserContext = ({ children }) => {
    const [user, setUser] = useState({ userName: "saqib" })

    const authInfo = {user}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;