
import { useContext } from "react";
import { Context } from "./Component/Context";
function Dataget(){
    let {user,setUser} =useContext(Context);
    return(
        <>
            <div className="row ">
                <div className="col-8 text-start border">
                    <h5>{user?.name} </h5>
                    <h5>{user?.email} </h5>
                    <h5>{user?.password} </h5>
                    
                </div>
            </div>
        </>
    );
}
export default Dataget;