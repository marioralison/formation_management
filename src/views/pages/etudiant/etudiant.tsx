import { useEffect, useState } from 'react';
import Remove from '../../../assets/Remove.png'
import EtudiantForm from './etudiantForm';
import axios from 'axios';

interface Student {
  id: number; // ou autre champ unique, selon ton backend
  numero: number;
  nom: string;
  prenom: string;
  date_naissance: string; // Format peut varier, ajuste selon ton API
  email: string;
}

function Etudiant() {

  const [students, setStudents] = useState<Student[]>([]);
  
  // Récupérer les étudiants au chargement et après chaque ajout
  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get('http://localhost:8080/students'); 
      setStudents(response.data);
    } catch (error) {
      console.error('Erreur lors de la récupération des étudiants:', error);
    }
  };

  // Fonction pour supprimer un étudiant (si besoin, basé sur ton icône "Remove")
  const handleRemove = async (numero: number) => {
    try {
      await axios.delete(`http://localhost:8080/students/${numero}`);
      setStudents(students.filter(student => student.numero !== numero));
    } catch (error) {
      console.error('Erreur lors de la suppression:', error);
    }
  };

  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="h-full w-full flex flex-col justify-center items-center pl-12 pr-12 pt-6 pb-6 bg-white rounded-2xl gap-4">
      <div className="h-30 w-full flex justify-between items-center gap-4 row-span-2">
        <button 
          className='bg-slate-600 p-4 rounded-xl text-white font-medium cursor-pointer'
          onClick={() => setIsFormOpen(true)}
        >
          Ajouter étudiant
        </button>
        <div className='flex justify-center items-center gap-4'>
          <div className="w-10 h-10 flex rounded-full justify-center items-center bg-slate-900">
            <h1 className="text-white text-xl font-bold">{students.length}</h1>
          </div>
          <h1 className="font-bold text-2xl">Etudiant{students.length > 1 ? 's': '' }</h1>
        </div>
      </div>
      <div className="w-full h-full overflow-scroll overflow-x-hidden scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200">
        <table className="w-full h-auto table-fixed border-collapse">
          <thead className="sticky top-0 bg-neutral-100">
            <tr className="h-14 text-center">
              <th>Numéro</th>
              <th>Nom</th>
              <th>Prénom</th>
              <th>Date naissance</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((students) => {
              return (
                <tr key={students.numero} className="h-18 text-center">
                  <td>{students.numero}</td>
                  <td>{students.nom}</td>
                  <td>{students.prenom}</td>
                  <td>{students.date_naissance}</td>
                  <td className="text-blue-400">{students.email}</td>
                  <td className='text-red-400 grid place-items-center pt-5'>
                    <img className='w-8 h-8 cursor-pointer' src={Remove} alt="icon-remove" onClick={() => handleRemove(students.numero)} />
                  </td>
                </tr>
              )
            })}


          </tbody>
        </table>
      </div>

      {isFormOpen && <EtudiantForm onClose={() => setIsFormOpen(false)}/>}

    </div>

  )
}

export default Etudiant;