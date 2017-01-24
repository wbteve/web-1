import * as React from "react";
import faqQuestions from './../faqQuestions';

export class FAQ extends React.Component<any,{}> {
  render() {

    return (<div> 

    {   
      faqQuestions.questions.map(function(question:any, i:number) {
          return (
            <div className="panel panel-default" key={i}>
              <div className="panel-heading" role="tab" id={"heading"+i}>
                <h4 className="panel-title">
                  <a className="collapsed" 
                    role="button" 
                    data-toggle="collapse" 
                    data-parent="#accordion" 
                    href={"#collapse"+i}
                    aria-expanded="false" 
                    aria-controls={"collapse"+i}>

                    {question.text}

                  </a>
                </h4>
              </div>
              <div id={"collapse"+i} className="panel-collapse collapse" role="tabpanel" aria-labelledby={"heading"+i}>
                <div className="panel-body">
                  {question.answer}
                </div>
              </div>
            </div>
          )
      })
    }
  
    </div>);
  }
}

export default FAQ