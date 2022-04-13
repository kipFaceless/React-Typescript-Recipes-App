import React, { useEffect, useRef, useState } from "react";
//import { FaGoogle } from 'react-icons/fa'
import { Link, useLocation, useHistory } from "react-router-dom";

import { useAuth } from "./../../components/contexts/AuthContext";
import useMounted from "./../../components/hooks/useMounted";

import {
  makeStyles,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  TextField,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    backgroundColor: "blue",
    width: "100%",
    height: "100vh",
    display: "flex",
  },

  rightPart: {
    backgroundColor: "#e2e7ef",
    width:"100%"
  },
  leftPart: {
    backgroundColor: "#29074a",
    width:"100%",
    display:"flex",
    alignItems :"center",
    justifyContent :"center",
    color : "white",
    [theme.breakpoints.down("sm")]: {
      display: "none",
     

      
    },
  },

  formCard: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    with: "100hw",
    height: "100vh",
  },

  formDiv: {
    width: "50%",
    height: "55%",
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "100%",
    },
  },
}));

const LoginPage = () => {
  const classes = useStyles();
  const { signInWithGoogle, login } = useAuth();

  const mounted = useMounted();

  //const history = useHistory()

  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmiting, setisSubmiting] = useState(false);

  //console.log(location)

  return (
    <div className={classes.mainContainer}>
      <div className={classes.leftPart}>
        <Typography>
          Find The Best Recipes around The World.
          </Typography>
      </div>
      <div className={classes.rightPart}>
        <div className={classes.formCard}>
          <Card className={classes.formDiv}>
            <CardContent>
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  // your login logic here

                  if (!email || !password) {
                    // toast
                  }
                  setisSubmiting(true);
                  login(email, password)
                    .then((response) => {
                      console.log(response);
                      //history.push(location.state?.from ?? "/profile")
                    })
                    .catch((error) => {
                      console.log(error.message);
                    })

                    .finally(() => mounted.current && setisSubmiting(false));
                }}
              >
                <div className={classes.item}>
                  <TextField
                    label="title"
                    size="small"
                    style={{ width: "100%" }}
                  />
                </div>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  autoComplete="email"
                  required
                />

                <input
                  name="password"
                  type="password"
                  autoComplete="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                {/* <PasswordField /> */}
                <Button
                  // isLoading ={isSubmiting}
                  type="submit"
                  color="primary"
                  size="medium"
                  fontSize="md"
                >
                  Sign in
                </Button>

                <Button color="primary">
                  <Link to="/forgot-password">Forgot password?</Link>
                </Button>
                <Button variant="contained">
                  <Link to="/register">Register</Link>
                </Button>

                <CardActionArea>
                  <Button
                    variant="contained"
                    color="secondary"
                    //leftIcon={<FaGoogle />}
                    onClick={() =>
                      signInWithGoogle()
                        .then((user) => console.log(user))
                        .catch((error) => console.log(error))
                    }
                  >
                    Sign in with Google
                  </Button>
                </CardActionArea>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
