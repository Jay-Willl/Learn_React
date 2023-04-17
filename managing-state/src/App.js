import EditProfile from "./_1_reacting_to_input_with_state_/re_index";
import Accordion from "./_3_sharing_state_between_components_/example_1";
import SyncedInputs from "./_3_sharing_state_between_components_/exercise_1";
import FilterableList from "./_3_sharing_state_between_components_/exercise_2";
import Counter1 from "./_4_preserving_and_resetting_state_/example_1";
import Counter2 from "./_4_preserving_and_resetting_state_/example_2";
import Counter3 from "./_4_preserving_and_resetting_state_/example_3";
import InputText1 from "./_4_preserving_and_resetting_state_/exercise_1";
import InputText2 from "./_4_preserving_and_resetting_state_/exercise_2";
import Messenger from "./_5_extracting_state_logic_into_a_reducer_/exercise_1/App";

function App() {
    return (
        <div>
            <h1>Exercise Section 1</h1>
            <EditProfile/>
            <hr/>
            <h1>Example Section 3</h1>
            <Accordion/>
            <hr/>
            <h1>Exercise Section 3</h1>
            <SyncedInputs/>
            <hr/>
            <FilterableList/>
            <hr/>
            <h1>Example Section 4</h1>
            <Counter1/>
            <hr/>
            <Counter2/>
            <hr/>
            <Counter3/>
            <hr/>
            <h1>Exercise Section 4</h1>
            <InputText1/>
            <hr/>
            <InputText2/>
            <hr/>
            <h1>Example Section 5</h1>
            <Messenger/>
            <hr/>
        </div>
    );
}

export default App;
