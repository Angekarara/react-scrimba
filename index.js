ReactDOM.render(<h1 className = 'header'>Hello, everyone!</h1>, document.getElementById("root") ) 
// const page = (
//     <div>
//         <h1>This is JSX</h1>
//         <p>This is paragraph</p>
//     </div>
// )
// ReactDOM.render(
//     page, document.querySelector('#root')
// )
const page = (
    <div>
    <img src="./react-logo.png" width = "40px"/>
    <h1> Fun facts about React</h1>
    <ul>
    <li>It was first released in 2013</li>
    <li>Was originally  created by jordan wales</li>
    <li>Has well over 100k stars</li>
    <li>Is maintained by facebook</li>
    </ul>
    </div>
    
  )
  
  ReactDOM.render(page,document.getElementById("root"))