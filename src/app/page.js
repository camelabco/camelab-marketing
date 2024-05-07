import styles from "./page.module.css";
import Header from '../app/component/header'
import Footer from '../app/component/footer';
import { Container, Button } from 'react-bootstrap';


export default function Home() {
  return (
    <main className={styles.main}>



      <Header />
      <section className={`${styles['slider-section']}`}>
        <Container>
          <div className={`${styles['heading-text']}`}>
            <h3>
              Empower your network and
              earn with <span> affiliate sales!</span>
            </h3>
          </div>
        </Container>
        <div className={`${styles['slider-container']}`}>
        <div className="left-content">
          <p>
            Share products/services you love, and get rewarded when others make purchases through your recommendations. Join our word-of-mouth commerce platform and turn your influence into income!"
          </p>
          <div className={`${styles['signup-part']}`}>
            <Button className="primary-btn" variant="primary">Sign up</Button>
            <h6 className="mx-4">Become a creator</h6>
          </div>
        </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
