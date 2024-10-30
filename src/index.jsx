import { createRoot } from "react-dom/client";
import { MainView } from "./components/main-view/main-view";
import "./index.scss";
import Container from "react-bootstrap/Container";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux/dist/react-redux";
import { store } from "./redux/store";

const MyFlixApplication = () => {
  return (
    <div className="my-flix">
      <Provider store={store}>
        <BrowserRouter>
          <MainView />
        </BrowserRouter>
      </Provider>
    </div>
  );
};

const container = document.querySelector("#root");
const root = createRoot(container);

root.render(<MyFlixApplication />);
