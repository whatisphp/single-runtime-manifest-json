import React from "react";
import RemoteButton from 'app2/Button';

export default function Test() {

    console.log('test');

    return (
        <React.Fragment>
            <React.Suspense fallback="Loading Remote Button...">
                <RemoteButton />
            </React.Suspense>
        </React.Fragment>
    )
}