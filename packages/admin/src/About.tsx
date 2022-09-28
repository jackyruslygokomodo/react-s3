import { lazy, Suspense, useState } from "react";
import { Link } from "react-router-dom";

const LazyComponent = lazy(() => import('./LazyComponent'));

const About = () => {
    const [isVisible, setIsVisible] = useState(false);

    return <div>About Lazy Load Update

        <Link to={`/`}>Go to Home</Link>



        {isVisible ? (
            <Suspense fallback={<div>Loading</div>}>
                <LazyComponent />
            </Suspense>
        ) : <button onClick={() => setIsVisible(true)}>Load Lazy Component</button>}
    </div>
}

export default About;
