import React from "react"
class Aside extends React.Component {
    constructor(props) {
        super(props)
        this.state = { item: false };
    }
    render() {
        if(this.state.item===false){


        return (<aside>
            <button className="ver" onClick={(x) => { 
                if (this.state.item === false) { this.setState({ item: true })  } else { this.setState({ item: false }) }
            }}>
                I
            </button>

            <div className="habilit esconder">
                <img src="https://avatars.githubusercontent.com/u/84031593?s=400&u=a90e9023c92987804f553691f435d9dcae7a8fb0&v=4" alt="" />
                <h2>conhecimentos</h2>
                <ul>
                    <li>html5</li>
                    <li>css3</li>
                    <li>javascript</li>
                    <li>python</li>
                    <li>java</li>
                    <li>mysql</li>
                </ul>
                <h2>habilidades</h2>
                <ul>
                    <li>criação de bots(webscraping e automação)</li>
                    <li>programação frontend(Reactjs)</li>
                    <li>programação backend(Nodejs)</li>
                    <li>desenho digital</li>

                </ul>
            </div>
        </aside>)
        }else{
            return (<aside>
                <button className="ver on" onClick={(x) => { 
                    if (this.state.item === false) { this.setState({ item: true })  } else { this.setState({ item: false }) }
                }}>
                    I
                </button>
    
                <div class="habilit">
                    <img src="https://avatars.githubusercontent.com/u/84031593?s=400&u=a90e9023c92987804f553691f435d9dcae7a8fb0&v=4" alt="" />
                    <h2>conhecimentos</h2>
                    <ul>
                        <li>html5</li>
                        <li>css3</li>
                        <li>javascript</li>
                        <li>python</li>
                        <li>java</li>
                        <li>mysql</li>
                    </ul>
                    <h2>habilidades</h2>
                    <ul>
                        <li>criação de bots(webscraping e automação)</li>
                        <li>programação frontend(Reactjs)</li>
                        <li>programação backend(Nodejs)</li>
                        <li>desenho digital</li>
                    </ul>
                </div>
            </aside>)

        }
    }
}
export default Aside