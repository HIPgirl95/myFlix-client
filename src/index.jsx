import { createRoot } from "react-dom/client";
import { MainView } from "./components/main-view/main-view";
import "./index.scss";
import Container from "react-bootstrap/Container";
import { BrowserRouter } from "react-router-dom";

const MyFlixApplication = () => {
  return (
    <div className="my-flix">
      <BrowserRouter>
        <Container>
          <MainView />
        </Container>
      </BrowserRouter>
    </div>
  );
};

const container = document.querySelector("#root");
const root = createRoot(container);

root.render(<MyFlixApplication />);
