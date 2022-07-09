const getState = ({getStore, setStore}) => {
    return {
        store: {
            name: "Hola! Valentina!",
            singleCharacter: {},
            characters: [],
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
                        setStore({ ...store, characters: data.results})
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
            }
        }
    }
}

export default getState;