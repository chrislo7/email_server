class Email {
    constructor(content) {
        this.form = content.form;
        this.to = content.to;
        this.subject = content.subject;
        this.body = content.body;
    }
}

module.exports = Email;