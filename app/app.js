import UI from '../view/view.js'
export default class GitHubWorks {

    constructor(name){
        this.name = name;
        this.repoCount = 0
        this.issueCount = 0
        this.repoList = []
        this.token = null
    }

    async getInfoRepoCount(name){

        
        try {

            const url = `https://api.github.com/users/${name}/repos?per_page=1`;
            
            if (this.token === null) {
                var response = await fetch(url);
            } else {
                const headers = {
                    "Authorization": `Token ${this.token}`
                }

                var response = await fetch(url, {
                    "method": "GET",
                    "headers": headers,
                });
            }
            
            const link = response.headers.get('link');
            // <https://api.github.com/user/59531743/repos?per_page=1&page=2>; rel="next", <https://api.github.com/user/59531743/repos?per_page=1&page=71>; rel="last"
            const temp = link.split('=')[5].slice(0, 2) // need to find a good way
            this.repoCount = parseInt(temp) + 1 ;
            
            const ui = new UI();
            ui.renderLiveResults(this.repoCount);

            return this.repoCount;
            
        } catch (err) {
            console.error(err);
        }

    }

    async getIssues(name){

            try {
                
                const url = `https://api.github.com/search/issues?q=author:${name} type:issue`

                if (this.token === null) {
                    var response = await fetch(url);
                } else {
                    const headers = {
                        "Authorization": `Token ${this.token}`
                    }

                    var response = await fetch(url, {
                        "method": "GET",
                        "headers": headers,
                    });
                }

                let data = await response.json();
                this.issueCount = data.total_count;


                const ui = new UI();
                ui.renderLiveResults(this.issueCount);

                return this.issueCount;

            } catch (err) {
                console.error(err);
            }

    }
    async getRepositories(repoNames) {

        for (let repo of repoNames){
            try {

                const url = `https://api.github.com/repos/mesutBE/${repo}`;

                if (this.token === null) {
                    var response = await fetch(url);
                } else {
                    const headers = {
                        "Authorization": `Token ${this.token}`
                    }

                    var response = await fetch(url, {
                        "method": "GET",
                        "headers": headers,
                    });
                }

                let data = await response.json();
                // debugger
                let name = repo.split('-').join(' ');


                
                const ui = new UI();
                ui.renderContainer(data, name);

            } catch (err) { 
                console.error(err);
            }
        }
    }
}


