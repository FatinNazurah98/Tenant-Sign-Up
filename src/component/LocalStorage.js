// import React from 'react';
// import { Form } from 'react-bootstrap';

// const useStateWithLocalStorage = localStorageKey => {
//   const [value, setValue] = React.useState(
//     localStorage.getItem(localStorageKey) || ''
//   );

//   React.useEffect(() => {
//     localStorage.setItem(localStorageKey, value);
//   }, [value]);

//   return [value, setValue];
// };

// const LocalStorage = () => {
//   const [value, setValue] = useStateWithLocalStorage(
//     'myValueInLocalStorage'
//   );

//   const onChange = event => setValue(event.target.value);

//   return (
//     <div>
//       <h1>Hello React with Local Storage!</h1>

//       <Form>
//           <Form.Group controlId="formBasicEmail">
//             <Form.Label>Email Address</Form.Label>
//             <Form.Control
//               name="email"
//               type="text"
//               placeholder="Email Address"
//               value={value}
//               onChange={onChange}
//             >
//             </Form.Control>
//           </Form.Group>
//           </Form>

//       {/* <input value={value} type="text" onChange={onChange} /> */}

//       <p>{value}</p>
//     </div>
//   );
// };

// export default LocalStorage;

// // export default class SignIn extends Component {
// //     state = {
// //         user: '',
// //         rememberMe: false
// //     };

// //     handleChange = (event) => {
// //         const input = event.target;
// //         const value = input.type === 'checkbox' ? input.checked : input.value;

// //         this.setState({ [input.name]: value });
// //     };

// //     handleFormSubmit = () => {
// //         const { user, rememberMe } = this.state;
// //         localStorage.setItem('rememberMe', rememberMe);
// //         localStorage.setItem('user', rememberMe ? user : '');
// //     };

// //     render() {
// //         return (
// //             <form onSubmit={this.handleFormSubmit}>
// //                 <label>
// //                     User: <input name="user" value={this.state.user} onChange={this.handleChange} />
// //                 </label>
// //                 <label>
// //                     <input name="rememberMe" checked={this.state.rememberMe} onChange={this.handleChange} type="checkbox" /> Remember me
// //               </label>
// //                 <button type="submit">Sign In</button>
// //             </form>
// //         );
// //     }
// // }