
import React, { useEffect, useState } from "react";
import bannerPhoto1 from '../assets/photos/photo1.jpeg';
import bannerPhoto2 from '../assets/photos/photo2.jpeg';
import bannerPhoto3 from '../assets/photos/photo3.jpeg';
import bannerPhoto4 from '../assets/photos/photo4.jpeg';
import cardPhoto1 from '../assets/photos/photo5.jpg';
import cardPhoto2 from '../assets/photos/photo6.jpg';
import { Avatar, Box, Button, Card, CardContent, Divider, Grid, Link, Paper, Rating, styled, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Group, HelpOutline, ThumbUp } from "@mui/icons-material";
import CurrencyLiraIcon from '@mui/icons-material/CurrencyLira';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';


export default function HomePage() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
    const [fade, setFade] = useState(true); // Geçiş durumu
    const navigate = useNavigate();
    const photos = [bannerPhoto1, bannerPhoto2, bannerPhoto3, bannerPhoto4];

    const reviews = [
        {
            name: 'Ahmet Y.',
            initials: 'A',
            review: 'Halil Bey’in vinç hizmetleri sayesinde tüm ağır yüklerimizi güvenle taşıdık. Profesyonel ve hızlı bir hizmet sundular.',
            rating: 5,
        },
        {
            name: 'Mehmet D,',
            initials: 'M',
            review: 'Halil Bey ve ekibi, işinde son derece titiz ve güvenilir. Vinç hizmetlerinde her zaman onları tercih ediyoruz.',
            rating: 5,
        },
        {
            name: 'Ayşe K.',
            initials: 'A',
            review: 'Ağır makine taşımada hızlı ve sorunsuz bir deneyim yaşadık. Herkese tavsiye ederim.',
            rating: 5,
        },
        {
            name: 'Fatma Ç.',
            initials: 'F',
            review: 'Vinç hizmetleri konusunda uzman bir ekip. Zamanında ve güvenli bir hizmet aldık.',
            rating: 5,
        },
        {
            name: 'Cem K.',
            initials: 'C',
            review: 'Halil Bey’in ekibi, tüm ihtiyaçlarımızı eksiksiz karşıladı. Vinç hizmetlerinde gerçekten uzmanlar.',
            rating: 4,
        },
        {
            name: 'Emre G.',
            initials: 'EG',
            review: 'Halil Bey’in ekibi, tüm ihtiyaçlarımızı eksiksiz karşıladı. Vinç hizmetlerinde gerçekten uzmanlar.',
            rating: 5,
        },
    ];


    const StyledCard = styled(Paper)(({ theme }) => ({
        padding: theme.spacing(3),
        textAlign: 'center',
        borderRadius: '10px',
        boxShadow: theme.shadows[3],
        minHeight: 250,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '100px', // Kartlar arasındaki boşluk
    }));

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    // Kartlar arasındaki boşluğu mobil cihazlarda azaltmak için:
                    afterChange: () => {
                        const cards = document.querySelectorAll('.slick-slide');
                        cards.forEach((card) => {
                            card.style.marginRight = '50px';
                        });
                    }
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    afterChange: () => {
                        const cards = document.querySelectorAll('.slick-slide');
                        cards.forEach((card) => {
                            card.style.marginRight = '0px';
                        });
                    }
                },
            },
        ],
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
        marginBottom: 50
    };

    const thirdBodyStyle = {
        marginTop: 50,
        marginBottom: 50,
        backgroundColor: 'black',
        width: '100%',
        minHeight: '300px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
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

    const handleCall = () => {
        window.location.href = 'tel:+905425145338';
    };
    const handleWhatsApp = () => {
        const phoneNumber = '+905425145338';
        const message = 'Merhaba, sizinle iletişime geçmek istiyorum.';
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        window.open(url, '_blank');
    };
    return (
        <div style={{ width: '100%' }}>

            <div style={bodyStyle}>
                <div style={{ width: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div>
                        <div style={{ fontFamily: 'Fantasy', color: 'white', fontSize: 40 }}>
                            Ankara'da Hizmette 1 Numara
                        </div>

                        <div style={{ fontFamily: 'Fantasy', color: 'white', marginTop: 40, fontSize: 30 }}>
                            Ankara Hiyap Vinç Kiralama
                        </div>
                        <div style={{ fontFamily: 'Fantasy', color: 'white', marginTop: 40, fontSize: 20 }}>
                            Ankara Hiyap Vinç Kiralama, inşaat ve ağır iş makinesi ihtiyaçlarınızı karşılamak için güvenilir ve profesyonel bir hizmet sunmaktadır. Uzun yıllara dayanan tecrübemiz ve uzman ekibimizle, projelerinizi zamanında ve güvenli bir şekilde tamamlamanızı sağlıyoruz.
                        </div>
                    </div>
                </div>
                <div style={{ width: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={photos[currentPhotoIndex]} alt="bannerPhoto" style={photoStyle} />
                </div>
            </div>
            <div style={thirdBodyStyle}>
                <div
                    style={{
                        color: "white",
                        fontFamily: "Montserrat",
                        fontWeight: 'bold',
                        fontSize: '24px',
                        animation: 'fadeIn 10s linear infinite'
                    }}
                >
                    Ankara içi Hiyap Vinç ihtiyaçlarınız için hemen teklif alın
                </div>
                <style>
                    {`
                        @keyframes fadeIn {
                            0% { opacity: 0; transform: translateX(-100%); }
                            50% { opacity: 1; transform: translateX(0); }
                            100% { opacity: 0; transform: translateX(100%); }
                        }
                    `}
                </style>
                <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                    <Button
                        style={{ backgroundColor: '#f7971e', marginTop: 20, fontFamily: "Montserrat", paddingLeft: 30, paddingRight: 30 }}
                        variant="contained"
                        onClick={handleCall}
                    >
                        Hemen Arayın
                    </Button>
                    <Button
                        style={{ backgroundColor: '#f7971e', marginTop: 20, marginLeft: 20, fontFamily: "Montserrat", paddingLeft: 30, paddingRight: 30 }}
                        variant="contained"
                        onClick={handleWhatsApp}
                    >
                        WhatsApp'dan Ulaşın!
                    </Button>
                </div>
            </div>
            <div style={secondBodyStyle}>
                <Grid container spacing={2}>
                    <Grid item xs={6} sm={4} md={3}>
                        <Card style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Box sx={{ pb: 1, p: 3 }} dir="ltr">
                                <img src={cardPhoto1} alt="cardPhoto" style={{ height: "100%", width: "100%", maxHeight: 500, maxWidth: 300 }} />
                            </Box>
                        </Card>
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                        <Card style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Box sx={{ pb: 1, p: 3 }} dir="ltr">
                                <img src={cardPhoto2} alt="cardPhoto" style={{ height: "100%", width: "100%", maxHeight: 500, maxWidth: 300 }} />
                            </Box>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={5} sm={8}>
                        <Card style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Box sx={{ pb: 1, p: 3 }} dir="ltr">
                                <Box sx={{ fontFamily: 'fantasy', fontSize: 24, mb: 2 }}>
                                    Hakkımızda
                                </Box>
                                <Divider />
                                <Box sx={{ mt: 2, fontSize: 16, fontFamily: 'Montserrat' }}>
                                    Firmamız, ağır yük taşımacılığı ve vinç hizmetleri alanında uzun yıllara dayanan tecrübesi ile sektöründe öncü bir konumda yer almaktadır. Kurulduğumuz günden bu yana kalite, güvenlik ve müşteri memnuniyeti ilkelerini ön planda tutarak, ülke genelinde sayısız projeye imza atmanın gururunu yaşamaktayız. İnşaat, enerji, lojistik ve endüstriyel tesisler gibi çeşitli sektörlerde faaliyet gösteren müşterilerimize en güvenilir çözümleri sunmak için sürekli olarak kendimizi yeniliyor ve geliştiriyoruz.
                                </Box>
                                <Box sx={{ mt: 2, fontSize: 16, fontFamily: 'Montserrat' }}>
                                    Geniş araç filomuz ve ileri teknolojik donanımlarımız sayesinde, yüksek kapasiteli yük taşıma ve kaldırma hizmetlerimizi uluslararası standartlarda sunmaktayız. Teleskopik vinçlerden mobil vinçlere, sepetli vinçlerden ağır yük taşıma ekipmanlarına kadar farklı ihtiyaçlara yanıt verebilecek kapsamlı bir ekipman yelpazesine sahibiz. Her biri alanında uzman, eğitimli ve deneyimli ekibimizle, proje zorluklarına uygun, verimli ve güvenli çözümler sunmak için çalışıyoruz.
                                </Box>

                                <Box sx={{ mt: 3, fontSize: 14, fontFamily: 'Segoe UI' }}>
                                    <Box sx={{ borderTop: 1, display: 'inline' }}>
                                        <Link
                                            underline="none"
                                            onClick={() => { navigate("/about") }}
                                            sx={{
                                                color: 'black',
                                                cursor: 'pointer',
                                                '&:hover': {
                                                    color: '#f7971e',
                                                },
                                                fontWeight: 'bold'
                                            }}

                                        >
                                            Devamını Oku
                                        </Link>
                                    </Box>
                                </Box>
                            </Box>
                        </Card>
                    </Grid>
                </Grid>
            </div>
            <div style={{ ...secondBodyStyle }}>
                <Box sx={{ flexGrow: 1, }}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div>
                            <Typography variant="h4" gutterBottom style={{ fontFamily: 'Montserrat' }}>
                                Neden Pusat Vinç?
                            </Typography>
                        </div>

                    </div>
                    <Grid container spacing={4} justifyContent="center">
                        {/* En Uygun Fiyat */}
                        <Grid item xs={12} sm={6} md={3}>
                            <Card sx={{ textAlign: 'center', padding: 2 }}>
                                <CurrencyLiraIcon sx={{ fontSize: 40, color: '#f7971e' }} />
                                <CardContent>
                                    <Typography variant="h6">En Uygun Fiyat</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        {/* Kaliteli ve Güvenilir Hizmet */}
                        <Grid item xs={12} sm={6} md={3}>
                            <Card sx={{ textAlign: 'center', padding: 2 }}>
                                <ThumbUp sx={{ fontSize: 40, color: '#f7971e' }} />
                                <CardContent>
                                    <Typography variant="h6">Kaliteli ve Güvenilir Hizmet</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        {/* 7/24 Destek */}
                        <Grid item xs={12} sm={6} md={3}>
                            <Card sx={{ textAlign: 'center', padding: 2 }}>
                                <HelpOutline sx={{ fontSize: 40, color: '#f7971e' }} />
                                <CardContent>
                                    <Typography variant="h6">7/24 Destek</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        {/* Uzman Ekip */}
                        <Grid item xs={12} sm={6} md={3}>
                            <Card sx={{ textAlign: 'center', padding: 2 }}>
                                <Group sx={{ fontSize: 40, color: '#f7971e' }} />
                                <CardContent>
                                    <Typography variant="h6">Uzman Ekip</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </div>
            <div style={{ margin: '0 auto', padding: '40px 0' }}>
                <Typography variant="h4" gutterBottom style={{ fontFamily: 'Montserrat' }} align="center">
                    Müşteri Yorumları
                </Typography>
                <Slider {...sliderSettings}>
                    {reviews.map((review, index) => (
                        <StyledCard key={index}>
                            <Avatar sx={{ bgcolor: '#00796b', width: 60, height: 60, margin: 'auto' }}>
                                {review.initials}
                            </Avatar>
                            <Typography variant="h6" sx={{ mt: 2 }}>
                                {review.name}
                            </Typography>
                            <Rating value={review.rating} readOnly sx={{ mt: 1 }} />
                            <Typography variant="body1" sx={{ mt: 2, px: 2 }}>
                                {review.review}
                            </Typography>
                        </StyledCard>
                    ))}
                </Slider>
            </div>


        </div>
    );
}
