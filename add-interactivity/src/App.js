import Gallery from "./_1_state_/Gallery";
import Inputbox from "./_1_state_/Inputbox";
import { Counter1 } from "./_3_state_as_a_snapshot_/Add3Example";
import { Counter2 } from "./_3_state_as_a_snapshot_/Add3Example";
import { Counter3 } from "./_3_state_as_a_snapshot_/Add3Example";


function App() {
    /* state */
    // return (
    //     <div>
    //         <Gallery/>
    //         <Inputbox/>
    //     </div>
    // );

    /* render and commit */
    // return (
    //     <div>
    //         <Gallery />
    //         <Inputbox />
    //     </div>
    // );

    /* state as a snapshot */
    return (
        <div>
            <Counter1 />
            <Counter2 />
            <Counter3 />
        </div>
    )

}

export default App;
