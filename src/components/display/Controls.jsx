/* eslint-disable max-len */
/* eslint-disable indent */
import React from 'react';
import PropTypes from 'prop-types';

export default function Controls({ undo, current, redo, colorHistory, record }) {
    return (
        <>
            <div>
                <button
                    aria-label={'undo'}
                    onClick={undo}
                    style={{ margin: '10px' }}
                    disabled={current <= 0}
                >undo</button>
                <button
                    aria-label={'redo'}
                    onClick={redo}
                    style={{ margin: '10px' }}
                    disabled={current >= colorHistory.length - 1 || colorHistory.length <= 1}
                >redo</button>
            </div>
            <label> Choose A Color:
            <input
                    aria-label={'color-input'}
                    type="color"
                    style={{ margin: '10px' }}
                    value={colorHistory[current]}
                    onChange={(e) => record(e.target.value)}
                />
            </label>
        </>
    );
}

Controls.propTypes = {
    undo: PropTypes.func.isRequired,
    current: PropTypes.number.isRequired,
    redo: PropTypes.func.isRequired,
    colorHistory: PropTypes.arrayOf(PropTypes.string).isRequired,
    record: PropTypes.func.isRequired,
};
