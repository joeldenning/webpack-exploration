import { render } from 'react-dom'

render(<App name={"Keith"} />, document.getElementById('container'))

function App(props: AppProps) {
  return (
    <button>Hello {props.name}</button>
  )
}

interface AppProps {
  name: string;
}