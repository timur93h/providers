import React, {memo} from "react";

/**
 * No render will happen here ... we dont use any provider data
 */
export const DummyComponentNoRerender = memo(() => {
    console.log('render DummyComponentNoRerender only initial')
    return <p>I dont use context here ...</p>
})