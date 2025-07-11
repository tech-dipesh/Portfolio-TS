import { Component, ReactNode } from 'react';
import Navbar from '../common/navBar';
import Footer from '../common/Footer';
import { Link } from 'react-router-dom';

// types that i added
interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

// The error will catch by the class component with the oops concept.
class ErrorBoundary extends Component<Props, State> {
  // default have error no
  state: State = { hasError: false };

  // if the error catch by browser error exist
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <main>
        <Navbar/>
      <div className="text-center mt-10">The error is from our site, sorry for the inconvenience.</div>
      <button><Link to="/"> Go to Homepage</Link></button>
      <Footer/>
      </main>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
