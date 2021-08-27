import React from 'react';
import { ToggleButtonProps } from './types';

function ToggleButton({ transformation, setTransformation, dark }: ToggleButtonProps): JSX.Element {
    return (
        <div className={!transformation ? `Toggle-Button open` : `Toggle-Button`} data-test="Toggle-Button" onClick={() => setTransformation(!transformation)}>
            <div className={!dark ? 'Toggle-Button__burger' : 'Toggle-Button__burger dark'} data-test="Toggle-Button__burger"></div>
        </div>
    );
}

export default ToggleButton;
