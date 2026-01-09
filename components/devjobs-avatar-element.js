class DevJobsAvatar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    createAvatarURL(service, username) {
        return `https://unavatar.io/${service}/${username}`;
    }

    render() {
        const service = this.getAttribute('service') ?? 'github';
        const username = this.getAttribute('username') ?? 'EstefanoAcevedo';
        const avatarURL = this.createAvatarURL(service, username);
        this.shadowRoot.innerHTML =
        `
            <img src="${avatarURL}" alt="User Avatar" style="width: 40px; height: 40px; border-radius: 50%;">
        `
    }

    connectedCallback() {
        this.render();
    }
}

customElements.define('devjobs-avatar', DevJobsAvatar);