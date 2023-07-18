import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
    return (
        <Container>
            <Section 
                title = "Phantom"
                description = "Born to lead, built to perform"
                backgroundImg = "Whitesuper.png"
                leftBtnText = "Book order"
                rightBtnText = "Existing inventory"
            />
            <Section 
                title = "TerraFury"
                description = "Unstoppable off-road performance"
                backgroundImg = "Ssnow.png"
                leftBtnText = "Book order"
                rightBtnText = "Existing inventory"  
            />
            <Section 
                title = "Raptor"
                description = "Dominate the road with raw power"
                backgroundImg = "Ssupercar.png"
                leftBtnText = "Book order"
                rightBtnText = "Existing inventory"
            />
            <Section 
                title = "Apex"
                description = "Reach the peak of performance and luxury"
                backgroundImg = "Sluxury.png"
                leftBtnText = "Book order"
                rightBtnText = "Existing inventory"
            />
            <Section 
                title = "Trailblazer"
                description = "Forge your own path in ultimate off-road style"
                backgroundImg = "SJeep.png"
                leftBtnText = "Book order"
                rightBtnText = "Existing inventory"
            />
            <Section 
                title = "Inferno"
                description = "Twist the throttle on ultimate performance"
                backgroundImg = "Bike.png"
                leftBtnText = "Order now"
                rightBtnText = "Learn More"
            />
            <Section 
                title = "DriveVault"
                description = "Revolutionize your drive with advanced sensors and analytic"
                backgroundImg = "audio.jpg"
                leftBtnText = "Shop now"
            />
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
    z-index: 10;
`
