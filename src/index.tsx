import "style-loader!css-loader!normalize.css";
import { render } from "react-dom";

const App = () => <div> yoHello</div>;

render(<App />, document.getElementById("app"));
