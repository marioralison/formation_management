import axios from "axios";
import React, { useState } from "react";

interface FormationFormProps {
    onClose: () => void;
}

interface FormationData {
    intitule: string;
    module: string;
    date_debut: string;
}

function FormationForm({ onClose } : FormationFormProps) {

    const [formData, setFormData] = useState<FormationData>({
            intitule: '',
            module: '',
            date_debut: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
          ...prev,
          [name]: value,
        }));
    };

    const handleSubmit = async (e : React.FormEvent) => {
        console.log(formData);
        e.preventDefault()
        
        try {
            // numero formateur doit être
            const response = await axios.post('http://localhost:8080/formations?numero_formateur=1',formData,{
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if (response.status){
                // si ok
                // close Formulaire
            }
            onClose()
        } catch (error) {
            console.log(error);
            return;
        }
    }

    return(
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black/40">
            <div className="bg-white p-10 rounded-xl h-fit w-120 flex flex-col justify-center items-center gap-6">
                <div className="w-full h-auto flex justify-end items-center">
                    <h2 className="text-4xl font-bold mb-4">Ajouter formation</h2>
                </div>
                <form className="w-full h-full flex flex-col gap-10">
                    <div className="flex flex-col w-full h-full gap-6">
                        <input type="text" name="intitule" value={formData.intitule} onChange={handleChange} placeholder="Intitulé" className="w-full h-14 rounded-xl bg-gray-50 pl-4 pr-4 outline-hidden" required/>
                        <input type="text" name="module" value={formData.module} onChange={handleChange} placeholder="Nombre heure" className="w-full h-14 rounded-xl bg-gray-50 pl-4 pr-4 outline-hidden" required/>
                        <input type="date" name="date_debut" value={formData.date_debut} onChange={handleChange} placeholder="Date début" className="w-full h-14 rounded-xl bg-gray-50 pl-4 pr-4 outline-hidden" required/>
                        <input type="text" placeholder="Formateur" className="w-full h-14 rounded-xl bg-gray-50 pl-4 pr-4 outline-hidden" required/>
                    </div>
                    <div className="w-full h-14 flex justify-center items-center gap-4">
                        <button type="button" className="h-full w-full bg-gray-300 p-2 rounded-xl cursor-pointer text-white" onClick={() => onClose()}>Annuler</button>
                        <button type="submit" className="h-full w-full bg-orange-300 p-2 rounded-xl cursor-pointer text-white" onClick={handleSubmit}>Ajouter</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormationForm;