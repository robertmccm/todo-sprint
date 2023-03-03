import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../store/actions";


const Counting = () => {
    const dispatch = useDispatch();
    const count = useSelector(state => state.count);

    const incrementHandler = () => {
        dispatch(increment());
    }

    const decrementHandler = () => {
        dispatch(decrement());
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={incrementHandler}>Increment</button>
            <button onClick={decrementHandler}>Decrement</button>
        </div>
    );
}

export default Counting;