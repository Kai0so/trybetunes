import React from 'react';
import PropTypes from 'prop-types';
import { addSong, getFavoriteSongs } from '../services/favoriteSongsAPI';
import Loading from './Loading';

class MusicCard extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      favorite: false,
      favoriteMusics: [],
    };
  }

  componentDidMount() {
    this.getFavorite();
  }

  getFavorite = async () => {
    const { favoriteMusics } = this.state;
    const { trackId } = this.props;

    this.setState({ loading: true });
    const result = await getFavoriteSongs();
    this.setState({ loading: false, favoriteMusics: result });
    favoriteMusics.forEach((song) => {
      if (song.trackId === trackId) {
        this.setState({ favorite: true });
      }
    });
  }

  handleclick = async () => {
    const { song } = this.props;
    this.setState({ loading: true });
    await addSong(song);
    this.setState({ loading: false, favorite: true });
  }

  render() {
    const {
      trackName,
      preview,
      trackId,
    } = this.props;

    const { loading, favorite } = this.state;

    return (
      <div>
        {loading ? <Loading />
          : (
            <div>
              <h4>
                { trackName }
              </h4>
              <audio data-testid="audio-component" src={ preview } controls>
                <track kind="captions" />
              </audio>
              <label htmlFor="favorite">
                Favorita
                <input
                  type="checkbox"
                  name="favorite"
                  id="favorite"
                  onClick={ this.handleclick }
                  defaultChecked={ favorite }
                  data-testid={ `checkbox-music-${trackId}` }
                />
              </label>
            </div>)}
      </div>
    );
  }
}

MusicCard.propTypes = {
  trackName: PropTypes.string,
  preview: PropTypes.string,
}.isRequired;

export default MusicCard;
