const sendgrid = require("sendgrid");

const helper = sendgrid.mail;

class Mailer extends helper.Mail {
    constructor({ subject, recipients }, content) {
        super();

        this.sgApi = sendgrid(process.env.SENDGRID_SECRET);
        this.from_email = new helper.Email(
            "arulvalananto@codingspaceindia.com" // This email must be sender identity email Address that gave in sendgrid
        );
        this.subject = subject;
        this.body = new helper.Content("text/html", content);
        this.recipients = this.formatAddresses(recipients);

        this.addContent(this.body);
        this.addClickTracking();
        this.addRecipients();
    }
    formatAddresses(recipients) {
        return recipients.map(({ email }) => {
            return new helper.Email(email);
        });
    }
    addClickTracking() {
        const trackingSettings = new helper.TrackingSettings();
        const clickTracking = new helper.ClickTracking(true, true);

        trackingSettings.setClickTracking(clickTracking);
    }

    addRecipients() {
        const personalize = new helper.Personalization();
        this.recipients.forEach((recipient) => {
            personalize.addTo(recipient);
        });
        this.addPersonalization(personalize);
    }

    async send() {
        const request = this.sgApi.emptyRequest({
            method: "POST",
            path: "/v3/mail/send",
            body: this.toJSON(),
        });

        let res = await this.sgApi.API(request);
        return res;
    }
}

module.exports = Mailer;
