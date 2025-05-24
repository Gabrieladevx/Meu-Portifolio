async function fetchRepos() {
    const response = await fetch('https://api.github.com/users/Gabrieladevx/repos');
    const repos = await response.json();
    const container = document.getElementById('repos-list');
    container.innerHTML = '';
    repos.sort((a, b) => b.stargazers_count - a.stargazers_count);
    for (const repo of repos) {
        const techs = repo.language ? `<span>${repo.language}</span>` : '';
        container.innerHTML += `
            <div class="repo">
                <div class="repo-title">${repo.name}</div>
                <div class="repo-desc">${repo.description || 'Sem descrição.'}</div>
                <a class="repo-link" href="${repo.html_url}" target="_blank">Ver no GitHub</a>
                <div class="tech-list">${techs}</div>
            </div>
        `;
    }
}
window.onload = fetchRepos;
