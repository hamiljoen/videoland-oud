import Header from './../organisms/Header'
import Footer from './../organisms/Footer'

const Home = ({data}) => {

    return(
        <>
            <HomepageHeader productInfo={data[3].data}/>
            <p>&nbsp;</p><p>&nbsp;</p>
            <ProductlistFilter productData={data}/>
        </>
    )

}
export default Home;