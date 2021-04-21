import "./styles.css";
import { useAtom } from "./atomHook";
import { testAtom, testReqAtom } from "./atoms";

export default function App() {
  const test = useAtom(testAtom);

  const [testReq, testReqState] = useAtom(testReqAtom);

  const increment = () => testAtom.setState({ count: test.count + 1 });
  const decrement = () => testAtom.setState({ count: test.count - 1 });

  const load = () => {
    testReqAtom.setHttpState({ loading: true });
    setTimeout(() => {
      testReqAtom.setHttpState({ loaded: true }, ({ count }) => ({
        count: count + 1
      }));
    }, 2000);
  };

  const reset = () => {
    testReqAtom.reset();
  };

  return (
    <div className="App">
      <h1>Counter</h1>
      {testReqState.loaded && <h2>{testReq.count}</h2>}
      <button disabled={testReqState.loading} onClick={load}>
        {testReqState.loading ? "loading..." : "load"}
      </button>

      <button onClick={reset}>reset</button>

      {Array.from(Array(testReq.count)).map((_, index) => (
        <div key={index}>
          <h2>{test.count}</h2>
          <button onClick={increment}>+</button>
          <button onClick={decrement}>-</button>
        </div>
      ))}
    </div>
  );
}
