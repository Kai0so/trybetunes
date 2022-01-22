import React from 'react';
import PropTypes from 'prop-types';

class MusicCard extends React.Component {
  render() {
    const {
      trackName,
      preview,
    } = this.props;

    return (
      <div>
        <h4>
          { trackName }
        </h4>
        <audio data-testid="audio-component" src={ preview } controls>
          <track kind="captions" />
        </audio>
      </div>
    );
  }
}

MusicCard.propTypes = {
  trackName: PropTypes.string,
  preview: PropTypes.string,
}.isRequired;

export default MusicCard;
