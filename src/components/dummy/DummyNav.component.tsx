import React, {memo} from "react";
import {useNavProvider} from "../../providers/Navigation.provider";

/**
 * Здесь не будет рирендера , мы не используем данные провайдер Base
 */
export const DummyNavComponent = memo(() => {
    console.log('Dummy Nav component');
    const {country} = useNavProvider()
    return <p>Country Dummy render ... {country}</p>
})