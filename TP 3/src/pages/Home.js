import getData from '../utils/getData';

const Home =  async () => {

    const characters = await getData();
    console.log(characters)
    const view =  `
        <div class="Characters">
        ${characters.map(character => `
            <article class="Character-item">
                <a href="#/${character.id}">
                    <img src="${character.links.patch.small}" alt="${character.name}">
                    <h2>${character.name}</h2>
                </a>
            </article>
        `).join('') }
       `
    return view;
}

export default Home;