class Album{
    title:string
    songs:string[]
    
    constructor(title:string, songs:string[]){
        this.title = title;
        this.songs = songs;
    }
}

class Banda{
    members:string[]
    albums:Album[]
    constructor(members:string[], albums:Album[]){
        this.members = members;
        this.albums = albums; 
    }
}
function main(){
    const unAlbum = new Album("41", ["Te Vi y Temblé", "Causa", "Rompe los Techos"])
    
    const unaBanda = new Banda(["Seba", "Morfi","Rodri","Brian","Samu"], [unAlbum])
    
    //console.log(unaBanda.members)
    
    console.log(unaBanda.albums )
    console.log("Otro cambio");
}

main()