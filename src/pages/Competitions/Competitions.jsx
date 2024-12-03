import "./Competitions.css"
import one from "../../assets/img/Competitions/A.svg"
import two from "../../assets/img/Competitions/B.svg"
import three from "../../assets/img/Competitions/C.svg"
import four from "../../assets/img/Competitions/D.svg"
import five from "../../assets/img/Competitions/E.svg"
import six from "../../assets/img/Competitions/F.svg"

const arr = [

    { title: "Speed Programming", img: one, des: "orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },

    { title: "Code In The Dark",  img: two, des: "orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
{ title: "Essay Writing", img: three, des: "orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
{ title: "Quest", img: four, des: "orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
{ title: "Web Development", img: five, des: "orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
{ title: "Data Base", img: six, des: "orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
]


const Competitions = () => {
    return (
        <div style={{
            display: "flex", alignItems: "center",
            paddingInline: 20,
            marginTop: 30,
            gap:12,
            overflowX:"scroll"
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