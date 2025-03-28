import Etudiant from "./views/pages/etudiant/etudiant";

function App(){
    return (
        <div className="w-full h-full grid grid-cols-12">

            <nav className="h-screen w-full bg-orange-100 col-span-3 grid grid-row-10">
                <div className="w-full h-auto flex justify-center items-center row-span-1 border border-black">
                    <div className="h-5 w-full m-20 flex items-center justify-start">
                        <h1>Manage App</h1>
                    </div>
                </div>
                <div className="w-full h-full flex justify-center items-center row-span-9 border border-black">
                    <ul className="h-full w-full m-20 flex flex-col items-center justify-center gap-8">
                        <li className="w-full h-15 max-h-15 bg-orange-300 text-center text-white font-medium rounded-2xl flex justify-center items-center cursor-pointer">Etudiant</li>
                        <li className="w-full h-15 max-h-15 text-center flex justify-center items-center cursor-pointer">Enseignant</li>
                        <li className="w-full h-15 max-h-15 text-center flex justify-center items-center cursor-pointer">Formation</li>
                        <li className="w-full h-15 max-h-15 text-center flex justify-center items-center cursor-pointer">Inscription</li>
                        <li className="w-full h-15 max-h-15 text-center flex justify-center items-center cursor-pointer">Evaluation</li>
                    </ul>
                </div>
            </nav>

            <div className="h-screen w-full flex justify-start items-center p-10 bg-orange-100 col-span-9">
                <div className="h-full w-full">
                    <Etudiant/>
                </div>
            </div>

        </div>
    )
}

export default App;