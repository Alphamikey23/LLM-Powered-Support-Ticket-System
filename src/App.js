import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
	<form >
	  <label>Title: </label>
	  <input name="title" /><br />
	  <label>Description: </label>
	  <textarea name="description" rows={4} cols={42} /><br />
	  <label>Category</label>
	  <select name="category">
	  	<option value="billing">Billing</option>
	  	<option value="technical">Technical</option>
	  	<option value="account">Account</option>
	  	<option value="general">General</option>
	  </select><br />
	  <label>Priority</label>
	  <select name="priority">
	  	<option value="low">Low</option>
	  	<option value="medium">medium</option>
	  	<option value="high">high</option>
	  	<option value="critical">critical</option>
	  </select><br />
	  <label>Status</label>
	  <select name="status">
	  	<option value="open">Open</option>
	  	<option value="in_progress">in_progress</option>
	  	<option value="resolved">resolved</option>
	  	<option value="closed">closed</option>
	  </select><br />
	  <button type="submit" className="submit-btn">Submit</button>
	</form>

      </header>
    </div>
  );
}

export default App;
