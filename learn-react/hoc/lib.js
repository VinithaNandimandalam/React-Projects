import React from 'react';


export const WithClass=(WrappedComponent,className)=>{
    return props=>{
    <div classname={className}>
        <WrappedComponent {...props}/>
    </div>
    }
}



export const AuditMe=WrappedComponent=>{
    return class extends React.Component{
        componentDidMount(){
            console.log(('AuditMe [Mounted]: ',this.props));
            
        }
        render(){
            return <WrappedComponent {...this.props}/>
        }
    }
}
