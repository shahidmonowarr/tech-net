import { decrement, increment, incrementByAmount } from './redux/features/counter/counterSlice';
import { useAppDispatch, useAppSelector } from './redux/hook';
import { RootState } from './redux/store';

function App() {
  const {count} = useAppSelector((state: RootState) => state.counter);
  const dispatch = useAppDispatch()

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex gap-6 items-center">
      <button className="border-2 border-green-500 rounded-md px-2 py-3"
      onClick={() => dispatch(increment())}>
        Increment
      </button>
      <button className="border-2 border-green-500 rounded-md px-2 py-3"
      onClick={() => dispatch(incrementByAmount(5))}>
        Increment by 5
      </button>
      <div>{count}</div>
      <button className="border-2 border-red-500 rounded-md px-2 py-3"
      onClick={() => dispatch(decrement())}>
        Decrement
      </button>
      </div>
    </div>
  )
}

export default App
