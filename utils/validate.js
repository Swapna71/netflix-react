export const checkValidData=(email,password)=>{
    const isEmailValid=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email);
    const isPasswordsValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

    if(!isEmailValid)return 'Your email is invalid';
    if(!isPasswordsValid) return 'Your password is invalid';

    return null;
}