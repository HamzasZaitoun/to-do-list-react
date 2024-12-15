function userGreeting(props) {
  return props.isLoggedIn ? (
    <h2 className="welcome-message">welcome {props.name}</h2>
  ) : (
    <h2 className="login-prompt">please login to continue</h2>
  );
}

export default userGreeting;
