
import React, { useEffect, useState } from "react";
import bannerPhoto1 from '../assets/photos/photo1.jpeg';
import bannerPhoto2 from '../assets/photos/photo2.jpeg';
import bannerPhoto3 from '../assets/photos/photo3.jpeg';
import bannerPhoto4 from '../assets/photos/photo4.jpeg';
import { Box, Card, Container, Divider, Grid } from "@mui/material";


export default function HomePage() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
    const [fade, setFade] = useState(true); // Geçiş durumu

    const photos = [bannerPhoto1, bannerPhoto2, bannerPhoto3, bannerPhoto4];





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
        //height: 'calc(100vh - 150px)',
        // backgroundColor: 'white',
        //display: 'flex',
        marginBottom: 50
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
                    <img src={photos[currentPhotoIndex]} alt="bannerPhoto" style={photoStyle} />
                </div>
            </div>
            <Container maxWidth="xl" style={secondBodyStyle}>
                <Grid container spacing={2}>
                    <Grid item xs={6} sm={4} md={3}>
                        <Card>
                            <Box sx={{ pb: 1, p: 3 }} dir="ltr">
                                <img src={bannerPhoto2} alt="cardPhoto" style={{ height: "100%", width: "100%", maxHeight: 500, maxWidth: 300 }} />
                            </Box>
                        </Card>
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                        <Card>
                            <Box sx={{ pb: 1, p: 3 }} dir="ltr">
                                <img src={bannerPhoto2} alt="cardPhoto" style={{ height: "100%", width: "100%", maxHeight: 500, maxWidth: 300 }} />
                            </Box>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6} sm={8}>
                        <Card>
                            <Box sx={{ pb: 1, p: 3 }} dir="ltr">
                                <Box sx={{ fontFamily: 'fantasy', fontSize: 24, mb: 2 }}>
                                    Hakkımızda
                                </Box>
                                <Divider />
                                <Box sx={{ mt: 2, fontSize: 16 }}>
                                    Firmamız, ağır yük taşımacılığı ve vinç hizmetleri alanında uzun yıllara dayanan tecrübesi ile sektöründe öncü bir konumda yer almaktadır. Kurulduğumuz günden bu yana kalite, güvenlik ve müşteri memnuniyeti ilkelerini ön planda tutarak, ülke genelinde sayısız projeye imza atmanın gururunu yaşamaktayız. İnşaat, enerji, lojistik ve endüstriyel tesisler gibi çeşitli sektörlerde faaliyet gösteren müşterilerimize en güvenilir çözümleri sunmak için sürekli olarak kendimizi yeniliyor ve geliştiriyoruz.
                                </Box>
                                <Box sx={{ mt: 2, fontSize: 16 }}>
                                    Geniş araç filomuz ve ileri teknolojik donanımlarımız sayesinde, yüksek kapasiteli yük taşıma ve kaldırma hizmetlerimizi uluslararası standartlarda sunmaktayız. Teleskopik vinçlerden mobil vinçlere, sepetli vinçlerden ağır yük taşıma ekipmanlarına kadar farklı ihtiyaçlara yanıt verebilecek kapsamlı bir ekipman yelpazesine sahibiz. Her biri alanında uzman, eğitimli ve deneyimli ekibimizle, proje zorluklarına uygun, verimli ve güvenli çözümler sunmak için çalışıyoruz.
                                </Box>
                            </Box>
                        </Card>
                    </Grid>
                </Grid>
            </Container>


        </div>
    );
}
