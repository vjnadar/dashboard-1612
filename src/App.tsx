import './App.scss';
import DashboardLayout from './components/DashboardLayout';
function App(): JSX.Element {
    return (
        <div data-test="App">
            <DashboardLayout />
        </div>
    );
}
export default App;
