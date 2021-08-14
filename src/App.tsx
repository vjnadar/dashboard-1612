import './App.scss';
import logo from './assets/logo/logo.svg';
import DashboardLayout from './components/DashboardLayout';
function App(): JSX.Element {
    return (
        <div data-test="App">
            <DashboardLayout />
        </div>
    );
}
export default App;
