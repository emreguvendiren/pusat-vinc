import { Link } from "@mui/material";
import React, { useEffect, useState } from "react";
import logo from '../assets/pusat_logo.png';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';


export default function Header() {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            
        };
    });

    const headerStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        paddingLeft: windowWidth > 1000 ? 100 : 5,
        height: 150,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        zIndex: 1000,
        width: '100%',
    };
    const options = [
        { id: 1, title: 'Anasayfa', path: '/home' },
        { id: 2, title: 'Hakkımızda', path: '/about' },
        { id: 3, title: 'İletişim', path: '/contact' },
    ];
    const logoStyle = {
        height: '150px',
        width: 'auto'
    };


    return (

        <div style={headerStyle}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={logo} alt="Logo" style={logoStyle} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginRight: windowWidth>1000?200:5 }}>
                {options.map(item => (
                    <Link
                        key={item.id}
                        sx={{
                            marginLeft: 2,
                            color: 'black',
                            cursor: 'pointer',
                            '&:hover': {
                                color: '#f7971e',
                            },
                            fontWeight: 'bold'
                        }}
                        underline="none"
                        onClick={() => { console.log(item.path) }}
                    >
                        {item.title}
                    </Link>
                ))}
                <Link
                    sx={{
                        marginLeft: 5,
                        color: 'black',
                        cursor: 'pointer',
                    }}
                    underline="none"
                    onClick={() => { }}
                >
                    <div style={{ display: 'flex' }}>
                        <div>
                            <PhoneEnabledIcon fontSize="large" />
                        </div>
                        <div style={{ marginLeft: 15 }}>
                            <div style={{ fontFamily: 'Fantasy', fontSize: 14 }}>
                                HALİL TAŞDEMİR
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 5, fontWeight: 'bold', fontSize: 20 }}>
                                0542 514 5338
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>

    );

}