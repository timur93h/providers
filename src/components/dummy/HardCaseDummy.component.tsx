import React, {memo} from "react";

/**
 * No render will happen here ... we dont use any provider data
 */
export const HardCaseDummyComponent = memo(() => {
    console.log('render HardCaseDummyComponent only initial')
    return <p>I'm a chld of HardCase and no rerender will be here!!!...</p>
})