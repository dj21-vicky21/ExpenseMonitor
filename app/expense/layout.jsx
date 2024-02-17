import React from 'react'
import Sidebar from '../_components/Sidebar'

function Layout({ children }) {
    return (
        <div className='flex h-full'>
            <Sidebar className={'hidden md:block p-3'} />
            <div className='w-full'>
                {children}
            </div>
        </div>
    )
}

export default Layout