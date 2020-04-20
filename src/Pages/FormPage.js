import React, {Component} from 'react';

// Components
import { SearchButton } from '../Components/SearchMovie';
import { ContentComponent } from '../Components/Content';

export class FormPage extends Component {
    state = {
        movie: '',
        showContent: false
    }

    _handleMovie = (movie) => {
        this.setState({movie, showContent: true})
    }

    
        
    

    render() {
        return (
            <div>
                <div  className="SearchButton">
                    <SearchButton movie={this._handleMovie}/>
                </div>
                <div>
                    {this.state.showContent
                        ? <ContentComponent movie={this.state.movie}/>
                        : null}
                </div>
            </div>
        )
    }
}