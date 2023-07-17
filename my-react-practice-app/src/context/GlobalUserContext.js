import { createContext , useState} from 'react';
import User from '../components/User';
import Dashboard from '../components/Dashboard';
import Home from '../components/Home';
import App from '../components/App';

const AppContext = createContext();

export function UserContext() {
    
	const [ userName, setUserName ] = useState('test');
    const [ role, setRole ] = useState('Developer');
	

	return (
		<div className="App">
			<AppContext.Provider value={{ userName, role }}>
                <App/>
				<User />
				<Dashboard />
                <Home/>
			</AppContext.Provider>
		</div>
	);
}

