module.exports = {
    aboutTemplate:function(name, title) {
        return `
        <section id="section-about">
            <div id="about">
                <ul>
                    <li>${name}</li>
                    <li>${title}</li>
                </ul>   
            </div>
        </section>
        `;
    }
}