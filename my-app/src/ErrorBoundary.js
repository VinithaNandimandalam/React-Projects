import { React } from 'react';

class VunerableComponent extends React.Component {

    state = { greet: 'Loading..' }

    componentDidMount() {
        setTimeout(() => {
            if (Math.random() > .5)
                throw new Error('Somethinmg went wrong');
            elsethis.setState({ greet: 'Hi there' });
        }, 1500);
    }

    render() {
        return <div className='comp'>
            <h4>Class Component</h4>
            <p>{this.state.greet}</p>
        </div>
    }
}


class ErrorBoundary extends React.Component {
    state = {
        hasError: false,
        errorMessage: ''
    }

    componentDidCatch = (error, info) => {
        this.setState({ hasError: true, errorMessage: error });
    }

    render() {
        if (this.statte.hasError) {
            return <h4>ERROR:{this.state.errorMessage}</h4>
        }
        else {
            return this.props.children;
        }
    }
}
