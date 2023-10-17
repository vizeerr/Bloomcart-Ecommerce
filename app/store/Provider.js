"use client"
import Store from './Store'
import { Provider } from 'react-redux'

const Providers = ({children}) =>{
    return <Provider store={Store}>
        {children}
    </Provider>
}

export default Providers