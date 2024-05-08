import Header from '../component/header'
import Footer from '../component/footer';
import LandingStyles from "../styles/landing.module.css"
import { Container,Button } from 'react-bootstrap';


export default function Landing() {
    return (
        <>
            <Header />
            <section className={`${LandingStyles['slider-section']}`}>
                <Container>
                    <div className={`${LandingStyles['heading-text']}`}>
                        <h3>
                            Empower your network and
                            earn with <span> affiliate sales!</span>
                        </h3>
                    </div>
                </Container>

                    <div className={`${LandingStyles['slider-container']}`}>
                        <p>
                            Share products/services you love, and get rewarded when others make purchases through your recommendations. Join our word-of-mouth commerce platform and turn your influence into income!"
                        </p>
                        <div className={`${LandingStyles['signup-part']}`}>
                            <Button className="primary-btn" variant="primary">Sign up</Button>
                            <h6>Become a creator</h6>
                        </div>


                    </div>



            </section>
            <Footer />
        </>
    );
}