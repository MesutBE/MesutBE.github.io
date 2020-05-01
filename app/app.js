
export default class GitHubWorks {

    constructor(name){
        this.name = name;
        this.repoCount = 0
        this.issueCount = 0
        this.repoList = []
        this.token = ''
        this.githubReposEl = document.querySelector('#github-repos');
    }

    async getRepositories(repoNames) {

        const headers = {
            // "Authorization": `Token ${this.token}`
        }

        for (let repo of repoNames){
            try {
                const url = `https://api.github.com/repos/mesutBE/${repo}`;

                let response = await fetch(url, {
                    "method": "GET",
                    // "headers": headers,
                });
                let data = await response.json();
                // debugger
                let name = repo.split('-').join(' ')
                this.githubReposEl.innerHTML = this.githubReposEl.innerHTML + `
                <div class="col-lg-4 col-md-6" style="margin-top: 45px;">
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
                                    <a style="" href="${data.stargazers_url}" target="_blank" >
                                        <i class="fas fa-star star">(${data.stargazers_count})</i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                `;


            } catch (err) { 
                console.error(err);
            }


        }

        
        // const url = "https://api.github.com/repos/mesutBE/accessible-code-along"
        // const response = await fetch(url)
        // const result = await response.json()

        // console.log(result);
        

        // const divResult = document.getElementById("root")

        // result.forEach(i => {


        //     const anchor = document.createElement("a")
        //     anchor.href = i.url;
        //     anchor.textContent = `'${i.name}',`;
        //     divResult.appendChild(anchor)
        //     divResult.appendChild(document.createElement("br"))


        // })

        // result.forEach(i => {

        //     const anchor = document.createElement("a")
        //     anchor.href = i.url;
        //     anchor.textContent = `'${i.url}',`;
        //     divResult.appendChild(anchor)
        //     divResult.appendChild(document.createElement("br"))


        // })
        
    }
}


