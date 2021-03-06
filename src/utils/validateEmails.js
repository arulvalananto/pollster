const re =
    /^(([^<>().,;:\s@"]+([^<>().,;:\s@"]+)*)|(".+"))@(([0-9]{1,3}[0-9]{1,3}[0-9]{1,3}[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const validateEmail = (recipients) => {
    if (recipients) {
        const invalidEmails = recipients
            .split(",")
            .map((email) => email.trim())
            .filter((email) => re.test(email) === false);
        if (invalidEmails.length) {
            return `These emails are invaild: ${invalidEmails}`;
        }
    }

    return;
};

export default validateEmail;