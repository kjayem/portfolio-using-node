module.exports = {
    projectTemplate:function() {
        return `
        <section>
        <div>
            <div>
                <h3 class="page-title">CURRENT PROJECTS</h3>
            </div>
            <div id="current-projects">
                <ul>
                    <li><a href="/projects/album">Album work</a></li>
                    <li><a href="/projects/merch">Merch</a></li>
                    <li><a href="/projects/webdev">Web Design & Development</a></li>
                </ul>
            </div>     
        </div>
        </section>
        `;
    }
}