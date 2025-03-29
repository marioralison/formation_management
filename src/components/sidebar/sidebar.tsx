import {NavLink} from 'react-router-dom'
import routes from '../../routes/routes'

function Sidebar(){
    return(
        <nav className="h-screen w-full bg-orange-100 col-span-3 grid grid-row-10">
            <div className="w-full h-auto flex justify-center items-center row-span-1">
                <div className="h-5 w-full m-20 flex items-center justify-start">
                    <h1 className="font-bold text-2xl">Manage App</h1>
                </div>
            </div>
            <div className="w-full h-full flex justify-center items-center row-span-9">
                <ul className="h-full w-full m-20 flex flex-col items-center justify-center gap-8">
                    {
                        routes.map((route, index) => (
                            <NavLink 
                                key={index} 
                                to={route.path}
                                className={({ isActive } : {isActive: boolean}) =>
                                    `w-full h-15 max-h-15 text-center flex justify-center items-center cursor-pointer rounded-2xl transition-all duration-300 ${
                                        isActive ? "bg-orange-300 text-white font-bold" : "text-black hover:bg-orange-200"
                                    }`
                                }
                            >
                                {route.label}
                            </NavLink>
                        ))
                    }
                </ul>
            </div>
        </nav>
    )
}

export default Sidebar;