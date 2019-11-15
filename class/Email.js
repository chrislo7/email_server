class Email {
    constructor(content) {
        this.Source = content.Source; 
        this.Destination = content.Destination; 
        this.Message = content.Message; 
    }
}

module.exports = Email;