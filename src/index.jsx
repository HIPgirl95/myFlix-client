import { createRoot } from "react-dom/client";
import { MainView } from "./components/main-view/main-view";
import "./index.scss";
import Container from "react-bootstrap/Container";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux/dist/react-redux";
import { store } from "./redux/store";
import { LoginView } from "./components/login-view/login-view";

const MyFlixApplication = () => {
  return (
    <div className="my-flix">
      <Provider store={store}>
        <BrowserRouter>
          <LoginView />
        </BrowserRouter>
      </Provider>
    </div>
  );
};

const container = document.querySelector("#root");
const root = createRoot(container);

root.render(<MyFlixApplication />);

// Can test app by using
// parcel src/index.html
// in the terminal.

// http://localhost:1234
