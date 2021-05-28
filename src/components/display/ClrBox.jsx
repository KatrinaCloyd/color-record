/* eslint-disable indent */
import React from 'react';
import PropTypes from 'prop-types';

export default function ClrBox({ colorHistory, current }) {
    return (
        <div
            style={{
                backgroundColor: '#efefef',
                border: '.25px solid #919191',
                borderRadius: '3px',
                borderOffset: '5px',
                width: '11rem',
                height: '11rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
            <div
                aria-label={'clr-box'}
                style={{
                    backgroundColor: colorHistory[current],
                    border: '.25px solid #919191',
                    width: '10rem',
                    height: '10rem',
                }}
            ></div>
        </div>
    );
}

ClrBox.propTypes = {
    colorHistory: PropTypes.arrayOf(PropTypes.string).isRequired,
    current: PropTypes.number.isRequired
};
