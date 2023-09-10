import qiqi from "../assets/icons/qiqi.png";
import genshin from "../assets/icons/genshin.png";
import { useNavigate } from "react-router-dom";

function LandingPage() {
    const navigate = useNavigate();
    const handleToDetail=()  =>{
        navigate("/DetailPage()");
    };
    return(
        <div className="text-center font-sans ">
            <div className = "flex justify-center">
                <img src={genshin} alt="genshin" width={400} className="center"/>
            </div>
            
            <div className = "flex justify-center">
                <img src={qiqi} alt="qiqi"
            className="w-[20%] my-3 bg-white rounded-full p-6"
            />
            </div>
                <p class ="text-3xl text-white font-bold">ZOMBIE QIQI</p>

                

                <p className="text-md mt-2 text-white mx-36 ">
            Qiqi (Chinese: 七七 Qīqī) is a playable Cryo character in Genshin Impact.
            Resurrected as a zombie by the adepti,
            she has ended up in Baizhu's care and now works at Bubu Pharmacy in Liyue Harbor.{",\n"}
                </p>{""}
            <br />
            <button className="text-xl text-[#f5f5dc] underLine" onClick={() => handleToDetail()}
            >
                Next
            </button>
        </div>
    );
}
export default LandingPage;