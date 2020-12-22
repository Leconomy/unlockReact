import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const link = Link

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

// function ListItemLink({ to, ...rest }) {
//   console.error(to, rest)
//   return (
//     <Route
//       path={to}
//       children={({ match }) => (
//         <li className={match ? "active" : ""}>
//           <Link to={to} {...rest}>1</Link>
//         </li>
//       )}
//     />
//   );
// }

// export default function App() {
//   return (
//     <Router>
//     <ul>
//       <ListItemLink to="/somewhere" />
//       <ListItemLink to="/somewhere-else" />
//     </ul>
//   </Router>
//   );
// }

export default function App() {
  return (
    <Router getUserConfirmation={(message, callback) => {
      // this is the default behavior
      console.log(message)
      const allowTransition = window.confirm(message);
      callback(allowTransition);
    }}
    forceRefresh={true}
    >
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}