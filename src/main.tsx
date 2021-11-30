import { render } from 'react-dom'
import "./main.css"
import "./blue.css"
import "./green.css"

render(<App name={"Keith"} />, document.getElementById('container'))

function App(props: AppProps) {
  const yoshi = () => {};

  return (
    <>
      <button className="red">Hello {props.name}</button>
      <input placeholder="John Doe" />
    </>
  )
}

interface AppProps {
  name: string;
}