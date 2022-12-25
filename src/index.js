import React from "react";
//import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";

// // Before
// import { render } from 'react-dom';
// const container = document.getElementById('app');
// render(<App tab="home" />, container);

// // After
// import { createRoot } from 'react-dom/client';
// const container = document.getElementById('app');
// const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(<App tab="home" />);

// ReactDOM.render(
//   <React.StrictMode>
//     <AuthContextProvider>
//       console.log("before rendering app component");
//       <App />
//     </AuthContextProvider>
//   </React.StrictMode>,
//   document.getElementById("root")

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <React.StrictMode>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </React.StrictMode>,
    );;


