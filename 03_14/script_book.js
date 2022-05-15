import Book from "./Book.js";

const libro_1 = new Book(
    "porrua",
    "May 12, 2022 14:46:00 CDT",
    "Maricruz Bautista",
    250,
    100,
    "segunda"
);

const libro_2 = new Book(
    "UAM",
    "May 11, 2022 14:46:00 CDT",
    "Lobo",
    300,
    500,
    "tercera"
);

const libro_3 = new Book(
    "Laurosse",
    "May 4, 2018 14:46:00 CDT",
    "García Márquez",
    300,
    500,
    "tercera"
);


const libro_4 = new Book(
    "Elseiver",
    "Feb, 2018 14:46:00 CDT",
    "José Emilio",
    500,
    500,
    "Cuarta"
);


const libro_5 = new Book(
    "IPN",
    "Jan, 2012 12:00:00 CDT",
    "Ramírez Hernández",
    589,
    60,
    "Segunda"
);

console.log("El primer libro almacenado es:", libro_1);
console.log("El primer libro almacenado es:", libro_2);
console.log("El primer libro almacenado es:", libro_3);
console.log("El primer libro almacenado es:", libro_4);
console.log("El primer libro almacenado es:", libro_5);


/*console.log("La fecha en que se compró:", libro_1.year);
console.log("Horas desde que lo compre:", libro_1.bookAge());
console.log("paginas", libro_1.pages);*/

/*
console.log("El segundo  libro almacenado es:", libro_2);
console.log("La fecha en que se compró:", libro_2.year);
console.log("Horas desde que lo compre:", libro_2.bookAge());
*/