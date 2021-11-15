import './App.css';
import { marked } from 'marked';
import React, { Component } from 'react';

marked.setOptions({
  breaks: true,
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: placeholder,
    };
  }

  handleChange = e => {
    this.setState({
      markdown: e.target.value,
    });
  };

  render() {
    const { markdown } = this.state;
    const text = marked(markdown);
    return (
      <div className="AppWrapper">
        <h1 className="appTitle">React Markdown Previewer</h1>
        <div className="wrapper">
          <div className="inputWrap">
            <Toolbar text="Editor" />
            <textarea
              id="editor"
              value={markdown}
              onChange={this.handleChange}
            />
          </div>
          <div className="outputWrap">
            <Toolbar text="Previewer" />
            <div id="preview" dangerouslySetInnerHTML={{ __html: text }}></div>
          </div>
        </div>
      </div>
    );
  }
}

const Toolbar = props => {
  return <div className="toolbar">{props.text}</div>;
};

const placeholder = `# React Markdown Previewer!
## This is a sub-heading... H2 size
### THis is H3 and you can do more:
  
Heres some code, \`<div></div>\`, between 2 backticks.
\`\`\`
// this is multi-line code:
function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can make text **bold**... 
Or _italic_.
Or... **_both!_**
Feel free to ~~cross stuff out~~.
There's also [links](https://github.com/alfiegh), and
> Block Quotes!
And if you want to get really crazy, even tables:
Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.
- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.
1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:
![React Logo w/ Text](https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg)`;

export default App;
