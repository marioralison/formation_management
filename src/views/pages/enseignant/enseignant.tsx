import { useEffect, useState } from 'react';
import Remove from '../../../assets/Remove.png'
import EnseignantForm from './enseignantForm';
import axios from 'axios';

export interface IEnseignant {
    numero: number;
    nom: string;
    prenom: string;
    specialite: string;
    experience?: string;
    email: string;
}

function Enseignant() {

    const [enseignant, setEnseignant] = useState<IEnseignant[]>([]);

    useEffect(() => {
        fetchEnseignant();
    }, []);

    const fetchEnseignant = async () => {
      try {
        const response = await axios.get('http://localhost:3000/formateurs');       
        setEnseignant(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des étudiants:', error);
      }
    };

    const handleRemove = async (numero: number) => {
      try {
        await axios.delete(`http://localhost:8080/formateurs/${numero}`);
        setEnseignant(enseignant.filter(e => e.numero !== numero));
      } catch (error) {
        console.error('Erreur lors de la suppression formateurs:', error);
      }
    };

    const [isOpenForm, setIsOpenForm] = useState(false)

    return (
        <div className="h-full w-full flex flex-col justify-center items-center pl-12 pr-12 pt-6 pb-6 bg-white rounded-2xl gap-4">
            <div className="h-30 w-full flex justify-between items-center gap-4 row-span-2">
                <button
                    onClick={() => setIsOpenForm(true)} 
                    className='bg-slate-600 p-4 rounded-xl text-white font-medium cursor-pointer'
                >
                    Ajouter enseignant
                </button>
                <div className='flex justify-center items-center gap-4'>
                    <div className="w-10 h-10 flex rounded-full justify-center items-center bg-slate-900">
                        <h1 className="text-white text-xl font-bold">5</h1>
                    </div>
                    <h1 className="font-bold text-2xl">Enseignant</h1>
                </div>
            </div>
            <div className="w-full h-full overflow-scroll overflow-x-hidden scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200">
                <table className="w-full h-auto table-fixed border-collapse">
                    <thead className="sticky top-0 bg-neutral-100">
                        <tr className="h-14 text-center">
                        <th>Numéro</th>
                        <th>Nom</th>
                        <th>Prénom</th>
                        <th>Spécialité</th>
                        <th>Email</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {enseignant.map((e) => {
                            return(
                                <tr key={e.numero} className="h-18 text-center">
                                <td>{e.numero}</td>
                                <td>{e.nom}</td>
                                <td>{e.prenom}</td>
                                <td>{e.specialite}</td>
                                <td className="text-blue-400">{e.email}</td>
                                <td className='text-red-400 grid place-items-center pt-5'>
                                    <img className='w-8 h-8 cursor-pointer' onClick={() => handleRemove(e.numero)} src={Remove} alt="icon-remove" />
                                </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>

            {isOpenForm && <EnseignantForm onClose={() => setIsOpenForm(false)}/>}
        </div>
    )
}

export default Enseignant;