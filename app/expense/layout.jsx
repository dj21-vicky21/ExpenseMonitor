import React from 'react'
import Sidebar from '../_components/Sidebar'

function Layout({ children }) {
    return (
        <div className='flex h-full'>
            {/* <div className='h-full border-r'>
                <Sidebar className={'hidden md:block p-3'} />
            </div> */}
            <div className='w-full overflow-auto'>
                {children}
            </div>
        </div>
    )
}

export default Layout