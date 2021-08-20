module.exports = {
    contactTemplate:function(email, phone, instagram, address) {
        return `
        <section id="section-contact">
        <div id="contact-info">
            <ul>
                <li>NAMEHERE</li>
                <li>Developer: Joonmin Kweon</li>
                <li class="contact-route">${address}</li>
                <li class="contact-route">Email: ${email}</li>
                <br>
                <li class="contact-route">Tel: ${phone}</li>
                <li class="contact-route">IG: ${instagram}</li>
            </ul>
        </div>
        </section>
        `;
    }
}