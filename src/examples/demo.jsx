import { create } from "zustand";

const usePersonState = create((set) => ({
    firstName: 'xxx',
    lastName: 'zzz',
    wife: {
        name: 'wife name',
        car: {
            miles: 123,
            name: 'toyota',
        }
    },
    updateFirstName: (p) => {
        set(() => ({
            firstName: p
        }))
    },
    updateCarName: (p)=> {
        set((state)=>({
            wife: {
                ...state.wife,
                car: {
                    ...state.wife.car,
                    name: p
                }
            }
        }))
    },
    reset: ()=> null,
}));

const Demo = () => {

    const p1 = usePersonState((state) => state.firstName);
    const p2 = usePersonState((state) => state.firstName);

    const updateFirstName = usePersonState((state) => state.updateFirstName);

    const wife = usePersonState((state) => state.wife);
    const updateCarName = usePersonState((state) => state.updateCarName);
    const reset = usePersonState((state) => state.reset);

    const handleChange = (text) => {
        updateCarName(text);
        updateFirstName(text + '-name');
    }

    return (
        <>
            Demo:

            <p>p1: {p1} {p2}</p>


            <form>
                <input type="text" placeholder="new firstName" onChange={(e) => { handleChange(e.target.value) }} />
                <button onClick={reset}>reset</button>
            </form>

 
            <p>wife({wife.name}) drives {wife.car.name} for {wife.car.miles} miles</p> 
        </>
    );


}

export default Demo;