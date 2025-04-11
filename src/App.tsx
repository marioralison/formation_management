import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import routes from './routes/routes';
import Layouts from './components/layouts/layouts';

function App(){
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layouts/>}>
                    {
                        routes.map((route, index) => (
                            <Route key={index} path={route.path} element={route.element}/>
                        ))
                    }
                    <Route index element={<Navigate to="/etudiant"/>}/>
                </Route>
            </Routes>
        </Router>
    )
}

export default App;