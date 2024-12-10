
import React, { useEffect, useState } from "react";
import bannerPhoto1 from '../assets/photos/photo1.jpeg';
import bannerPhoto2 from '../assets/photos/photo2.jpeg';
import bannerPhoto3 from '../assets/photos/photo3.jpeg';
//import bannerPhoto4 from '../assets/photos/photo4.jpeg';
import cardPhoto1 from '../assets/photos/photo5.jpg';
import cardPhoto2 from '../assets/photos/photo6.jpg';
import { Avatar, Box, Button, Card, CardContent, Divider, Grid, Link, Paper, Rating, styled, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Group, HelpOutline, ThumbUp } from "@mui/icons-material";
import CurrencyLiraIcon from '@mui/icons-material/CurrencyLira';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { isMobile } from 'react-device-detect';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import CopyrightIcon from '@mui/icons-material/Copyright';

export default function HomePage() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
    const [fade, setFade] = useState(true); // Geçiş durumu
    const navigate = useNavigate();
    const photos = [bannerPhoto1, bannerPhoto2, bannerPhoto3];


    const reviews = [
        {
            name: 'Burak K.',
            initials: 'BK',
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
            name: 'Yasin T.',
            initials: 'YT',
            review: 'Ağır makine taşımada hızlı ve sorunsuz bir deneyim yaşadık. Herkese tavsiye ederim.',
            rating: 5,
        },
        {
            name: 'Mert Ş.',
            initials: 'MŞ',
            review: 'Vinç hizmetleri konusunda uzman bir ekip. Zamanında ve güvenli bir hizmet aldık.',
            rating: 5,
        },
        {
            name: 'Tunahan A.',
            initials: 'TA',
            review: 'Halil Bey’in ekibi, tüm ihtiyaçlarımızı eksiksiz karşıladı. Vinç hizmetlerinde gerçekten uzmanlar.',
            rating: 4,
        },
        {
            name: 'Emre G.',
            initials: 'EG',
            review: 'Halil Bey şahsi olarak ilgilendi.Teşekkürlerimi sunuyorum.',
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

        paddingTop: 150,
        //height: 'calc(100vh - 150px)',
        backgroundColor: '#f7971e',
        //paddingL

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
        height: '70%',
        width: '70%',
        borderRadius: '2%',
        transition: 'opacity 0.5s ease-in-out',
        opacity: fade ? 1 : 0,
        maxHeight: 1000
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
        <div style={{ width: '100%'}}>

            <Grid container xs={12} sm={12} md={12} lg={12} xl={12} style={bodyStyle}>
                <Grid xs={12} sm={12} md={12} lg={6} xl={6} display={isMobile ? "" : "flex"} paddingTop={isMobile ? 2 : 0} justifyContent={"center"} alignItems={"center"} item  >
                    <Box>
                        <Box style={{ fontFamily: 'Kanit', color: 'white' }} sx={{ fontSize: { xs: 17, sm: 16, md: 20, lg: 35, xl: 40 } }} textAlign={"center"}>
                            Ankara'da Hizmette 1 Numara
                        </Box>
                        <Box style={{ fontFamily: 'Kanit', color: 'white', marginTop: isMobile ? 13 : 40 }} sx={{ fontSize: { xs: 15, sm: 16, md: 20, lg: 30, xl: 36 } }} textAlign={"center"}>
                            Ankara Hiyap Vinç Kiralama
                        </Box>
                        <Box style={{ fontFamily: 'Kanit', color: 'white', marginTop: isMobile ? 13 : 40 }} sx={{ fontSize: { xs: 13, sm: 16, md: 20, lg: 25, xl: 30 } }} textAlign={"center"}>
                            Ankara Hiyap Vinç Kiralama, inşaat ve ağır iş makinesi ihtiyaçlarınızı karşılamak için güvenilir ve profesyonel bir hizmet sunmaktadır. Uzun yıllara dayanan tecrübemiz ve uzman ekibimizle, projelerinizi zamanında ve güvenli bir şekilde tamamlamanızı sağlıyoruz.
                        </Box>
                    </Box>
                </Grid>
                <Grid xs={12} sm={12} md={12} lg={6} xl={6} display={"flex"} justifyContent={"center"} alignItems={"center"} item>
                    <img src={photos[currentPhotoIndex]} alt="bannerPhoto" style={photoStyle} />
                </Grid>
            </Grid>
            <div style={thirdBodyStyle}>
                <div
                    style={{
                        color: "white",
                        fontFamily: "Kanit",
                        fontWeight: 'bold',
                        fontSize: '24px',
                        animation: 'fadeIn 10s linear infinite'
                    }}
                >
                    Ankara içi Hiyap Vinç ihtiyaçlarınız için hemen teklif alın
                </div>

                <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                    <Button
                        style={{ backgroundColor: '#f7971e', marginTop: 20, fontFamily: "Kanit", paddingLeft: 30, paddingRight: 30 }}
                        variant="contained"
                        onClick={handleCall}
                    >
                        Hemen Arayın
                    </Button>
                    <Button
                        style={{ backgroundColor: '#f7971e', marginTop: 20, marginLeft: 20, fontFamily: "Kanit", paddingLeft: 30, paddingRight: 30 }}
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
                                <Box sx={{ fontFamily: 'Kanit', fontSize: 24, mb: 2 }}>
                                    Hakkımızda
                                </Box>
                                <Divider />
                                <Box sx={{ mt: 2, fontSize: 16, fontFamily: 'Kanit' }}>
                                    Firmamız, ağır yük taşımacılığı ve vinç hizmetleri alanında uzun yıllara dayanan tecrübesi ile sektöründe öncü bir konumda yer almaktadır. Kurulduğumuz günden bu yana kalite, güvenlik ve müşteri memnuniyeti ilkelerini ön planda tutarak, ülke genelinde sayısız projeye imza atmanın gururunu yaşamaktayız. İnşaat, enerji, lojistik ve endüstriyel tesisler gibi çeşitli sektörlerde faaliyet gösteren müşterilerimize en güvenilir çözümleri sunmak için sürekli olarak kendimizi yeniliyor ve geliştiriyoruz.
                                </Box>
                                <Box sx={{ mt: 2, fontSize: 16, fontFamily: 'Kanit' }}>
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
                            <Typography variant="h4" gutterBottom style={{ fontFamily: 'Kanit' }}>
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
                                    <Typography variant="h6">Uygun Fiyat</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        {/* Kaliteli ve Güvenilir Hizmet */}
                        <Grid item xs={12} sm={6} md={3}>
                            <Card sx={{ textAlign: 'center', padding: 2 }}>
                                <ThumbUp sx={{ fontSize: 40, color: '#f7971e' }} />
                                <CardContent>
                                    <Typography variant="h6">Kaliteli  Hizmet</Typography>
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
            <Box sx={{ width: "100%", margin: "0 auto", mt: 10 }}>
                <Typography variant="h4" gutterBottom style={{ fontFamily: 'Kanit' }} align="center">
                    Müşteri Yorumları
                </Typography>
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        768: { slidesPerView: 2 }, // Orta ekranlarda 2 yorum göster
                        1200: { slidesPerView: 3 }, // Büyük ekranlarda 3 yorum göster
                    }}
                >
                    {reviews.map((review, index) => (
                        <SwiperSlide key={index}>
                            <Card
                                sx={{
                                    maxWidth: 650,
                                    margin: "0 auto",
                                    boxShadow: 3,
                                    borderRadius: 2,
                                    textAlign: "center",
                                }}
                            >
                                <CardContent>
                                    {/* Avatar */}
                                    <Avatar
                                        sx={{
                                            bgcolor: "#1976d2",
                                            width: 56,
                                            height: 56,
                                            margin: "0 auto",
                                            mb: 2,
                                        }}
                                    >
                                        {review.initials}
                                    </Avatar>
                                    {/* İsim */}
                                    <Typography variant="h6">{review.name}</Typography>
                                    {/* Yorum */}
                                    <Typography variant="body2" color="text.secondary" sx={{ my: 2 }}>
                                        {review.review}
                                    </Typography>
                                    {/* Rating */}
                                    <Rating value={review.rating} readOnly />
                                </CardContent>
                            </Card>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Box>
            <Box
                sx={{
                    mt: 3,
                    backgroundColor: "black",
                    height: 100,
                    color: "white",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <CopyrightIcon sx={{ mr: 1 }} />
                Emre Güvendiren
            </Box>



        </div>
    );
}
