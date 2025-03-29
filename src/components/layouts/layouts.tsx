import Sidebar from "../sidebar/sidebar";
import {Outlet} from 'react-router-dom';

function Layouts() {
    return(
        <div className="w-full h-full grid grid-cols-12">
            <Sidebar/>
            <div className="h-screen w-full flex justify-center items-center p-10 bg-orange-100 col-span-9">
                <div className="h-full w-full">
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}

export default Layouts;