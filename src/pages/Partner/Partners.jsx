
import "./partners.css"
import one from "../../assets/img/our partners/1.png"
import two from "../../assets/img/our partners/2.png"
import three from "../../assets/img/our partners/3.png"
import four from "../../assets/img/our partners/4.png"
import five from "../../assets/img/our partners/5.png"
import six from "../../assets/img/our partners/6.png"



const Partners = () => {
    return (
        <div style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            paddingInline: 20,
            marginTop: 10
        }}>
            < img src={one} style={{
                width: 150, height: 150
            }} />
            < img src={two} style={{ width: 150, height: 150 }} />
            < img src={three} style={{ width: 150, height: 150 }} />
            < img src={four} style={{ width: 150, height: 150 }} />
            < img src={five} style={{ width: 150, height: 150 }} />
            < img src={six} style={{ width: 150, height: 150 }} />



        </div >
    )
}

export default Partners 
