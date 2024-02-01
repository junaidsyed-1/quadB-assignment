import { Outlet, createBrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import MoviePageContainer from "./components/MoviePageContainer";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/movie/:id",
        element: <MoviePageContainer />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
