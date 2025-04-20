import { Component, ReactNode } from 'react';
import Navbar from '../common/navBar';
import Footer from '../common/Footer';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <main>
        <Navbar/>
      <div className="text-center mt-10">Something went wrong.</div>
      <Footer/>
      </main>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
