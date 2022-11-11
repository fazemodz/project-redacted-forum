export default function Datavalidation() {
    return null;
}

const ForumNameCheck = (ForumName: string) => {
    if (ForumName.length > 20) {
        return "ERR_TOO_LONG";
    }
    if (ForumName.length <= 4) {
        return "ERR_TOO_SHORT";
    }
}
const ForumDescriptionCheck = (ForumDescription: string) => {
    if (ForumDescription.length > 100) {
        return "ERR_TOO_LONG";
    }
}
const usernameLengthCheck = (username: string) => {
    if (username.length > 20) {
        return "ERR_TOO_LONG";
    }
    if (username.length <= 4) {
        return "ERR_TOO_SHORT";
    }
}
const DidUsernameChange = (username: string, oldUsername: string) => {
    if (username !== oldUsername) {
        return "USERNAME_CHANGED";
    }
    if(username === oldUsername) {
        return "ERR_USERNAME_NOT_CHANGED";
    }
}
const emailLengthCheck = (email: string) => {
    if (email.length > 50) {
        return "ERR_TOO_LONG";
    }
    if (email.length <=2 ) {
        return "ERR_TOO_SHORT";
    }
    if(!email.includes("@")){
        return "ERR_NO_AT";
    }
}
const passwordLengthCheck = (password: string) => {
    if (password.length > 20) {
        return "ERR_TOO_LONG";
    }
    if (password.length <= 5) {
        return "ERR_TOO_SHORT";
    }
}
const passwordMatchCheck = (password: string, password2: string) => {
    if (password != password2) {
        return "ERR_PASSWORD_MISMATCH";
    }
}
// unused for now
const PostTittleCheck = (PostTittle: string) => {
    if (PostTittle.length > 20) {
        return "ERR_TOO_LONG";
    }
    if (PostTittle.length <= 4) {
        return "ERR_TOO_SHORT";
    }
}
const PostContentCheck = (PostContent: string) => {
    if (PostContent.length > 1000) {
        return "ERR_TOO_LONG";
    }
    if (PostContent.length <= 4) {
        return "ERR_TOO_SHORT";
    }
}
//
export { ForumNameCheck, 
         ForumDescriptionCheck, 
         usernameLengthCheck, 
         DidUsernameChange,
         emailLengthCheck, 
         passwordLengthCheck, 
         passwordMatchCheck, 
         PostTittleCheck, 
         PostContentCheck 
};