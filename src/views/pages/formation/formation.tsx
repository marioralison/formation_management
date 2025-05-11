import { useEffect, useState } from 'react';
import Remove from '../../../assets/Remove.png'
import FormationForm from './formationForm';
import axios from 'axios';

export interface IFormation {
  code: string;
  intitule: string;
  module: string;
  date_debut: string;
  formateur: any;
}

function Formation() {

  const [formation, setFormation] = useState<IFormation[]>([]);

  useEffect(() => {
      fetchFormation();
    }, []);

  const fetchFormation = async () => {
    try {
      const response = await axios.get('http://localhost:3000/formations'); 
      // const test = response.data;
      // console.log(test[0].formateur.prenom);  
      setFormation(response.data);
    } catch (error) {
      console.error('Erreur lors de la récupération des formations:', error);
    }
  };

  const handleRemove = async (code: string) => {
    try {
      await axios.delete(`http://localhost:8080/formations/${code}`);
      setFormation(formation.filter(f => f.code !== code));
    } catch (error) {
      console.error('Erreur lors de la suppression formation:', error);
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
          Ajouter formation
        </button>
        <div className='flex justify-center items-center gap-4'>
          <div className="w-10 h-10 flex rounded-full justify-center items-center bg-slate-900">
            <h1 className="text-white text-xl font-bold">5</h1>
          </div>
          <h1 className="font-bold text-2xl">Formation</h1>
        </div>
      </div>
      <div className="w-full h-full overflow-scroll overflow-x-hidden scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200">
        <table className="w-full h-auto table-fixed border-collapse">
          <thead className="sticky top-0 bg-neutral-100">
            <tr className="h-14 text-center">
              <th>Numéro</th>
              <th>Intitulé</th>
              <th>Nombre heure</th>
              <th>Date début</th>
              <th>Formateur</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {formation.map((f) => {
              return (
                <tr key={f.code} className="h-18 text-center">
                  <td>{f.code}</td>
                  <td>{f.intitule}</td>
                  <td>{f.module}</td>
                  <td>{f.date_debut}</td>
                  <td className="text-blue-400">{f.formateur.prenom}</td>
                  <td className='text-red-400 grid place-items-center pt-5'>
                    <img className='w-8 h-8 cursor-pointer' onClick={() => handleRemove(f.code)} src={Remove} alt="icon-remove" />
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {isOpenForm && <FormationForm onClose={() => setIsOpenForm(false)}/>}
    </div>
  )
}

export default Formation;