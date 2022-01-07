// export const SIGNUP = 'SIGNUP';
// export const LOGIN = 'LOGIN';
export const AUTHENTICATE = 'AUTHENTICATE';
export const LOGOUT = 'LOGOUT';

let timer;

export const authenticate = (userId, token, expiryTime) => {
    return dispatch => {
        dispatch(setLogoutTimer(expiryTime));
        dispatch({ type: AUTHENTICATE, id: userId, accessToken: token });
    };
};

export const signup = (email, password, username, name) => {
    return async dispatch => {
        const response = await fetch(
            'http://188.166.189.237:3001/api/v1/users/signup',
            {
                method: 'POST',
                headers: {
                    "Authorization": "Basic Og==",
                    "Content-Type": "application/json",
                    "Accept": "applicaton/json"
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                    username: username,
                    name: name,
                    returnSecureToken: true
                })
            }
        );

        if (!response.OK) {
            const errorResData = await response.json();
            const errorId = errorResData.error.message;
            let message = 'Something went wrong!';
            if (errorId === 'EMAIL_EXISTS') {
                message = 'This email exists already!';
            }
            if (errorId == 'Please enter valid email address') {
                alert("Please enter valid email address")
            }
            if (errorId == "Email already taken") {
                alert("Email already exist")
            }
            if (errorId == "Error") {
                alert("Username already exist")
            }
            if (errorId == "OK") {
                navigation.navigate("MainNavigator")
            }
            if (errorId == "Password should be minimum of 8 characters") {
                return (
                    alert("Password lenght should be Minimum 8 letters")
                )
            }
            throw new Error(message);
        }

        const resData = await response.json();
        console.log(resData);
        dispatch(
            authenticate(
                resData.id,
                resData.accessToken,
                parseInt(resData.expiresIn) * 1000
            )
        );
        const expirationDate = new Date(
            new Date().getTime() + parseInt(resData.expiresIn) * 1000
        );
        saveDataToStorage(resData.accessToken, resData.id, expirationDate);
    };
};

export const login = (email, password) => {
    return async dispatch => {
        const response = await fetch(
            'http://188.166.189.237:3001/api/v1/users/login',
            {
                method: 'POST',
                headers: {
                    "Authorization": "Basic Og==",
                    "Content-Type": "application/json",
                    "Accept": "applicaton/json"
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                    returnSecureToken: true
                })
            }
        );

        if (!response.ok) {
            const errorResData = await response.json();
            const errorId = errorResData.error.message;
            let message = 'Something went wrong!';
            if (errorId === 'EMAIL_NOT_FOUND') {
                message = 'This email could not be found!';
            } else if (errorId === 'INVALID_PASSWORD') {
                message = 'This password is not valid!';
            }
            if (errorId == 'Please enter valid email address') {
                alert("Pleae enter valid Email and Password")
            }
            if (errorId == 'Password should be minimum of 8 characters') {
                alert("Please Enter a Valid Password")
            }
            if (errorId == 'Invalid email or password') {
                alert("Invalid email or password")
            }
            if (errorId == "OK") {
                navigation.navigate("MainNavigator")
            }
            throw new Error(message);
        }

        const resData = await response.json();
        console.log(resData);
        dispatch(
            authenticate(
                resData.id,
                resData.accessToken,
                parseInt(resData.expiresIn) * 1000
            )
        );
        const expirationDate = new Date(
            new Date().getTime() + parseInt(resData.expiresIn) * 1000
        );
        saveDataToStorage(resData.accessToken, resData.id, expirationDate);
    };
};

export const logout = () => {
    clearLogoutTimer();
    AsyncStorage.removeItem('data');
    return { type: LOGOUT };
};

const clearLogoutTimer = () => {
    if (timer) {
        clearTimeout(timer);
    }
};

const setLogoutTimer = expirationTime => {
    return dispatch => {
        timer = setTimeout(() => {
            dispatch(logout());
        }, expirationTime);
    };
};

const saveDataToStorage = (token, userId, expirationDate) => {
    AsyncStorage.setItem(
        'data',
        JSON.stringify({
            accessToken: token,
            id: userId,
            expiryDate: expirationDate.toISOString()
        })
    );
};
