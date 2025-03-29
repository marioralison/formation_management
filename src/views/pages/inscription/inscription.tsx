import Remove from '../../../assets/Remove.png'

function Inscription() {

  return (
    <div className="h-full w-full flex flex-col justify-center items-center pl-12 pr-12 pt-6 pb-6 bg-white rounded-2xl gap-4">
      <div className="h-30 w-full flex justify-between items-center gap-4 row-span-2">
        <button className='bg-slate-600 p-4 rounded-xl text-white font-medium cursor-pointer'>
          Ajouter étudiant
        </button>
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
            <tr className="h-18 text-center">
              <td>01</td>
              <td>Mathématique</td>
              <td>5 heures</td>
              <td>15/12/2004</td>
              <td className="text-blue-400">Jean Fidèle</td>
              <td className='text-red-400 grid place-items-center pt-5'>
                <img className='w-8 h-8 cursor-pointer' src={Remove} alt="icon-remove" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Inscription;