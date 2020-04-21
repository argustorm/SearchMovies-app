import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import {TrophyOutlined} from '@ant-design/icons';
import { Badge } from 'antd';

const API_KEY = 'cbddd995'

export class DetailPage extends Component {
    state = {
        id: ''
    }
    
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.object,
            isExact: PropTypes.bool,
            path: PropTypes.string,
            url: PropTypes.string
        })
    }

    _fetchDetailMovie({id}) {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    this.setState({id: data})
                })
    }

    componentDidMount() {
        console.log(this.props)
        const {id} = this.props.match.params
        this._fetchDetailMovie({id})
    }

    _renderInfoMovie() {
        const {Title, Actors, Director, imdbRating, Year, Genre, Poster} = this.state.id
        return (
            <div className='detail-background'>
                 <div className='detail-card'>
                    <Card title={Title} style={{ width: 500, borderRadius: 28 }}>
                    <img alt={Title}
                        src={Poster}
                        />
                        <p style={{margin:10}}><strong>Director: </strong>{Director}</p>
                    <div className='badge-trophy'>
                        <TrophyOutlined style={{fontSize: 20}} />
                        <Badge count={imdbRating} style={{marginLeft: 10}} />
                    </div>
                    <div>
                        <p style={{margin:10}}><strong>Actors: </strong>{Actors}</p>
                        <p style={{margin:10}}><strong>Genre: </strong>{Genre}</p>
                        <p style={{margin:10}}><strong>Year: </strong>{Year}</p>
                    </div>
                    </Card>
                </div>
            </div>
           
        )
    }

    render () {
        return (
            <div>
                {this._renderInfoMovie()}
            </div>
        )
    }
}