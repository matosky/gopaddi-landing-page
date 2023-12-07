import { Footer } from "../components/common/footer/footer";
import { Header } from "../components/common/header/header";
import { Hero } from "../components/common/hero/hero";
import { Register } from "../components/common/register-now/register-now";
import { Request } from "../components/common/request-management-system/request";
import { Social } from "../components/common/social-network/social-network";
import { Travel } from "../components/common/travel-management-systemn/travel";
import { UlimateProducts } from "../components/common/ultimate-products/ultimate-product";
import { HomeWrap } from "./home.styled";
const Home = ()=>{
    return (
        <HomeWrap>
            <Header />
            <Hero />
            <UlimateProducts />
            <Request />
            {/* <Social />
            <Travel />
            <Register />
            <Footer /> */}
        </HomeWrap>
    )
}


export default Home;