import { Link } from "@mui/material";
import React, { useEffect, useState } from "react";
import logo from '../assets/pusat_logo.png';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import bannerPhoto1 from '../assets/photos/photo1.jpeg';
import bannerPhoto2 from '../assets/photos/photo2.jpeg';
import bannerPhoto3 from '../assets/photos/photo3.jpeg';
import bannerPhoto4 from '../assets/photos/photo4.jpeg';

export default function HomePage() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
    const [fade, setFade] = useState(true); // Geçiş durumu

    const photos = [bannerPhoto1, bannerPhoto2, bannerPhoto3, bannerPhoto4];

    const options = [
        { id: 1, title: 'Anasayfa', path: '/home' },
        { id: 2, title: 'Hakkımızda', path: '/about' },
        { id: 3, title: 'İletişim', path: '/contact' },
    ];

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

    const bodyStyle = {
        paddingLeft: windowWidth > 1000 ? 100 : 5,
        paddingTop: 150,
        height: 'calc(100vh - 150px)',
        backgroundColor: '#f7971e',
        display: 'flex',
    };

    const secondBodyStyle = {
        paddingLeft: windowWidth > 1000 ? 100 : 5,
        paddingTop: 50,
        height: 'calc(100vh - 150px)',
        backgroundColor: 'white',
        display: 'flex',
    };

    const logoStyle = {
        height: '150px',
        width: 'auto'
    };

    const photoStyle = {
        height: '50%',
        width: '50%',
        borderRadius: '5%',
        transition: 'opacity 0.5s ease-in-out',
        opacity: fade ? 1 : 0,
    };

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setCurrentPhotoIndex(prevIndex => (prevIndex + 1) % photos.length);
                setFade(true);
            }, 500);
        }, 5000);

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            clearInterval(interval);
        };
    }, [photos.length]);

    return (
        <div style={{ width: '100%' }}>
            <div style={headerStyle}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={logo} alt="Logo" style={logoStyle} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginRight: 200 }}>
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
            <div style={bodyStyle}>
                <div style={{ width: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div>
                        <div style={{ fontFamily: 'Fantasy', color: 'white', fontSize: 20 }}>
                            Ankara'da Hizmette 1 Numara
                        </div>
                        
                        <div style={{ fontFamily: 'Fantasy', color: 'white', marginTop: 40, fontSize: 30 }}>
                            Ankara Hiyap Vinç Kiralama
                        </div>
                        <div style={{ fontFamily: 'Fantasy', color: 'white', marginTop: 40 }}>
                            Ankara Hiyap Vinç Kiralama, inşaat ve ağır iş makinesi ihtiyaçlarınızı karşılamak için güvenilir ve profesyonel bir hizmet sunmaktadır. Uzun yıllara dayanan tecrübemiz ve uzman ekibimizle, projelerinizi zamanında ve güvenli bir şekilde tamamlamanızı sağlıyoruz.
                        </div>
                    </div>
                </div>
                <div style={{ width: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={photos[currentPhotoIndex]} alt="Photo" style={photoStyle} />
                </div>
            </div>
            <div style={secondBodyStyle}>
                <div style={{ width: '20%', backgroundColor: 'red' }}>about</div>
                <div style={{ width: '20%', backgroundColor: 'blue' }}>a </div>
                <div style={{ width: '60%', backgroundColor: 'green' }}>a </div>
            </div>
        </div>
    );
}
