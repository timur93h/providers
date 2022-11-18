import React, {createContext, useContext, useState} from 'react'


const NavContext = createContext<any>(null);

export const NavProvider = ({ children }: { children: JSX.Element }) =>{
    const [country, setCountry] = useState('Russia')

    return <NavContext.Provider value={{
        country,
        setCountry
    }}>
        {children}
    </NavContext.Provider>
}

export const useNavProvider = () => useContext(NavContext);