import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './CounterSlice'
import '../App.css'

export default function App() {
    const count = useSelector((state) => state.coounter.value)
    const dispatch = useDispatch();


    return (
        <div>
            <div >
                <h3>Count:{count} </h3>

                <br />
                <button

                    onClick={() => {
                        dispatch(increment());
                        console.log(count);
                        dispatch(increment());
                        console.log(count);
                    }
                    }
                >
                    Increment
                </button>

                <button

                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>

                <button

                    onClick={() => dispatch(incrementByAmount(5))}
                >
                    Increment
                </button>
            </div>
        </div>
    )
}