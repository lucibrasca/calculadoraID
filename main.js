let sexo = prompt("Ingrese el sexo (M/F):"); // variable que almacena m o f según lo que ingresa el usuario
let fin = false; // variable booleana que controla el fin del ciclo while
let nombreAlimento = ""; // variable que guarda el alimento ingresado por el usuario
let grupoAlimento = 0; // variable que guarda el grupo del alimento ingresado por el usuario
let contadorIngestaDiaria = 0; // variable que almacena la cantidad de kcal acumuladas en el día
const LIMITE1 = 1500; // Límite Inferior Femenino
const LIMITE2 = 2000; // Límite Superior Femenino e Inferior Masculino
const LIMITE3 = 2500; // Límite Superior Masculino

//Función flecha que retorna el porcetaje de a con respecto b 
const PORCENTAJE = (a, b) => (a*100) / b;


//Clase GrupoAlimento 

class GrupoAlimento {
    constructor (id, nombre, unidadMedida, kcal){
      this.id= id;
      this.nombre= nombre;
      this.unidadMedida = unidadMedida;
      this.kcal= kcal;
    }
    //metodos de la clase: utilizados solo por objetos de esta clase

    getId()
    {
      return this.id;
    }

    getNombre()
    {
     return this.nombre;
    }
    getUnidadMedida()
    {
        return this.unidadMedida;
    }

    getKCal()
    {
        return this.kcal;
    }

  }

//Clase Alimento

  class Alimento {
    constructor (nombre, grupo, cantidad){
      this.nombre= nombre;
      this.grupo= grupo;
      this.cantidad = cantidad;
    }
    //metodo de la clase: utilizado solo por objetos de esta clase

    //Retorna el nombre del alimento y entre paréntesis la cantidad y unidad de medida del mismo
    mostrarAlimento()
     {
         return this.nombre+" ("+this.cantidad+" "+this.grupo.getUnidadMedida()+") ";
     }

   
    }
// cada constante GRUPOX contiene un objeto de la clase GrupoAlimento con sus atributos definidos
  const GRUPO1 = new GrupoAlimento (1,"Aceites y grasas", "gramos", 9);
  const GRUPO2 = new GrupoAlimento (2,"Azúcares y dulces", "gramos", 5);
  const GRUPO3 = new GrupoAlimento (3,"Bebidas con alcohol o azucaradas", "mililitros", 5);
  const GRUPO4 = new GrupoAlimento (4,"Carnes, Aves y Embutidos", "gramos", 2);
  const GRUPO5 = new GrupoAlimento (5,"Cereales", "gramos", 4);
  const GRUPO6 = new GrupoAlimento (6,"Frutas", "gramos", 4);
  const GRUPO7 = new GrupoAlimento (7,"Frutos secos", "gramos", 6);
  const GRUPO8 = new GrupoAlimento (8,"Huevos", "gramos", 1);
  const GRUPO9 = new GrupoAlimento (9,"Lácteos y derivados", "gramos", 2);
  const GRUPO10 = new GrupoAlimento (10,"Legumbres", "gramos", 3);
  const GRUPO11 = new GrupoAlimento (11,"Pastelería", "gramos", 9);
  const GRUPO12 = new GrupoAlimento (12,"Pescados, mariscos y crustáceos", "gramos", 2);
  const GRUPO13 = new GrupoAlimento (13,"Salsas y condimentos", "gramos", 4);
  const GRUPO14 = new GrupoAlimento (14,"Verduras y hortalizas", "gramos", 2);

//Arreglo que contiene todos los objetos GrupoAlimento anteriormente creados
let grupos = [ GRUPO1 , GRUPO2 , GRUPO3 , GRUPO4 , GRUPO5 , GRUPO6 , GRUPO7 , GRUPO8 , GRUPO9 , GRUPO10 , GRUPO11 , GRUPO12 , GRUPO13 , GRUPO14 ];


