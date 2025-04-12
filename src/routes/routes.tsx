import Etudiant from "../views/pages/etudiant/etudiant";
import Enseignant from "../views/pages/enseignant/enseignant";
import Evaluation from "../views/pages/evaluation/evaluation";
import Formation from "../views/pages/formation/formation";
import Inscription from "../views/pages/inscription/inscription";

const routes = [
    {path: "/etudiant", element: <Etudiant/>, label: "Etudiant"},
    {path: "/enseignant", element: <Enseignant/>, label: "Enseignant"},
    {path: "/formation", element: <Formation/>, label: "Formation"},
    {path: "/inscription", element: <Inscription/>, label: "Inscription"},
    {path: "/evaluation", element: <Evaluation/>, label: "Evaluation"}
]

export default routes;