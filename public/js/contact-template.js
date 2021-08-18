module.exports = {
    contactTemplate:function(email, phone, instagram, address) {
        return `
        <section>
        <div id="contact-info">
            <h3 class="page-title">CONTACT</h3>
            <ul>
                <li>${email}</li>
                <li>${phone}</li>
                <li>${instagram}</li>
                <li>${address}</li>
            </ul>
        </div>
        </section>
        `;
    }
}