//Arreglo inicializado vacío que se va a ir llenando dinámicamente a medida que el usuario ingrese los datos de los alimentos
let ingesta =[];


  

//Solicita al usuario el ingreso de datos hasta que la variable fin sea true
while ( !fin )
{
    nombreAlimento = prompt("Ingrese el nombre del alimento o ESC para salir:");

    if (nombreAlimento.toUpperCase() != "ESC")
    {
       // Ahora con objetos, también se puede hacer de esta forma 
       //grupoAlimento = Number ( prompt("Ingrese el número del grupo al que pertenece:\n\n"+GRUPO1.getId()+"- "+GRUPO1.getNombre()+"\n"+GRUPO2.getId()+"- "+GRUPO2.getNombre()+"\n"+GRUPO3.getId()+"- "+GRUPO3.getNombre()+"\n"+GRUPO4.getId()+"- "+GRUPO4.getNombre()+"\n"+GRUPO5.getId()+"- "+GRUPO5.getNombre()+"\n"+GRUPO6.getId()+"- "+GRUPO6.getNombre()+"\n"+GRUPO7.getId()+"- "+GRUPO7.getNombre()+"\n"+GRUPO8.getId()+"- "+GRUPO8.getNombre()+"\n"+GRUPO9.getId()+"- "+GRUPO9.getNombre()+"\n"+GRUPO10.getId()+"- "+GRUPO10.getNombre()+"\n"+GRUPO11.getId()+"- "+GRUPO11.getNombre()+"\n"+GRUPO12.getId()+"- "+GRUPO12.getNombre()+"\n"+GRUPO13.getId()+"- "+GRUPO13.getNombre()+"\n"+GRUPO14.getId()+"- "+GRUPO14.getNombre()));
        grupoAlimento = Number ( prompt("Ingrese el número del grupo al que pertenece:\n\n1- Aceites y grasas\n2- Azúcares y dulces\n3- Bebidas con alcohol o azucaradas\n4- Carnes, Aves y Embutidos\n5- Cereales\n6- Frutas\n7- Frutos secos\n8- Huevos\n9- Lácteos y derivados\n10- Legumbres\n11- Pastelería\n12- Pescados, mariscos y crustáceos\n13- Salsas y condimentos\n14- Verduras y hortalizas"));
        
       
        if (grupos.some((g) => g.getId() === grupoAlimento)) //si existe el grupo del alimento ingresado por el usuario en el arreglo grupos
        {
       
            //busca el grupo elegido por el usuario en el arreglo grupos y lo almacena en la variable grupoSeleccionado
            let grupoSeleccionado = grupos.find((g) => g.getId() === grupoAlimento); 

            //solicita al usuario que ingrese la cantidad consumida del alimento según la unidad de medida del grupo
            let cantidad = Number (prompt("Ingrese la cantidad ingerida del alimento en "+grupoSeleccionado.getUnidadMedida()));

            //Crea un objeto Alimento con el nombre, grupo y cantidad ingresada por el usuario
            let alimento = new Alimento(nombreAlimento.toUpperCase(), grupoSeleccionado, cantidad);
            
            //Agrega el objeto alimento creado en el arreglo ingesta
            ingesta.push(alimento);
        
            //Invoca a la función calcularKCalorias con el grupo y cantidad del alimento y almacena en la variable contadorIngestaDiaria la cantidad de Kcal acumuladas
            contadorIngestaDiaria += calcularKCalorias (grupoSeleccionado, cantidad);
        }
        else // cuando no existe el número de grupo ingresado 
        {
            alert("Grupo inexistente");
        }
    }
    else // cuando el usuario desea salir del ciclo escribiendo ESC
    {
        fin = true;
    }
}

//Crea un nuevo arreglo en la variable alimentosConsumidos con los alimentos del arreglo ingesta expresados según la función mostrarAlimento
let alimentosConsumidos = ingesta.map((alim) => {
                            return alim.mostrarAlimento();
                            });
//muestra por alert el nuevo arreglo    
alert(alimentosConsumidos);

