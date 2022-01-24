import React from 'react';
import PropTypes from 'prop-types';
import { addSong } from '../services/favoriteSongsAPI';
import Loading from './Loading';

class MusicCard extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      songState: '',
      favorite: false,
    };
  }

  handleclick = async () => {
    const {song} = this.props;
    this.setState({ loading: true });
    await addSong(song)
    this.setState({loading: false, favorite: true});

  }


  render() {
    const {
      trackName,
      preview,
      trackId,
      song,
    } = this.props;

    const { loading, favorite } = this.state;

    return (
      <>
      {loading ? <Loading /> 
        :
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
            onClick={this.handleclick}
            defaultChecked={ favorite }
            data-testid={`checkbox-music-${trackId}`}
          />
        </label>
      </div>
    }
    </>
    );
  }
}

MusicCard.propTypes = {
  trackName: PropTypes.string,
  preview: PropTypes.string,
}.isRequired;

export default MusicCard;
