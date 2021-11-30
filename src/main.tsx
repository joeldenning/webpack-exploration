/** @jsxImportSource @emotion/react */
import { render } from "react-dom";
import styles from "./main.module.css";
import "./blue.css";
import "./green.css";
import "./orange.scss";

render(<App name={"Keith"} />, document.getElementById("container"));

function App(props: AppProps) {
  const yoshi = () => {};

  return (
    <>
      <button className={styles.red}>Hello {props.name}</button>
      <div className="orange">Orange</div>
      <div
        css={{
          color: "yellow",
        }}
      >
        Yellow
      </div>
      <input placeholder="John Doe" />
    </>
  );
}

interface AppProps {
  name: string;
}
