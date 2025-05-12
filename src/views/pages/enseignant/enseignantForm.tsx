import axios from "axios";
import React, { useState } from "react";

interface EnseignantFormProps {
    onClose: () => void;
}

interface EnseignantFormData {
    nom: string;
    prenom: string;
    specialite: string;
    experience: string;
    email: string;
}

function EnseignantForm({ onClose } : EnseignantFormProps) {

    const [formData, setFormData] = useState<EnseignantFormData>({
        nom: '',
        prenom: '',
        specialite: '',
        experience: 'unknow',
        email: '',
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
            const response = await axios.post('http://localhost:3000/formateurs',formData,{
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
                    <h2 className="text-4xl font-bold mb-4">Ajouter enseignant</h2>
                </div>
                <form className="w-full h-full flex flex-col gap-10">
                    <div className="flex flex-col w-full h-full gap-6">
                        <input type="text" name="nom" value={formData.nom} onChange={handleChange} placeholder="Nom" className="w-full h-14 rounded-xl bg-gray-50 pl-4 pr-4 outline-hidden" required/>
                        <input type="text" name="prenom" value={formData.prenom} onChange={handleChange} placeholder="Prénom" className="w-full h-14 rounded-xl bg-gray-50 pl-4 pr-4 outline-hidden" required/>
                        <input type="text" name="specialite" value={formData.specialite} onChange={handleChange} placeholder="Spécialité" className="w-full h-14 rounded-xl bg-gray-50 pl-4 pr-4 outline-hidden" required/>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="w-full h-14 rounded-xl bg-gray-50 pl-4 pr-4 outline-hidden" required/>
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

export default EnseignantForm;