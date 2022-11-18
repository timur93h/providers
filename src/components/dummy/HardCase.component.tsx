/*
 * This will contain difficult logic with children
 */
import React, {memo} from "react";
import {useBaseProvider} from "../../providers/Base.provider";
import {HardCaseDummyComponent} from "./HardCaseDummy.component";

export const HardCaseComponent = memo(()=>{
    console.log('render hard case!!!')
    const { name } = useBaseProvider()
    return <>
        <p>This is dependant on Base with children!!! And it will rerender !!! name --- {name}</p>
        <p>But children will no rerender!!!</p>
        <HardCaseDummyComponent/>
    </>
})