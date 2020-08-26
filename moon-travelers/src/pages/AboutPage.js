import React from 'react'
import styled from 'styled-components'

const About = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5%;

    @media (max-width: 500px) {
        font-size: 2rem;
    }
`
const AboutMain = styled.p`
    width: 100%;
    padding: 8%;
    font-size: 1.5rem;
    text-shadow: 2px 2px 4px #000000;
    

    @media (max-width: 500px) {
        font-size: 1.25rem;
    }
`

export default function AboutPage() {
    return (
        <About className="about">
            <h1>About Me</h1>
            <AboutMain>
                Lorem iAboutMainsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Eget aliquet nibh praesent tristique magna. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus. Dapibus ultrices 
                in iaculis nunc sed augue lacus. Leo integer malesuada nunc vel risus commodo viverra. Cras fermentum odio eu feugiat pretium nibh ipsum consequat. 
                Eget dolor morbi non arcu risus quis varius. Tincidunt ornare massa eget egestas purus viverra. Nunc aliquet bibendum enim facilisis gravida neque convallis 
                a. Odio morbi quis commodo odio aenean sed adipiscing diam. Aliquet nibh praesent tristique magna sit amet purus. Vulputate dignissim suspendisse in
                est ante in nibh mauris cursus. Mauris ultrices eros in cursus turpis massa tincidunt. Neque sodales ut etiam sit. Magna eget est lorem ipsum dolor sit. 
                At tellus at urna condimentum mattis. Fermentum iaculis eu non diam phasellus. Cras tincidunt lobortis feugiat vivamus at augue eget. Velit scelerisque 
                in dictum non consectetur a erat nam.

                Vel orci porta non pulvinar. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Morbi tincidunt ornare massa eget egestas purus. Rhoncus dolor 
                purus non enim praesent elementum facilisis leo. In vitae turpis massa sed elementum tempus egestas sed sed. Pretium quam vulputate dignissim suspendisse in est. 
                Tempus quam pellentesque nec nam aliquam sem et tortor consequat. Urna duis convallis convallis tellus id. Leo urna molestie at elementum. Egestas fringilla 
                phasellus faucibus scelerisque eleifend donec.

                Rutrum tellus pellentesque eu tincidunt tortor aliquam. Fames ac turpis egestas integer eget aliquet nibh praesent. Posuere ac ut consequat semper viverra 
                nam libero justo laoreet. Faucibus a pellentesque sit amet porttitor eget dolor. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Sed nisi 
                lacus sed viverra tellus in. Tincidunt vitae semper quis lectus nulla at volutpat diam ut. Est placerat in egestas erat imperdiet. Rhoncus mattis rhoncus urna neque viverra 
                justo nec ultrices dui. Enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit. Purus sit amet luctus venenatis lectus magna fringilla. Faucibus pulvinar 
                elementum integer enim neque volutpat.
            </AboutMain>
        </About>
    )
}
