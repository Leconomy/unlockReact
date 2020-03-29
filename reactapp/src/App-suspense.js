import React, {Suspense} from "react";
const Hello = React.lazy(() => import('./suspense/hello'));


export default class AppSuspense extends React.Component {
    render() {
        return (
            <div>
                <Suspense fallback={<p>loading...</p>}>
                    <Hello />
                </Suspense>
            </div>
        )
    }
}
