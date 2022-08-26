import Spline from '@splinetool/react-spline';

export const Banner = () => {
    return (
        <div className="banner" id="about-me">

            <div className="information">
                <h1 className="aboutTitle">Ademir Sánchez</h1>
                <p className="informationParagraph">Hello, I'm a 17yrs-old mexican TypeScript and Luau Developer. I have over 4yrs of experience backing me up, I've been in and out of the ROBLOX Platform and currently learning at its fullest TypeScript.</p>
            </div>

            <Spline className="spline-rendering" scene="https://prod.spline.design/usgcpcSEIaQzlyS4/scene.splinecode" />
        
        </div>
    )
}