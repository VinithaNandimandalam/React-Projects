import React from 'react';

class ClassComponent extends React.Component {
    countries = [{ code: 'US', name: 'United States' },
    { code: 'AUS', name: 'Australia' }]
    state = { show: 'false' }

    onToggleHandler = () => {
        console.log('Toggle Clicked');
        // this.show=!this.show;
        // console.log((this.show));

        this.setState((prevState)=> {
            return { show: !prevState.show };
        });
    }

    render() {
        console.log('Rendering' + this.show);
        return <div>
            Hello Class Component<br>
            </br>
            <button onClick={this.onToggleHandler}>Toggle</button>
            <br></br>
            {
                this.show ? this.countries.map((country, index) => {
                    return <div key={country.code} id={country.name}>{index}:{country.name}</div>
                }) : null
            }
        </div>

    }
}
export default ClassComponent;