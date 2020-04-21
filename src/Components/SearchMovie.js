import React, {Component} from 'react';
import { Input } from 'antd';

const { Search } = Input;

export class SearchButton extends Component {
    render() {
        return (
            <div>
                <div>
                    <Search placeholder="Search Movie"
                            onSearch={value => this.props.movie(value)} 
                            enterButton
                            />
                </div>
            </div>
            
        )
    }
}