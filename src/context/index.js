import React from 'react'

export const DataContext = React.createContext(null)

export const AppContext = ({ children }) => {
    const [isSecure, setIsSecure] = React.useState(false)
    return (
        <DataContext.Provider
            value={{
                isSecure: isSecure,
                setIsSecure: setIsSecure
            }}>
            {children}
        </DataContext.Provider>
    )
}