//Invoca a la función mostrarResultado
mostrarResultado(sexo.toUpperCase(),contadorIngestaDiaria);



//Muestra según el sexo y el acumulado de Kcal, si se encuentra dentro o fuera de los límites de la IDR (ingesta diaria recomendada) 
function mostrarResultado(sexo, contadorIngestaDiaria)
{
        if ((sexo == "F") && (contadorIngestaDiaria < LIMITE1))
        {
        
            alert ("Su ingesta del día fue de "+contadorIngestaDiaria+" kcal. Esto equivale al "+PORCENTAJE(contadorIngestaDiaria,LIMITE1)+"% de la IDR.");
        }
        else if ((sexo == "M") && (contadorIngestaDiaria < LIMITE2))
        {

            alert ("Su ingesta del día fue de "+contadorIngestaDiaria+" kcal. Esto equivale al "+PORCENTAJE(contadorIngestaDiaria,LIMITE2)+"% de la IDR.");
        }
        else if ((sexo == "F") && (contadorIngestaDiaria > LIMITE1) && (contadorIngestaDiaria < LIMITE2))
        {
            alert ("Su ingesta del día fue de "+contadorIngestaDiaria+" kcal. Por lo tanto, se encuentra dentro de la IDR, entre 1500 y 2000 kcal/día en las mujeres.");
        }
        else if ((sexo == "M") && (contadorIngestaDiaria > LIMITE2) && (contadorIngestaDiaria < LIMITE3))
        {
            alert ("Su ingesta del día fue de "+contadorIngestaDiaria+" kcal. Por lo tanto, se encuentra dentro de la IDR, entre 2000 y 2500 kcal/día en los hombres.");
        } 
        else
        {
            alert ("Su ingesta del día fue de "+contadorIngestaDiaria+" kcal. Le recomendamos que reduzca la misma.");
        }

}

// Función redefinida
//Retorna las kCal consumidas de un alimento, según el grupo al que pertenece y la cantidad
function calcularKCalorias(grupo, cantidad)
{
    let kcal = 0;

    //  si el grupo es el 3, el 6 o el 14 , el cálculo es diferente a los demás grupos
    if ((grupo.getId() == 3) || (grupo.getId() == 6) || (grupo.getId() == 14 ))
    {
        kcal= grupo.getKCal()*(cantidad/10);
        
    } 
    else
    {
        kcal= grupo.getKCal()*cantidad;
    }

    return kcal;   
}

// Función de la primer pre entrega reemplazada por la anterior 
//Retorna las kCal consumidas de un alimento, según el grupo al que pertenece y la cantidad
/*function calcularKCalorias(grupo, cantidad)
{
    let kcal = 0;

        switch (grupo.getId())
        {

        case 1: //aceites y grasas
            kcal= 9*cantidad;
            break;
        case 2: //azucares y dulces
            kcal= 5*cantidad;
            break;
        case 3: //bebidas con alcohol o azucaradas
            kcal= 5*(cantidad/10);
            break;
        case 4: //Carnes, Aves y Embutidos
            kcal= 2*cantidad;
            break;
        case 5: //Cereales
            kcal= 4*cantidad;
            break;
        case 6: //Frutas
            kcal= 4*(cantidad/10);
            break;
        case 7: //Frutos secos
            kcal= 6*cantidad;
            break;
        case 8: //Huevos
            kcal= 1*cantidad;
            break;
        case 9: //Lácteos y derivados
            kcal= 2*cantidad;
            break;
        case 10: //Legumbres
            kcal= 3*cantidad;
            break;
        case 11: //Pastelería
            kcal= 9*cantidad;
            break;
        case 12: //Pescados, mariscos y crustáceos
            kcal= 2*cantidad;
            break;
        case 13: //Salsas y condimentos
            kcal= 4*cantidad;
            break;
        case 14: //Verduras y hortalizas
            kcal= 2*(cantidad/10);
            break;

        }

        return kcal;
}*/