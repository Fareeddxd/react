import logo from './logo.svg';
import './App.css';

function App(){
 return (
  <div>
  <div style={{backgroundColor:'red', height:'40px',padding:'10px'}}>

  </div>

  <ul  id='ulitem'>
    <li>item 1</li>
    <li>item 2</li>
    <li>item 3</li>
    <li>item 4</li>
    <li>item 5</li>
  </ul>
  <img width={'200'} height={100} src="https://i0.wp.com/worldgbctourevent.fr/wp-content/uploads/2018/01/banner-bg-1.jpg?ssl=1" alt="" />

  <table id='tables' border={2} style={{borderCollapse:'collapse'}}>
    <tr>
      <th>item 1</th>
      <th>item 2</th>
      <th>item 3</th>
      <th>item 4</th>
    </tr>
    <tr>
      <td>item 1</td>
      <td>item 2</td>
      <td>item 3</td>
      <td>item 4</td>
    </tr>
    <tr>
      <td>item 1</td>
      <td>item 2</td>
      <td>item 3</td>
      <td>item 4</td>
    </tr>
  </table>

  </div>


 )
}

export default App