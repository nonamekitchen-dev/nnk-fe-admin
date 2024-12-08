import * as React from 'react';
import {Box} from "@mui/material";
import logo from './logo.png';

const Logo = () => {
    return (
        <>
            <Box
                component="img"
                src={logo}
                sx={{
                    objectFit: 'contain',
                    height: '20px',
                }}
                alt="No Name Kitchen logo"
            />
            <div style={{marginLeft: '8px'}}>No Name Kitchen</div>
        </>

    );
};

export default Logo;
