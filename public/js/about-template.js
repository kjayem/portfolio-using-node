module.exports = {
    aboutTemplate:function(name, title) {
        return `
        <section>
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