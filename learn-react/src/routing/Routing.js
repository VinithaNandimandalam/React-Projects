import React, { useState } from 'react';
import { Route, Link, NavLink, useParams, useRouteMatch, Redirect,Switch } from 'react-router-dom';
const Routing = props => {
    return <div>

        <div>
            <ul className='menu'>
                <NavLink to='/' exact><li>Home</li></NavLink>
                <NavLink to='/component'><li>Component</li></NavLink>
                <NavLink to='/withChild'><li>With Children</li></NavLink>
                <NavLink to='/form'><li>Form</li></NavLink>

            </ul>
        </div>
        <div style={{ clear: 'both' }}>
            {/* <Home />
        <Component />
        <ComponentWithChildren />
        <ChildComponent />
        <FormComponent /> */}

            {/* <Route to='/' render={()=><h1>Hello there</h1>}/> */}
            <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/component' component={Component} />
            <Route path='/withChild' component={ComponentWithChildren} />
            <Route path='/form' component={FormComponent} />
            <Route path='*' component={NoMatch} />
            </Switch>
        </div>
    </div>
}

const NoMatch = props => {
    return <h2>No Matching component found</h2>
}

//Home
const Home = props => {
    return <div>
        Home Component
    </div>
}


//Component(userList/...)

const Component = props => {
    const [flag, setFlag] = useState(false);
    return <div>
        {
            flag ? <Redirect to='/' /> : null
        }
        <p>Some Component</p>
        <button onClick={() => setFlag(true)}>Done</button>
    </div>
}

//ComponentWithChildren (UsersList/..  UserDetail)

const ComponentWithChildren = props => {
    let { path, url } = useRouteMatch();
    const items = [1, 2, 3, 4];
    return <div>
        Component with children
        {
            items.map(item => {
                return <Link key={item} to={`${url}/child/${item}`}><p>Child {item}</p></Link>
            })
        }
        <Route path={`${path}/child/:id`} component={ChildComponent} />
    </div>
}


//ChildComponent (simple stateless component -render some info)

const ChildComponent = props => {
    const { id } = useParams();
    console.log('PROPS:', props);

    return <div>
        Child Component {id}
    </div>
}
//FormComponent (Form)

const FormComponent = props => {

    const onSubmitFormHandler = e => {
        console.log('Form Submitted');
        console.log(props);
        setTimeout(() => {
            props.history.push({ pathname: '/component' })
        }, 10000);


    }
    return <div>
        Form Component
        <div>
            <input type='text' placeholder='Enter name' /><br />
            <input type='text' placeholder='Enter email' /><br />
            <button onClick={onSubmitFormHandler}>Submit</button>
        </div>
    </div>
}


export default Routing;