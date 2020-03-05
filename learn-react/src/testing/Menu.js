import React, { useState } from 'react';

const Menu = props => {
    if (props.authenticated) {
        return <>
            <MenuItem label='Home' />
            <MenuItem label='Products' />
            <MenuItem label='Logout' /> </>
    }
    return <>
        <MenuItem label='Sign Up' />
        <MenuItem label='Login' /> </>

}

export const MenuItem = props => {
    return <div>{props.label}</div>

}

export default Menu;