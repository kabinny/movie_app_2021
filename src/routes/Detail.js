import React from 'react';
import './Detail.css';

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push('/');
    }
  }
  // 포스터 사이즈 큰 거, about edit
  render() {
    const { location } = this.props;
    if (location.state) {
      const { year, title, summary, poster, genres } = location.state;
      return (
        <div className="detail__container">
          <img src={poster} alt={title} title={title} />
          <div className="details">
            <h2>{title}</h2>
            <span className="year">{year}</span>
            <ul className="genres">
              {genres.map((genre, index) => {
                return (
                  <li key={index} className="genre">
                    {genre}
                  </li>
                );
              })}
            </ul>
            <p>{summary}</p>
          </div>
        </div>
      );
    } else {
      return null;
    }    
  }
}

export default Detail