import overlord from './archivos/overlord/ImExOverlord'
import greatDemondKing from './archivos/greatdemondking/ImExGreatDemondKing'
import kumoDesuGaNaniKa from './archivos/kumodesugananika/ImExKumoDesuGaNaniKa'
import soloLeveling from './archivos/sololeveling/ImExSoloLeveling'
//Servidor streamtape genera errores en la URL
const novelas=[
    {
        "novela" : "Overlord",
        "portada" : overlord.OverlordImg.OverlordImg,
        "sinopsis" : `Después de anunciar que suspendería todos sus servicios, el juego de internet "Yggdrasil" apago sus servidores.
        Pero por alguna razón, un jugador no se desconectó automáticamente…
        Pero eso no fue todo, los NPC de su gremio cobraron vida…
        Es así como un joven normal, que amaba el videojuego Yggdrasil en el mundo real, fue transportado a un mundo alternativo junto con todo su gremio.
        Convirtiéndose como resultado en el mago más poderoso, Momonga, un no-muerto con la apariencia de un esqueleto.
        ¡Ahora él dirigirá a su gremio "Ainz Ooal Gown" hacia una aventura legendaria sin precedentes!`,
        "volumen" : [
            {"link" : overlord.OverlordPDF.Prologo,"title": 'Extras - Prologo'},
            {"link" : overlord.OverlordPDF.Volumen0Alternativo,"title": 'Volumen 0 alternativo - La llegada de los Dioses'},
            {"link" : overlord.OverlordPDF.Volumen1,"title": 'Volumen 1 - El rey no muerto'},
            {"link" : overlord.OverlordPDF.Volumen1Alternativo,"title": 'Volumen 1 alternativo - La princesa vampiro del país perdido'},
            {"link" : overlord.OverlordPDF.ElEmisarioDelRey,"title": 'Extras - El emisario del rey'},
            {"link" : overlord.OverlordPDF.DramaDeLas3Damas,"title": 'Extras - Drama de las 3 damas'},
            {"link" : overlord.OverlordPDF.Volumen2,"title": 'Volumen 2 - El gerrero oscuro'},
            {"link" : overlord.OverlordPDF.Volumen3,"title": 'Volumen 3 - La valquiria sangrienta'},
            {"link" : overlord.OverlordPDF.Volumen4,"title": 'Volumen 4 - Los héroes hombres lagarto'},
            {"link" : overlord.OverlordPDF.Volumen8,"title": 'Volumen 8 - Los dos líderes'},
            {"link" : overlord.OverlordPDF.Volumen5,"title": 'Volumen 5 - Los Hombres del reino 1'},
            {"link" : overlord.OverlordPDF.Volumen6,"title": 'Volumen 6 - Los Hombres del reino 2'},
            {"link" : overlord.OverlordPDF.Volumen7,"title": 'Volumen 7 - Los invasores de la gran tumba'},
            {"link" : overlord.OverlordPDF.CharlaEntreChicas,"title": 'Extras - Charla entre chicas'},
            {"link" : overlord.OverlordPDF.Volumen9,"title": 'Volumen 9 - El lanzador de magia de la destrucción'},
            {"link" : overlord.OverlordPDF.Volumen10,"title": 'Volumen 10 - El gobernante de las conspiraciones'},
            {"link" : overlord.OverlordPDF.DiaDePleyades,"title": 'Extras - Día de Pléyades'},
            {"link" : overlord.OverlordPDF.Volumen11,"title": 'Volumen 11 - Los artesanos enanos'},
            {"link" : overlord.OverlordPDF.Volumen12,"title": 'Volumen 12 - El paladín del Reino Sagrado 1'},
            {"link" : overlord.OverlordPDF.Volumen13,"title": 'Volumen 13 - El paladín del Reino Sagrado 2'},
            {"link" : overlord.OverlordPDF.Volumen14,"title": 'Volumen 14 - La bruja del reino caído'},
            {"link" : overlord.OverlordPDF.Volumen15,"title": 'Volumen 15 - La semi-elfo del bosque'},
            {"link" : overlord.OverlordPDF.Volumen16,"title": 'Volumen 16 - La semi-elfo God-kin'}
        ]
    },
    {
        "novela" : "Great Demon King",
        "portada" : greatDemondKing.greatDemondKingImg,
        "sinopsis" : `Han Shuo, es un joven que ha desperdiciado su vida y no ha sabido sacarle provecho.
        Un día es raptado por un misterioso anciano para ser usado como recipiente para su alma si es que pierde la batalla que esta a punto de librar contra las fuerzas del bien.
        Durante la batalla su captor perece pero su hechizo de resurrección es interrumpido provocando que Han Shuo sea afectado por un horrible dolor.
        “Si logro sobrevivir… juro que no dejaré de cumplir con mis más perversos deseos.”
        No es exactamente el típico pensamiento que tendrían quienes están a punto de morir.
        Al despertar se encuentra en un mundo de fantasía medieval dentro del cuerpo de un esclavo…`,
        "volumen" : [
            {"link" : greatDemondKing.greatDemondKingPDF.Compendio1,"title": 'Capitulos 001-100'},
            {"link" : greatDemondKing.greatDemondKingPDF.Compendio2,"title": 'Capitulos 101-200'},
            {"link" : greatDemondKing.greatDemondKingPDF.Compendio3,"title": 'Capitulos 201-300'},
            {"link" : greatDemondKing.greatDemondKingPDF.Compendio4,"title": 'Capitulos 301-400'},
            {"link" : greatDemondKing.greatDemondKingPDF.Compendio5,"title": 'Capitulos 401-500'},
            {"link" : greatDemondKing.greatDemondKingPDF.Compendio6,"title": 'Capitulos 501-600'},
            {"link" : greatDemondKing.greatDemondKingPDF.Compendio7,"title": 'Capitulos 601-700'},
            {"link" : greatDemondKing.greatDemondKingPDF.Compendio8,"title": 'Capitulos 701-800'},
            {"link" : greatDemondKing.greatDemondKingPDF.Compendio9,"title": 'Capitulos 801-900'},
            {"link" : greatDemondKing.greatDemondKingPDF.Compendio10,"title": 'Capitulos 901-1000'},
            {"link" : greatDemondKing.greatDemondKingPDF.Compendio10,"title": 'Capitulos 1001-1027'}
        ]
    },
    {
        "novela" : "Kumo desu ga Nani ka",
        "portada" : kumoDesuGaNaniKa.kumoDesuGaNaniKaImg,
        "sinopsis" : `En un mundo donde la batalla entre el Héroe y el Señor Demonio se repetía continuamente. Un enorme hechizo provocado por ambos cruzo la frontera entre ese y otros mundos e hizo explotar un aula en una secundaria.
        El hechizo golpeó a todos en la clase, y todos ellos perdieron sus vidas en un instante. Las almas de esas víctimas fueron lanzadas a otro mundo, y cada uno de ellos reencarno.
        La protagonista, quien tenia la peor reputación en la clase, se ve reencarnada en una araña dentro de una enorme cueva. Ahora, sin comida, refugio y rodeada de monstruos, se vera obligada a usar todo su ingenio y fuerza de voluntad para sobrevivir.
        Esta es la historia de la joven estudiante que se ve convertida en una araña y su lucha a través de este nuevo mundo.`,
        "volumen" : [
            {"link" : kumoDesuGaNaniKa.kumoDesuGaNaniKaPDF.Compendio1,"title": 'Volumen 1'},
            {"link" : kumoDesuGaNaniKa.kumoDesuGaNaniKaPDF.Compendio2,"title": 'Volumen 2'},
            {"link" : kumoDesuGaNaniKa.kumoDesuGaNaniKaPDF.Compendio3,"title": 'Volumen 3'},
            {"link" : kumoDesuGaNaniKa.kumoDesuGaNaniKaPDF.Compendio4,"title": 'Volumen 4'},
            {"link" : kumoDesuGaNaniKa.kumoDesuGaNaniKaPDF.Compendio5,"title": 'Volumen 5'},
            {"link" : kumoDesuGaNaniKa.kumoDesuGaNaniKaPDF.Compendio6,"title": 'Volumen 6'},
            {"link" : kumoDesuGaNaniKa.kumoDesuGaNaniKaPDF.Compendio7,"title": 'Volumen 7'},
            {"link" : kumoDesuGaNaniKa.kumoDesuGaNaniKaPDF.Compendio8,"title": 'Volumen 8'},
            {"link" : kumoDesuGaNaniKa.kumoDesuGaNaniKaPDF.Compendio9,"title": 'Volumen 9'},
            {"link" : kumoDesuGaNaniKa.kumoDesuGaNaniKaPDF.Compendio10,"title": 'Volumen 10'},
            {"link" : kumoDesuGaNaniKa.kumoDesuGaNaniKaPDF.Compendio11,"title": 'Volumen 11'},
            {"link" : kumoDesuGaNaniKa.kumoDesuGaNaniKaPDF.Compendio12,"title": 'Volumen 12'},
            {"link" : kumoDesuGaNaniKa.kumoDesuGaNaniKaPDF.Compendio13,"title": 'Volumen 13'},
            {"link" : kumoDesuGaNaniKa.kumoDesuGaNaniKaPDF.Compendio14,"title": 'Volumen 14'},
            {"link" : kumoDesuGaNaniKa.kumoDesuGaNaniKaPDF.Compendio15,"title": 'Volumen 15'},
            {"link" : kumoDesuGaNaniKa.kumoDesuGaNaniKaPDF.Compendio16,"title": 'Volumen 16'}
        ]
    },
    {
        "novela" : "Solo leveling",
        "portada" : soloLeveling.soloLevelingImg,
        "sinopsis" : `En un mundo en el que ciertos humanos poseen habilidades mágicas, llamados cazadores, deben luchar contra monstruos para proteger a la raza humana de una aniquilación segura, un cazador muy débil llamado Sung Jinwoo se encuentra en una lucha en la que solo puede tratar de sobrevivir.`,
        "volumen" : [
            {"link" : soloLeveling.soloLevelingPDF.Compendio1,"title": 'Arco 1 - Mazmorra rango D'},
            {"link" : soloLeveling.soloLevelingPDF.Compendio2,"title": 'Arco 2 - Despertar'},
            {"link" : soloLeveling.soloLevelingPDF.Compendio3,"title": 'Arco 3 - Mazmorra instantánea'},
            {"link" : soloLeveling.soloLevelingPDF.Compendio4,"title": 'Arco 4 - Mazmorras y Lagartos'},
            {"link" : soloLeveling.soloLevelingPDF.Compendio5,"title": 'Arco 5 - Mazmorras y Prisioneros'},
            {"link" : soloLeveling.soloLevelingPDF.Compendio6,"title": 'Arco 6 - Incursión de Yoo Jin-Ho'}
        ]
    }
]

export default novelas