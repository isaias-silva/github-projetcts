import React from "react"
import conect from "../modules/conect";
class Aside extends React.Component {
    constructor(props) {
        super(props)
        this.state = { item: false, fotourl:'aaaaaaaaa'};
    }
  async api(){
  const req=  await conect.conectbasic('isaias-silva')
    await this.setState({fotourl:req.data.avatar_url})
}
    render() {
        this.api()
        if(this.state.item===false){
        

        return (<aside>
            <button className="ver" onClick={(x) => {
                if (this.state.item === false) { this.setState({ item: true })
                  } else { this.setState({ item: false }) }
            }}>
                I
            </button>

            <div className="habilit esconder">
                <img src={this.state.fotourl} alt="avatar" />
                <h2>conhecimentos</h2>
                <ul>
                    <li>html5</li>
                    <li>css3</li>
                    <li>javascript</li>
                    <li>python</li>
                    <li>java</li>
                    <li>mysql</li>
                    <li>C/C++</li>

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
                    if (this.state.item === false) { this.setState({ item: true }) 
                     } else { this.setState({ item: false })
                    }
                }}>
                    I
                </button>
    
                <div class="habilit">
                <img src={this.state.fotourl} alt="avatar" />

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