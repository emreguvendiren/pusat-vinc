import React, { useEffect, useState } from "react";
import logo from '../assets/pusat_logo.png';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router-dom";
import { Link, Drawer, IconButton } from "@mui/material";
import { isMobile } from 'react-device-detect';
import InstagramIcon from '@mui/icons-material/Instagram';
import CloseIcon from '@mui/icons-material/Close';

export default function Header() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    const toggleDrawer = (open) => () => {
        setIsDrawerOpen(open);
    };

    const options = [
        { id: 1, title: 'Anasayfa', path: '/home', function: () => { navigate("/"); setIsDrawerOpen(false); } },
        { id: 2, title: 'Hakkımızda', path: '/about', function: () => { navigate("/about"); setIsDrawerOpen(false); } },
        { id: 3, title: 'İletişim', path: '/contact', function: () => { navigate("/contact"); setIsDrawerOpen(false); } },
    ];



    const headerStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        paddingLeft: windowWidth > 900 ? 100 : 5,
        height: isMobile ? 100 : 150,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        zIndex: 1000,
        width: '100%',
    };

    const logoStyle = {
        height: isMobile ? 100 : 150,
        width: 'auto'
    };

    return (
        <div style={headerStyle}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={logo} alt="Logo" style={logoStyle} />
            </div>
            {windowWidth > 900 ? (
                <div style={{ display: 'flex', alignItems: 'center', marginRight: windowWidth > 1000 ? 200 : 5 }}>
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
                            onClick={item.function}
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
                            <PhoneEnabledIcon fontSize="large" />
                            <div style={{ marginLeft: 15 }}>
                                <div style={{ fontFamily: 'Fantasy', fontSize: 14 }}>HALİL TAŞDEMİR</div>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginTop: 5,
                                    fontWeight: 'bold',
                                    fontSize: 20
                                }}>
                                    0542 514 5338
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            ) : (
                <>
                    <IconButton onClick={toggleDrawer(true)} sx={{ marginRight: 2, color: "#f7971e" }}>
                        <MenuIcon fontSize="large" />
                    </IconButton>
                    <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)} >
                        <div style={{ width: 170, padding: 20, marginTop: 20 }}>
                            <IconButton
                                onClick={toggleDrawer(false)}
                                sx={{ position: 'absolute', top: 10, right: 10, color: 'black' }}
                            >
                                <CloseIcon />
                            </IconButton>
                            {options.map(item => (
                                <Link
                                    key={item.id}
                                    sx={{
                                        display: 'block',
                                        marginBottom: 2,
                                        color: 'black',
                                        cursor: 'pointer',
                                        '&:hover': { color: '#f7971e' },
                                        fontWeight: 'bold',
                                        borderBottom: 0.7,
                                        // textAlign: 'center',
                                        paddingBottom: 2
                                    }}
                                    underline="none"
                                    onClick={item.function}
                                >
                                    {item.title}
                                </Link>
                            ))}
                            <div style={{ textAlign: 'center' }}>
                                <IconButton
                                    onClick={() => {
                                        window.location.href = "https://www.instagram.com/pusatvincnakliyat/";
                                    }}
                                    sx={{ color: "black" }}
                                >
                                    <InstagramIcon fontSize="large" />
                                </IconButton>

                            </div>
                        </div>
                    </Drawer>
                </>
            )}
        </div>
    );
}
