import overlord from './archivos/overlord/ImExOverlord'
import greatDemondKing from './archivos/greatdemondking/ImExGreatDemondKing'
//Servidor streamtape genera errores en la URL
const animes=[
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
        "novela" : "Great Demond King",
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
            {"link" : greatDemondKing.greatDemondKingPDF.Compendio10,"title": 'Capitulos 1001-1027'},
        ]
    },
    {
        "novela" : "aa",
        "portada" : overlord.OverlordImg.OverlordImg,
        "sinopsis" : ``,
        "volumen" : [
            {"link" : overlord.OverlordPDF.Prologo,"title": '-'}
        ]
    }
]

export default animes