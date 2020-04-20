import React, {Component} from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const API_KEY = 'cbddd995'

export class ContentComponent extends Component {
    state = {
        results: []
    }

    _fetchMovie(id) {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${id}`)
                .then(res => res.json())
                .then(data => {
                    const {Search = []} = data
                    this.setState({results: Search})
                    console.log(Search)
                })
    }

    componentDidMount() {
        this._fetchMovie(this.props.movie)
    }

    componentWillReceiveProps(nextProps) {
        this._fetchMovie(nextProps.movie)
    }

    _renderResults() {
        const {results} = this.state
        if (results.length === 0) {
            return (
                <p>No results!</p>
            )
        } else {
        return results.map(movie => {
                return (
                    <div key={movie.imdbID} className='card-movie'>
                        
                            <Card
                                hoverable
                                style={{ width: 240 }}
                                cover={<img alt={movie.Title} src={movie.Poster} />}
                            >
                                <Meta title={movie.Title} description={movie.Year} />
                            </Card>
                        
                    </div>
            )
        })
    }
}

    render() {
        return (
            <div className='card-list'>
                {this._renderResults()}
            </div>
        )
    }
}