import counterStore from "../zustand/counterStore";

function ZustandCount() {
    const [Count, Increase, Decrease, Reset] = counterStore((state) =>
        [
            state.count,
            state.increaseCount,
            state.decreaseCount,
            state.resetCount
        ]
    );

    return (
        <>
            <div>
                apples
                {Count}
            </div>
            <button onClick={Increase} > Increase</button>
            <button onClick={Decrease} > Decrease </button>
            <button onClick={Reset} > Reset </button>
        </>
    )
}
export default ZustandCount;