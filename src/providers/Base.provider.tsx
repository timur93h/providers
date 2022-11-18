import React, {createContext, useContext, useState} from 'react'


const BaseContext = createContext<any>(null);

export const BaseProvider = ({ children }: { children: JSX.Element }) =>{
    const [name, setName] = useState('Alexey')
    const [lastName, setLastName] = useState('LastName')

    return <BaseContext.Provider value={{
                name,
                setName,
                lastName,
                setLastName
            }}>
              {children}
            </BaseContext.Provider>
}

export const useBaseProvider = () => useContext(BaseContext);