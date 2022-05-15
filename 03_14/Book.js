class Book {
    //propiedades
    constructor(
        editorial,
        year,
        autor,
        pages,
        price,
        edition
    )
    //properties
    {
        this.editorial=editorial;
        this.year=year;
        this.autor=autor;
        this.pages=pages;
        this.price=price;
        this.edition=edition;
    }
    //methods
    edito(theEditorial){
        this.editorial=theEditorial;
    }
    updatePages(newPages){
        this.pages=newPages;
    }
    bookAge(){
        let now = new Date ();
        let year_before = new Date (this.year);
        let yearNow = now - year_before;
        let hoursSinceAcquired = Math.floor(yearNow/(3600*1000));
        return hoursSinceAcquired
    }

}


export default Book