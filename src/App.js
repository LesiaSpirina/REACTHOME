import { useState } from "react"

import { Message1 } from "./components/classes/Message1"
import { Message } from "./components/func/Message"

export function App() {
    return (
        <>
        <Message1/>
        <hr/>
        <Message titleOther='Message From Home'/>
            </>
    )
}
