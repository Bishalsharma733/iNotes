import React from 'react'

const About = () => {
    return (
        <div>
            <div class="w3-container" style="padding:128px 16px" id="about">
                <h3 class="w3-center">ABOUT THE COMPANY</h3>
                <p class="w3-center w3-large">Key features of our company</p>
                <div class="w3-row-padding w3-center" style="margin-top:64px">
                    <div class="w3-quarter">
                        <i class="fa fa-desktop w3-margin-bottom w3-jumbo w3-center"></i>
                        <p class="w3-large">Responsive</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                    </div>
                    <div class="w3-quarter">
                        <i class="fa fa-heart w3-margin-bottom w3-jumbo"></i>
                        <p class="w3-large">Passion</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                    </div>
                    <div class="w3-quarter">
                        <i class="fa fa-diamond w3-margin-bottom w3-jumbo"></i>
                        <p class="w3-large">Design</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                    </div>
                    <div class="w3-quarter">
                        <i class="fa fa-cog w3-margin-bottom w3-jumbo"></i>
                        <p class="w3-large">Support</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                    </div>
                </div>
            </div>


            <div class="w3-container" style="padding:128px 16px" id="team">
                <h3 class="w3-center">THE TEAM</h3>
                <p class="w3-center w3-large">The ones who runs this company</p>
                <div class="w3-row-padding w3-grayscale" style="margin-top:64px">
                    <div class="w3-col l3 m6 w3-margin-bottom">
                        <div class="w3-card">
                            <img src="/w3images/team2.jpg" alt="John" style="width:100%"/>
                                <div class="w3-container">
                                    <h3>John Doe</h3>
                                    <p class="w3-opacity">CEO and Founder</p>
                                    <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                                    <p><button class="w3-button w3-light-grey w3-block"><i class="fa fa-envelope"></i> Contact</button></p>
                                </div>
                        </div>
                    </div>
                    <div class="w3-col l3 m6 w3-margin-bottom">
                        <div class="w3-card">
                            <img src="/w3images/team1.jpg" alt="Jane" style="width:100%"/>
                                <div class="w3-container">
                                    <h3>Anja Doe</h3>
                                    <p class="w3-opacity">Art Director</p>
                                    <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                                    <p><button class="w3-button w3-light-grey w3-block"><i class="fa fa-envelope"></i> Contact</button></p>
                                </div>
                        </div>
                    </div>
                    <div class="w3-col l3 m6 w3-margin-bottom">
                        <div class="w3-card">
                            <img src="/w3images/team3.jpg" alt="Mike" style="width:100%"/>
                                <div class="w3-container">
                                    <h3>Mike Ross</h3>
                                    <p class="w3-opacity">Web Designer</p>
                                    <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                                    <p><button class="w3-button w3-light-grey w3-block"><i class="fa fa-envelope"></i> Contact</button></p>
                                </div>
                        </div>
                    </div>
                    <div class="w3-col l3 m6 w3-margin-bottom">
                        <div class="w3-card">
                            <img src={"/w3images/team4.jpg"} alt="Dan" style="width:100%"/> 
                                <div class="w3-container">
                                    <h3>Dan Star</h3>
                                    <p class="w3-opacity">Designer</p>
                                    <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                                    <p><button class="w3-button w3-light-grey w3-block"><i class="fa fa-envelope"></i> Contact</button></p>
                                </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About
