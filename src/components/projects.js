import Card from 'react-bootstrap/Card';

import messagesCode from '../assets/img/messages-code.png'
import tycoonCode from '../assets/img/tycoon-code.png'
import eventsCode from '../assets/img/events-code.png'

export const Projects = () => {
  return (
    <div className="projects" id="projects">
        <h1 className="projectsTitle">Projects</h1>

        <div className="projectCards">
            <Card style={{ width: '18rem', 'background-color': '#6e6ead', margin: '1rem' }}>
                <Card.Img variant="top" src={messagesCode} />

                <Card.Body>

                    <Card.Title><b>Messages</b></Card.Title>

                    <Card.Text>
                    Messages is a reliable, lightweight and syntax friendly signal-based library made specially for roblox-ts, which is meant to be a replace of an old version of mine which was called Events.
                    </Card.Text>

                </Card.Body>

                <Card.Body>

                    <a href="https://www.npmjs.com/package/@rbxts/message" style={{ 'text-decoration':'none', color: 'white' }}><b>npm package</b></a>

                </Card.Body>
            </Card>

            <Card style={{ width: '18rem', 'background-color': '#6e6ead', margin: '1rem' }}>
                <Card.Img variant="top" src={tycoonCode} />

                <Card.Body>

                    <Card.Title><b>Tycoon framework roblox-ts</b></Card.Title>

                    <Card.Text>
                    roblox-ts tycoon framework that will be open to public when its an stable release, it is meant to let new programmers from roblox-ts get familiar with how it feels to create games with it. It uses flamework as the core.
                    </Card.Text>

                </Card.Body>

                <Card.Body>

                    <a href="https://www.roblox.com/games/10453124635/roblox-ts-tycoon-framework" style={{ 'text-decoration':'none', color: 'white' }}><b>ROBLOX place</b></a>

                </Card.Body>
            </Card>

            <Card style={{ width: '18rem', 'background-color': '#6e6ead', margin: '1rem' }}>
                <Card.Img variant="top" src="https://tr.rbxcdn.com/9035b42044704f9c7d63ee88f3832a6a/768/432/Image/Png" />

                <Card.Body>

                    <Card.Title><b>Roblox Sim</b></Card.Title>

                    <Card.Text>
                    Roblox Sim was a project developed under DreamIt Studios and with roblox-ts. It was abandoned due to lack of communication between certain developers and slow progress over the week.
                    </Card.Text>

                </Card.Body>

                <Card.Body>

                    <a href="https://www.roblox.com/games/7351822925/Roblox-Sim" style={{ 'text-decoration':'none', color: 'white' }}><b>ROBLOX place</b></a>

                </Card.Body>
            </Card>
        </div>

        <div className="projectCards">
            <Card style={{ width: '18rem', 'background-color': '#6e6ead', margin: '1rem' }}>
                <Card.Img variant="top" src={eventsCode} />

                <Card.Body>

                    <Card.Title><b>Events</b></Card.Title>

                    <Card.Text>
                    First time doing any package in or out of the ROBLOX platform, not safe, not reliable enough, it is not meant to be used anymore. Use @rbxts/message instead.
                    </Card.Text>

                </Card.Body>

                <Card.Body>

                    <a href="https://www.npmjs.com/package/@rbxts/events" style={{ 'text-decoration':'none', color: 'white' }}><b>npm package</b></a>

                </Card.Body>
            </Card>

            <Card style={{ width: '18rem', 'background-color': '#6e6ead', margin: '1rem' }}>
                <Card.Img variant="top" src="https://tr.rbxcdn.com/bb4f9d5b69e8cc35052908e1340025f4/768/432/Image/Png" />

                <Card.Body>

                    <Card.Title><b>Pls Donate To Me</b></Card.Title>

                    <Card.Text>
                    A fun project made by two developers, I was the programmer and it was quite a challenge as it needed a proxy server for requiring the assets from players and displaying their shirts within. Made with roblox-ts.
                    </Card.Text>

                </Card.Body>

                <Card.Body>

                    <a href="https://www.roblox.com/games/8853016202/Pls-Donate-To-Me-NEW" style={{ 'text-decoration':'none', color: 'white' }}><b>ROBLOX place</b></a>

                </Card.Body>
            </Card>

            <Card style={{ width: '18rem', 'background-color': '#6e6ead', margin: '1rem' }}>
                <Card.Img variant="top" src="https://tr.rbxcdn.com/8846498525a6f9e734115a7a4abd6337/768/432/Image/Png" />

                <Card.Body>

                    <Card.Title><b>Coast Grill</b></Card.Title>

                    <Card.Text>
                    Worked as the Lead Programmer for Coast Grill, Luau project. I implemented (at the time I worked there) a new Rank manager for them and worked out a few updates.
                    </Card.Text>

                </Card.Body>

                <Card.Body>

                    <a href=" " style={{ 'text-decoration':'none', color: 'white' }}><b>Version unavailable</b></a>

                </Card.Body>
            </Card>
        </div>

        <div className="projectCards">
            <Card style={{ width: '18rem', 'background-color': '#6e6ead', margin: '1rem' }}>
                <Card.Body>
                    <Card.Img style={{ width: '6rem' }} variant="top" src="https://github.com/siriuslatte/clockproject/raw/master/resources/clockimage.png" />


                    <Card.Title><b>Clock Python</b></Card.Title>

                    <Card.Text>
                    Simple project in Python as I was learning. I experimented with a couple of libraries like `tkinter` for creating GUI and `googletrans` for translating the text depending on your region.
                    </Card.Text>

                </Card.Body>

                <Card.Body>

                    <a href="https://github.com/siriuslatte/clockproject" style={{ 'text-decoration':'none', color: 'white' }}><b>GitHub repo</b></a>

                </Card.Body>
            </Card>

            <Card style={{ width: '18rem', 'background-color': '#6e6ead', margin: '1rem' }}>
                <Card.Body>

                    <Card.Title><b>Other</b></Card.Title>

                    <Card.Text>
                    The time I've spent "on" the platform, it has been mostly for learning and helping others here and there. Recently, I've been looking to expand my portfolio and become a professional Game Developer.
                    </Card.Text>

                </Card.Body>
            </Card>
        </div>
    </div>
  );
}