import Stopwatch from "./_1_referencing_values_with_refs_/example_1";
import Chat from "./_1_referencing_values_with_refs_/exercise_1";
import Dashboard from "./_1_referencing_values_with_refs_/exercise_2";
import InfLoop from "./_3_synchronizing_with_effects/example_1";
import EffectExample from "./_3_synchronizing_with_effects/example_2";

function App() {
    return (
        <div>
            <h1>Example Section 1</h1>
            <Stopwatch/>
            <hr/>
            <h1>Exercise Section 1</h1>
            <Chat/>
            <hr/>
            <Dashboard/>
            <hr/>
            <h1>Example Section 3</h1>
            <InfLoop />
            <EffectExample />
        </div>
    );
}

export default App;
