const getState = ({getStore, setStore}) => {
    return {
        store: {
            name: "Rick and Morty App",
            info: {},
            singleCharacter: {},
            characters: [],
            favorites: [],
        },
        actions: {
            getData: async () => {
                setTimeout(()=>{
                    console.log('...loading')
                }, 7000);
            },
            getCharacters: async () => {
                try{
                    const store = getStore();
                    const resp = await fetch("https://rickandmortyapi.com/api/character/")
                    if(resp.ok){
                        const data = await resp.json();
                        setStore({ ...store, characters: data.results, info: data.info})
                    }
                }catch(err){
                    console.log('Oh shit Morty something happened!')
                }
            },
            getMoreCharacters: async (page) => {
                try{
                    const store = getStore();
                    const resp = await fetch(page)
                    if(resp.ok){
                        const data = await resp.json();
                        setStore({ ...store, characters: [ ...store.characters, ...data.results], info: { ...data.info, next: data.info.next } })
                    }
                }catch(err){
                    console.log('Oh shit Morty something happened!')
                }
            },
            getCharacterById: async (id) => {
                try {
                    const store = getStore();
                    const resp = await fetch("https://rickandmortyapi.com/api/character/"+id)
                    if(resp.ok){
                        const data = await resp.json();
                        setStore({ ...store, singleCharacter: data})
                    }
                }catch(error) {
                    console.log('Oh shit Morty something happened!')
                }
            },
            addFavorite: (newfav)=> {
                const store = getStore();
                let search = store.favorites.find( x => x.id === newfav.id)
                if(!search){
                    setStore({ ...store, favorites: [ ...store.favorites, newfav ]})
                }
            },
            removeFavorite: (target) => {
                const store = getStore();
                setStore({ ...store, 
                    favorites: [ ...store.favorites].filter( char => char.id !== target.id) 
                })
            }
        }
    }
}

export default getState;