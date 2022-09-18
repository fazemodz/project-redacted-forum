import React from 'react'

export default function usernamechecks(Usename: string) {
    if (CheckLenght(Usename)) {
        return true;
    }else{
        return false;
    }
  

}
const CheckLenght = (Usename: string) => {
    if (Usename.length < 5 || Usename.length > 20) {
        return false;
    }else{
        return true;
    }
}
export { CheckLenght }