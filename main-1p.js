let sexo = prompt("Ingrese el sexo (M/F):");
let fin = false;
let alimento = "";
let grupoAlimento = 0;
let unidadMedida = "";
let contadorIngestaDiaria = 0;
const LIMITE1 = 1500; // Límite Inferior Femenino
const LIMITE2 = 2000; // Límite Superior Femenino e Inferior Masculino
const LIMITE3 = 2500; // Límite Superior Masculino


while ( !fin )
{
    alimento = prompt("Ingrese el nombre del alimento o ESC para salir:");

    if (alimento.toUpperCase() != "ESC")
    {
        grupoAlimento = Number ( prompt("Ingrese el número del grupo al que pertenece:\n\n1- Aceites y grasas\n2- Azúcares y dulces\n3- Bebidas con alcohol o azucaradas\n4- Carnes, Aves y Embutidos\n5- Cereales\n6- Frutas\n7- Frutos secos\n8- Huevos\n9- Lácteos y derivados\n10- Legumbres\n11- Pastelería\n12- Pescados, mariscos y crustáceos\n13- Salsas y condimentos\n14- Verduras y hortalizas"));

        if (grupoAlimento == 3)
            {
                unidadMedida = "mililitros";
            }
        else
            {
                unidadMedida = "gramos";
            }

        let cantidad = Number (prompt("Ingrese la cantidad ingerida del alimento en "+unidadMedida));

        contadorIngestaDiaria += calcularKCalorias (grupoAlimento , cantidad);
    }
    else 
    {
        fin = true;
    }
}

let caloriasRestantes = 0;
let porcentaje = 0;

if ((sexo.toUpperCase() == "F") && (contadorIngestaDiaria < LIMITE1))
{
    caloriasRestantes = LIMITE1 - contadorIngestaDiaria;
    porcentaje = (contadorIngestaDiaria*100) / LIMITE1;

    alert ("Su ingesta del día fue de "+contadorIngestaDiaria+" kcal. Esto equivale al "+porcentaje+"% de la IDR.");
}
else if ((sexo.toUpperCase() == "M") && (contadorIngestaDiaria < LIMITE2))
{
    caloriasRestantes = LIMITE2 - contadorIngestaDiaria;
    porcentaje = (contadorIngestaDiaria*100) / LIMITE2;

    alert ("Su ingesta del día fue de "+contadorIngestaDiaria+" kcal. Esto equivale al "+porcentaje+"% de la IDR.");
}
else if ((sexo.toUpperCase() == "F") && (contadorIngestaDiaria > LIMITE1) && (contadorIngestaDiaria < LIMITE2))
{
    alert ("Su ingesta del día fue de "+contadorIngestaDiaria+" kcal. Por lo tanto, se encuentra dentro de la IDR, entre 1500 y 2000 kcal/día en las mujeres.");
}
else if ((sexo.toUpperCase() == "M") && (contadorIngestaDiaria > LIMITE2) && (contadorIngestaDiaria < LIMITE3))
{
    alert ("Su ingesta del día fue de "+contadorIngestaDiaria+" kcal. Por lo tanto, se encuentra dentro de la IDR, entre 2000 y 2500 kcal/día en los hombres.");
} 
else
{
    alert ("Su ingesta del día fue de "+contadorIngestaDiaria+" kcal. Le recomendamos que reduzca la misma.");
}


function calcularKCalorias(grupo, cantidad)
{
    let kcal = 0;

        switch (grupo)
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
}