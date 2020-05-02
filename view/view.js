export default class UI {
    constructor () {
        this.divResults = document.getElementById("results");
        this.githubReposEl = document.querySelector('#github-repos');
    }

    renderLiveResults(repoCount, issueCount){
        if(repoCount !== undefined){
            const pEl = document.createElement('p');
            pEl.innerText = `Current repository count is: ${repoCount}`;

            this.divResults.appendChild(pEl);

            return true;
        }

        if (issueCount !== undefined) {
            const pEl = document.createElement('p');
            pEl.innerText = `Current issue count is: ${this.issueCount}`;

            divResults.appendChild(pEl);

            return true;
        }

    }

    renderContainer(data, name) {
        this.githubReposEl.innerHTML = this.githubReposEl.innerHTML + `
                <div class="col-lg-4 col-md-6 text-center" style="margin-top: 45px;padding-right: 60px;padding-left: 60px;">
                    <div class="card">
                        <div class="card-body">
                            <img src="./img/kissclipart-github-icon-clipart-computer-icons-92d4a948a7c22cde.png" alt="" class="img-fluid rounded-circle w-50 mb-3 center">
                            <h2 class="text-dark font-weight-bold text-lowercase">${name}</h2>
                            <p class="text-justify text-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse laoreet convallis tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus. In ac sapien est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam a sagittis nisi. Nam sagittis elit sed elit euismod.</p>
                            <div class="d-flex flex-row justify-content-center">
                                <div class="p-4">
                                    <button type="button" class="btn btn-success"><a style="" href="${data.html_url}" target="_blank" >Go to Repo</a></button>
                                </div>
                                <div class="p-4">
                                        <i class="fas fa-star star">(${data.stargazers_count})</i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                `;

    }
}