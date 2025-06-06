import React from "react";

interface EvaluationFormProps {
    onClose: () => void;
}

function EvaluationForm({ onClose } : EvaluationFormProps) {

    const handleSubmit = (e : React.FormEvent) => {
        e.preventDefault()
        onClose()
    }

    return(
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black/40">
            <div className="bg-white p-10 rounded-xl h-fit w-120 flex flex-col justify-center items-center gap-6">
                <div className="w-full h-auto flex justify-end items-center">
                    <h2 className="text-4xl font-bold mb-4">Evaluation étudiant</h2>
                </div>
                <form className="w-full h-full flex flex-col gap-10">
                    <div className="flex flex-col w-full h-full gap-6">
                        <input type="number" placeholder="Numéro étudiant" className="w-full h-14 rounded-xl bg-gray-50 pl-4 pr-4 outline-hidden" required/>
                        <input type="text" placeholder="formation" className="w-full h-14 rounded-xl bg-gray-50 pl-4 pr-4 outline-hidden" required/>
                        <input type="number" placeholder="Note" className="w-full h-14 rounded-xl bg-gray-50 pl-4 pr-4 outline-hidden" required/>
                        <input type="text" placeholder="Remarque" className="w-full h-14 rounded-xl bg-gray-50 pl-4 pr-4 outline-hidden" required/>
                    </div>
                    <div className="w-full h-14 flex justify-center items-center gap-4">
                        <button type="button" className="h-full w-full bg-gray-300 p-2 rounded-xl cursor-pointer text-white" onClick={handleSubmit}>Annuler</button>
                        <button type="submit" className="h-full w-full bg-orange-300 p-2 rounded-xl cursor-pointer text-white" onClick={handleSubmit}>Ajouter</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EvaluationForm;