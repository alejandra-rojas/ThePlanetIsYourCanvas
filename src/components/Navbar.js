import { useState } from "react";
import { useLoginGoogle } from "./hooks/useLoginGoogle";
import { useLogout } from "./hooks/useLogout";
import { useAuthContext } from "./hooks/useAuthContext";
import Signup from "./Signup";

import PhoneSign from "./PhoneSign";

export default function NavBar() {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const { signInWithGoogle } = useLoginGoogle();

  const [loginIsShown, setLoginIsShown] = useState(false);

  const handleClick = (e) => {
    if (!loginIsShown) {
      setLoginIsShown(true);
    } else if (loginIsShown || user) {
      setLoginIsShown(false);
    }
  };

  return (
    <>
      <div className="sign-in">
        {!user && (
          <>
            <img
              className="deco"
              alt="wind-left"
              width="100px"
              src="media/SVG/aire-der-desk.svg"
            />
            <div className="google-btn" onClick={signInWithGoogle}>
              <div className="google-icon-wrapper">
                <img
                  className="google-icon"
                  alt="google-icon"
                  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                />
              </div>
              <div className="btn-text">
                <b>Sign in with google</b>
              </div>
            </div>
          </>
        )}

        {!user && (
          <>
            <div className="phone-btn" onClick={handleClick}>
              <div className="google-icon-wrapper">
                <img
                  className="phone-icon"
                  alt="phone-icon"
                  src="media/pngs/phoneblue.svg"
                />
              </div>
              <div className="btn-text">
                <b>Sign in with phone</b>
              </div>
            </div>

            <img
              className="deco"
              alt="wind-left"
              width="100px"
              src="media/SVG/aire-izq-desk.svg"
            />
          </>
        )}

        {user && (
          <>
            <img
              className="deco"
              alt="wind-left"
              width="100px"
              src="media/SVG/aire-der-desk.svg"
            />
            <div className="logged-userInfo">
              <div>
                You are signed in as <br></br>
                {user.displayName || user.email || user.phoneNumber}
              </div>

              <div onClick={logout} className="logout">
                LOGOUT
              </div>
            </div>
            <img
              className="deco"
              alt="wind-left"
              width="100px"
              src="media/SVG/aire-izq-desk.svg"
            />
          </>
        )}
      </div>

      {!user && loginIsShown ? (
        <div>
          <PhoneSign />
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}
