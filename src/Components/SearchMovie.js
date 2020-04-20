import React, {Component} from 'react';
import { Input } from 'antd';

const { Search } = Input;

export class SearchButton extends Component {
    render() {
        return (
            <div>
                <Search placeholder="Search"
                        onSearch={value => this.props.movie(value)} 
                        enterButton
                        />
            </div>
        )
    }
}