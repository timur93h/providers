import React, {memo} from "react";
import {useBaseProvider} from "../../providers/Base.provider";

/**
 * Здесь будет ререндер !!! значение было изменено
 */
export const DummyRerenderComponent = memo(() => {
    console.log('render in DummyRerenderComponent')
    const {name} = useBaseProvider()
    return <p>I use context her for name ... {name}</p>
})