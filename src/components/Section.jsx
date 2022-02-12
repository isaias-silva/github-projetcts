import React from "react";
import conect from "../modules/conect";
class Section extends React.Component{
constructor(props){
    super(props)
    this.state={projects:[]}
}
async onload(){
const data=await conect.conectrepos('isaias-silva')
this.setState({projects:data.data})
}

render(){
    this.onload()

    let rows =[]
    for (let i in this.state.projects) {
      rows.push( 
         <a href={this.state.projects[i].html_url} target='_blank' rel="noreferrer">
      <div class="box">
          <h2>{this.state.projects[i].name}</h2>
          <div class="describ">
              <p>

          {this.state.projects[i].description}
              </p>
          </div>
      </div>
  </a>)
    
}
    return(<section>
     <div class="conteudo">
        <div class="item">
            <h2>projetos:</h2>
            <div class="prod">
            {rows}
            </div>
        </div>
     
     </div>
    </section>)
}
}
export default Section