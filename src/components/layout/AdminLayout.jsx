import React from 'react'
import { Outlet } from 'react-router-dom'
const AdminLayout = () => {
    return (
        <>
            <div style={{ display: 'flex' }}>
                <div style={{ width: '25%', backgroundColor: 'skyblue' }}>Sidebar</div>
                <div style={{ width: '75%' }}>
                    Dashboard
                    <Outlet />
                </div> I
            </div>
        </>
    )
}
export default AdminLayout