import React from 'react'

export default function usernamechecks(Usename: string) {
 //check usename length minimum 5 and maximum 15 characters long
  

}
const CheckLenght = (Usename: string) => {
    if (Usename.length < 5 || Usename.length > 15) {
        return false;
    }else{
        return true;
    }
}
export { CheckLenght }