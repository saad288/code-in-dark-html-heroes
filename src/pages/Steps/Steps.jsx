import one from "../../assets/img/1.gif"
import two from "../../assets/img/2.gif"
import three from "../../assets/img/3.gif"
import four from "../../assets/img/4.gif"


const arr = [

    { title: "ANALYSIS", img: one, des: "orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },

    { title: "CODE", img: two, des: "orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
    { title: "EVALUATE", img: three, des: "orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
    { title: "BRAINSTORM", img: four, four: "orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
]


const Competitions = () => {
    return (
        <div style={{
            display: "flex", alignItems: "center",
            paddingInline: 20,
            marginTop: 30,
            gap: 12,
            overflowX: "scroll"
        }}>


            {arr.map((item) => {

                return <div style={{ borderWidth: 1, padding: 10, borderColor: "#7038FA", borderStyle: "solid", width: 300, display: "flex", flexDirection: "column" }}>


                    < img src={item.img} style={{ width: 250, height: 150, alignSelf: "flex-end" }} />

                    <h2 style={{ color: "white", marginBottom: 9 }}>{item.title}</h2>


                    <h3 style={{ color: "#7038FA" }}>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  </h3>

                </div>
            })}







        </div >)


}

export default Competitions