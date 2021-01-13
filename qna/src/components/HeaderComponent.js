import React,{ Component } from 'react';
import { Jumbotron} from 'reactstrap';

class Header extends Component{
    constructor(props){
        super(props);

        this.state = {
            isNavOpen: false
        };

        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render(){
        return(
            <React.Fragment>
                <Jumbotron className='jumbotron'>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>QMe ?</h1>
                                <p>We shall be the ones asking questions!</p>
                                <p>--Shubham Gandhi</p>          
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </React.Fragment>
        );
    }
}

export default Header;