import { useEffect, useState } from 'react';
import Remove from '../../../assets/Remove.png'
import axios from 'axios';
import { IFormation } from '../formation/formation';

interface Inscriptions {
  numero: number,
  date: Date | string,
  etudiant: any,
  formation: any,
  formateur:any
}

function Inscription() {

  const [inscription, setInscription] = useState<Inscriptions[]>([]);
  const [formation, setFormation] = useState<IFormation[]>([]);

  useEffect(() => {
    fetchInscription();
  }, []);

  const fetchInscription = async () => {
    try {
      const response = await axios.get('http://localhost:3000/inscriptions'); 
      const code_formation = response.data[0].formation.code
      const res_formation = await axios.get(`http://localhost:3000/formations/${code_formation}`);
      response.data[0].formation = res_formation.data;
      setInscription(response.data);
      
    } catch (error) {
      console.error('Erreur lors de la récupération des inscrition:', error);
    }
  }

  const handleRemove = async (numero: number) => {
    try {
      await axios.delete(`http://localhost:8080/inscriptions/${numero}`);
      setInscription(inscription.filter(i => i.numero !== numero));
    } catch (error) {
      console.error('Erreur lors de la suppression inscription:', error);
    }
  };

  return (
    <div className="h-full w-full flex flex-col justify-center items-center pl-12 pr-12 pt-6 pb-6 bg-white rounded-2xl gap-4">
      <div className="h-30 w-full flex justify-end items-center gap-4 row-span-2">
        <div className='flex justify-center items-center gap-4'>
          <div className="w-10 h-10 flex rounded-full justify-center items-center bg-slate-900">
            <h1 className="text-white text-xl font-bold">5</h1>
          </div>
          <h1 className="font-bold text-2xl">Inscription</h1>
        </div>
      </div>
      <div className="w-full h-full overflow-scroll overflow-x-hidden scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200">
        <table className="w-full h-auto table-fixed border-collapse">
          <thead className="sticky top-0 bg-neutral-100">
            <tr className="h-14 text-center">
              <th>Numéro</th>
              <th>Etudiant</th>
              <th>Formation</th>
              <th>Enseignant</th>
              <th>Date de début</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              inscription.map((i) => {
                return (
                  <tr key={i.numero} className="h-18 text-center">
                    <td>{i.numero}</td>
                    <td>{i.etudiant.prenom}</td>
                    <td>{i.formation.intitule}</td>
                    <td>{i.formation.formateur.prenom}</td>
                    <td className="text-blue-400">{i.etudiant.prenom}</td>
                    <td className='text-red-400 grid place-items-center pt-5'>
                      <img className='w-8 h-8 cursor-pointer' onClick={() => handleRemove(i.numero)} src={Remove} alt="icon-remove" />
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Inscription;