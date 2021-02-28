import React from "react";
interface Props {}

interface State {
  hasError: boolean
}
export default class MoviesErrorBoundary extends React.Component<Props,State> {
    constructor(props) {
      super(props)
      this.state = { hasError: false }
    }
    static getDerivedStateFromError(): State {
      return { hasError: true };
    }

    render() {
      if (this.state.hasError) {
          return <h1>Oops!!! Something went wrong</h1>;
      } else {
          return this.props.children;
      }
    }
  }