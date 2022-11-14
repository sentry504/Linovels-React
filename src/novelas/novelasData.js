import overlord from './archivos/overlord/ImExOverlord'
import greatDemondKing from './archivos/greatdemondking/ImExGreatDemondKing'
import kumoDesuGaNaniKa from './archivos/kumodesugananika/ImExKumoDesuGaNaniKa'
import soloLeveling from './archivos/sololeveling/ImExSoloLeveling'
import KamiTachiNiHirowareta from './archivos/kamitachinihirowaretaotoko/ImExKamiTachiNiHirowaretaOtoko'
import IsekaiWaSmartphoneToTomoNi from './archivos/isekaiwasmartphonetotomoni/ImExIsekaiWaSmartphoneToTomoNi'
//Servidor streamtape genera errores en la URL
const novelas=[
    {
        "novela" : "Overlord",
        "portada" : overlord.Img.OverlordImg,
        "sinopsis" : `Después de anunciar que suspendería todos sus servicios, el juego de internet "Yggdrasil" apago sus servidores. Pero por alguna razón, un jugador no se desconectó automáticamente… Pero eso no fue todo, los NPC de su gremio cobraron vida… Es así como un joven normal, que amaba el videojuego Yggdrasil en el mundo real, fue transportado a un mundo alternativo junto con todo su gremio. Convirtiéndose como resultado en el mago más poderoso, Momonga, un no-muerto con la apariencia de un esqueleto. ¡Ahora él dirigirá a su gremio "Ainz Ooal Gown" hacia una aventura legendaria sin precedentes!`,
        "volumen" : [
            {"link" : overlord.PDF.Prologo,"title": 'Extras - Prologo'},
            {"link" : overlord.PDF.Volumen0Alternativo,"title": 'Volumen 0 alternativo - La llegada de los Dioses'},
            {"link" : overlord.PDF.Volumen1,"title": 'Volumen 1 - El rey no muerto'},
            {"link" : overlord.PDF.Volumen1Alternativo,"title": 'Volumen 1 alternativo - La princesa vampiro del país perdido'},
            {"link" : overlord.PDF.ElEmisarioDelRey,"title": 'Extras - El emisario del rey'},
            {"link" : overlord.PDF.DramaDeLas3Damas,"title": 'Extras - Drama de las 3 damas'},
            {"link" : overlord.PDF.Volumen2,"title": 'Volumen 2 - El gerrero oscuro'},
            {"link" : overlord.PDF.Volumen3,"title": 'Volumen 3 - La valquiria sangrienta'},
            {"link" : overlord.PDF.Volumen4,"title": 'Volumen 4 - Los héroes hombres lagarto'},
            {"link" : overlord.PDF.Volumen8,"title": 'Volumen 8 - Los dos líderes'},
            {"link" : overlord.PDF.Volumen5,"title": 'Volumen 5 - Los Hombres del reino 1'},
            {"link" : overlord.PDF.Volumen6,"title": 'Volumen 6 - Los Hombres del reino 2'},
            {"link" : overlord.PDF.Volumen7,"title": 'Volumen 7 - Los invasores de la gran tumba'},
            {"link" : overlord.PDF.CharlaEntreChicas,"title": 'Extras - Charla entre chicas'},
            {"link" : overlord.PDF.Volumen9,"title": 'Volumen 9 - El lanzador de magia de la destrucción'},
            {"link" : overlord.PDF.Volumen10,"title": 'Volumen 10 - El gobernante de las conspiraciones'},
            {"link" : overlord.PDF.DiaDePleyades,"title": 'Extras - Día de Pléyades'},
            {"link" : overlord.PDF.Volumen11,"title": 'Volumen 11 - Los artesanos enanos'},
            {"link" : overlord.PDF.Volumen12,"title": 'Volumen 12 - El paladín del Reino Sagrado 1'},
            {"link" : overlord.PDF.Volumen13,"title": 'Volumen 13 - El paladín del Reino Sagrado 2'},
            {"link" : overlord.PDF.Volumen14,"title": 'Volumen 14 - La bruja del reino caído'},
            {"link" : overlord.PDF.Volumen15,"title": 'Volumen 15 - La semi-elfo del bosque'},
            {"link" : overlord.PDF.Volumen16,"title": 'Volumen 16 - La semi-elfo God-kin'}
        ]
    },
    {
        "novela" : "Great Demon King",
        "portada" : greatDemondKing.Img,
        "sinopsis" : `Han Shuo, es un joven que ha desperdiciado su vida y no ha sabido sacarle provecho. Un día es raptado por un misterioso anciano para ser usado como recipiente para su alma si es que pierde la batalla que esta a punto de librar contra las fuerzas del bien. Durante la batalla su captor perece pero su hechizo de resurrección es interrumpido provocando que Han Shuo sea afectado por un horrible dolor. “Si logro sobrevivir… juro que no dejaré de cumplir con mis más perversos deseos.” No es exactamente el típico pensamiento que tendrían quienes están a punto de morir. Al despertar se encuentra en un mundo de fantasía medieval dentro del cuerpo de un esclavo…`,
        "volumen" : [
            {"link" : greatDemondKing.PDF.Compendio1,"title": 'Capitulos 001-100'},
            {"link" : greatDemondKing.PDF.Compendio2,"title": 'Capitulos 101-200'},
            {"link" : greatDemondKing.PDF.Compendio3,"title": 'Capitulos 201-300'},
            {"link" : greatDemondKing.PDF.Compendio4,"title": 'Capitulos 301-400'},
            {"link" : greatDemondKing.PDF.Compendio5,"title": 'Capitulos 401-500'},
            {"link" : greatDemondKing.PDF.Compendio6,"title": 'Capitulos 501-600'},
            {"link" : greatDemondKing.PDF.Compendio7,"title": 'Capitulos 601-700'},
            {"link" : greatDemondKing.PDF.Compendio8,"title": 'Capitulos 701-800'},
            {"link" : greatDemondKing.PDF.Compendio9,"title": 'Capitulos 801-900'},
            {"link" : greatDemondKing.PDF.Compendio10,"title": 'Capitulos 901-1000'},
            {"link" : greatDemondKing.PDF.Compendio10,"title": 'Capitulos 1001-1027'}
        ]
    },
    {
        "novela" : "Kumo desu ga Nani ka",
        "portada" : kumoDesuGaNaniKa.Img,
        "sinopsis" : `En un mundo donde la batalla entre el Héroe y el Señor Demonio se repetía continuamente. Un enorme hechizo provocado por ambos cruzo la frontera entre ese y otros mundos e hizo explotar un aula en una secundaria. El hechizo golpeó a todos en la clase, y todos ellos perdieron sus vidas en un instante. Las almas de esas víctimas fueron lanzadas a otro mundo, y cada uno de ellos reencarno. La protagonista, quien tenia la peor reputación en la clase, se ve reencarnada en una araña dentro de una enorme cueva. Ahora, sin comida, refugio y rodeada de monstruos, se vera obligada a usar todo su ingenio y fuerza de voluntad para sobrevivir. Esta es la historia de la joven estudiante que se ve convertida en una araña y su lucha a través de este nuevo mundo.`,
        "volumen" : [
            {"link" : kumoDesuGaNaniKa.PDF.Compendio1,"title": 'Volumen 1'},
            {"link" : kumoDesuGaNaniKa.PDF.Compendio2,"title": 'Volumen 2'},
            {"link" : kumoDesuGaNaniKa.PDF.Compendio3,"title": 'Volumen 3'},
            {"link" : kumoDesuGaNaniKa.PDF.Compendio4,"title": 'Volumen 4'},
            {"link" : kumoDesuGaNaniKa.PDF.Compendio5,"title": 'Volumen 5'},
            {"link" : kumoDesuGaNaniKa.PDF.Compendio6,"title": 'Volumen 6'},
            {"link" : kumoDesuGaNaniKa.PDF.Compendio7,"title": 'Volumen 7'},
            {"link" : kumoDesuGaNaniKa.PDF.Compendio8,"title": 'Volumen 8'},
            {"link" : kumoDesuGaNaniKa.PDF.Compendio9,"title": 'Volumen 9'},
            {"link" : kumoDesuGaNaniKa.PDF.Compendio10,"title": 'Volumen 10'},
            {"link" : kumoDesuGaNaniKa.PDF.Compendio11,"title": 'Volumen 11'},
            {"link" : kumoDesuGaNaniKa.PDF.Compendio12,"title": 'Volumen 12'},
            {"link" : kumoDesuGaNaniKa.PDF.Compendio13,"title": 'Volumen 13'},
            {"link" : kumoDesuGaNaniKa.PDF.Compendio14,"title": 'Volumen 14'},
            {"link" : kumoDesuGaNaniKa.PDF.Compendio15,"title": 'Volumen 15'},
            {"link" : kumoDesuGaNaniKa.PDF.Compendio16,"title": 'Volumen 16'}
        ]
    },
    {
        "novela" : "Solo leveling",
        "portada" : soloLeveling.Img,
        "sinopsis" : `En un mundo en el que ciertos humanos poseen habilidades mágicas, llamados cazadores, deben luchar contra monstruos para proteger a la raza humana de una aniquilación segura, un cazador muy débil llamado Sung Jinwoo se encuentra en una lucha en la que solo puede tratar de sobrevivir.`,
        "volumen" : [
            {"link" : soloLeveling.PDF.Compendio1,"title": 'Arco 1 - Mazmorra rango D'},
            {"link" : soloLeveling.PDF.Compendio2,"title": 'Arco 2 - Despertar'},
            {"link" : soloLeveling.PDF.Compendio3,"title": 'Arco 3 - Mazmorra instantánea'},
            {"link" : soloLeveling.PDF.Compendio4,"title": 'Arco 4 - Mazmorras y Lagartos'},
            {"link" : soloLeveling.PDF.Compendio5,"title": 'Arco 5 - Mazmorras y Prisioneros'},
            {"link" : soloLeveling.PDF.Compendio6,"title": 'Arco 6 - Incursión de Yoo Jin-Ho'}
        ]
    },
    {
        "novela" : "Kamitachi ni Hirowareta Otoko",
        "portada" : KamiTachiNiHirowareta.Img,
        "sinopsis" : `Ryoma Takebayashi es un hombre solitario que llevó una vida llena de dificultades hasta que muere de un desafortunado accidente mientras duerme, que llegó a un final bastante repentino y decepcionante. Ryoma nunca había tenido una vida bendecida, pero después de su muerte, tres grandes dioses buscaron su cooperación y lo reencarnaron como un niño en otro mundo con espadas y magia. Al recibir la más cordial y divina bienvenida de los dioses, Ryoma decide vivir tranquilamente por su cuenta en el bosque por el momento, donde hace uso de sus conocimientos y habilidades innatos, combinados con las bendiciones de los dioses. Trabajando diligentemente en la magia y la caza, la mayor pasión de Ryoma es investigar sus slimes domesticados. Mientras entrena una variedad de slimes (algunos recién descubiertos), se levanta el telón de esta fantasía de vida tranquila que celebra una segunda vida con gente amable en otro mundo.`,
        "volumen" : [
            {"link" : KamiTachiNiHirowareta.PDF.Compendio1,"title": 'Por la gracia de los Dioses - Volumen 1'},
            {"link" : KamiTachiNiHirowareta.PDF.Compendio2,"title": 'Por la gracia de los Dioses - Volumen 2'},
            {"link" : KamiTachiNiHirowareta.PDF.Compendio3,"title": 'Por la gracia de los Dioses - Volumen 3'},
            {"link" : KamiTachiNiHirowareta.PDF.Compendio4,"title": 'Por la gracia de los Dioses - Volumen 4'},
            {"link" : KamiTachiNiHirowareta.PDF.Compendio5,"title": 'Por la gracia de los Dioses - Volumen 5'},
            {"link" : KamiTachiNiHirowareta.PDF.Compendio6,"title": 'Por la gracia de los Dioses - Volumen 6'},
            {"link" : KamiTachiNiHirowareta.PDF.Compendio7,"title": 'Por la gracia de los Dioses - Volumen 7'},
            {"link" : KamiTachiNiHirowareta.PDF.Compendio8,"title": 'Por la gracia de los Dioses - Volumen 8'},
            {"link" : KamiTachiNiHirowareta.PDF.Compendio9,"title": 'Por la gracia de los Dioses - Volumen 9'},
            {"link" : KamiTachiNiHirowareta.PDF.Compendio10,"title": 'Por la gracia de los Dioses - Volumen 10'},
            {"link" : KamiTachiNiHirowareta.PDF.Compendio11,"title": 'Por la gracia de los Dioses - Volumen 11'}
        ]
    },
    {
        "novela" : "Isekai wa Smartphone to Tomo ni",
        "portada" : IsekaiWaSmartphoneToTomoNi.Img,
        "sinopsis" : `Touya Mochizuki, de 15 años, es asesinado accidentalmente por un rayo que se le escapó a Dios. Como disculpa por este error sin sentido, Dios permite a Touya que resucite, pero como no puede enviarlo de vuelta a su viejo mundo, lo reencarna en un mundo de fantasía junto con una sola petición especial. Touya utiliza su petición para traer su Smartphone (teléfono inteligente) al nuevo mundo con él y así, Dios acatando su petición modifica el teléfono para que funcione en el nuevo mundo. Dios también sorprendido por la humilde petición del joven y por lo amable que fue al no reprocharle por su error garrafal se da la atribución de amplificar las habilidades físicas, mágicas y cognitivas de Touya hasta cierto punto como una disculpa más por el inconveniente de matarlo. Aprovechando al máximo su segunda oportunidad en la vida, Touya se hace amigo de muchas personas diferentes en el nuevo mundo. Comienza a viajar de un país a otro, resolviendo disputas políticas, búsquedas menores y disfrutando indiferentemente con sus nuevos aliados gracias a los poderes casi benditos que recibió de la gracia de Dios.`,
        "volumen" : [
            {"link" : IsekaiWaSmartphoneToTomoNi.PDF.Compendio1,"title": 'Isekai wa Smartphone to Tomo ni - Volumen 1'},
            {"link" : IsekaiWaSmartphoneToTomoNi.PDF.Compendio2,"title": 'Isekai wa Smartphone to Tomo ni - Volumen 2'},
            {"link" : IsekaiWaSmartphoneToTomoNi.PDF.Compendio3,"title": 'Isekai wa Smartphone to Tomo ni - Volumen 3'},
            {"link" : IsekaiWaSmartphoneToTomoNi.PDF.Compendio4,"title": 'Isekai wa Smartphone to Tomo ni - Volumen 4'},
            {"link" : IsekaiWaSmartphoneToTomoNi.PDF.Compendio5,"title": 'Isekai wa Smartphone to Tomo ni - Volumen 5'},
            {"link" : IsekaiWaSmartphoneToTomoNi.PDF.Compendio6,"title": 'Isekai wa Smartphone to Tomo ni - Volumen 6'},
            {"link" : IsekaiWaSmartphoneToTomoNi.PDF.Compendio7,"title": 'Isekai wa Smartphone to Tomo ni - Volumen 7'},
            {"link" : IsekaiWaSmartphoneToTomoNi.PDF.Compendio8,"title": 'Isekai wa Smartphone to Tomo ni - Volumen 8'},
            {"link" : IsekaiWaSmartphoneToTomoNi.PDF.Compendio9,"title": 'Isekai wa Smartphone to Tomo ni - Volumen 9'},
            {"link" : IsekaiWaSmartphoneToTomoNi.PDF.Compendio10,"title": 'Isekai wa Smartphone to Tomo ni - Volumen 10'},
            {"link" : IsekaiWaSmartphoneToTomoNi.PDF.Compendio11,"title": 'Isekai wa Smartphone to Tomo ni - Volumen 11'},
            {"link" : IsekaiWaSmartphoneToTomoNi.PDF.Compendio12,"title": 'Isekai wa Smartphone to Tomo ni - Volumen 12'},
            {"link" : IsekaiWaSmartphoneToTomoNi.PDF.Compendio13,"title": 'Isekai wa Smartphone to Tomo ni - Volumen 13'},
            {"link" : IsekaiWaSmartphoneToTomoNi.PDF.Compendio14,"title": 'Isekai wa Smartphone to Tomo ni - Volumen 14'},
            {"link" : IsekaiWaSmartphoneToTomoNi.PDF.Compendio15,"title": 'Isekai wa Smartphone to Tomo ni - Volumen 15'},
            {"link" : IsekaiWaSmartphoneToTomoNi.PDF.Compendio16,"title": 'Isekai wa Smartphone to Tomo ni - Volumen 16'},
            {"link" : IsekaiWaSmartphoneToTomoNi.PDF.Compendio17,"title": 'Isekai wa Smartphone to Tomo ni - Volumen 17'},
            {"link" : IsekaiWaSmartphoneToTomoNi.PDF.Compendio18,"title": 'Isekai wa Smartphone to Tomo ni - Volumen 18'},
            {"link" : IsekaiWaSmartphoneToTomoNi.PDF.Compendio19,"title": 'Isekai wa Smartphone to Tomo ni - Volumen 19'},
            {"link" : IsekaiWaSmartphoneToTomoNi.PDF.Compendio20,"title": 'Isekai wa Smartphone to Tomo ni - Volumen 20'},
            {"link" : IsekaiWaSmartphoneToTomoNi.PDF.Compendio21,"title": 'Isekai wa Smartphone to Tomo ni - Volumen 21'},
            {"link" : IsekaiWaSmartphoneToTomoNi.PDF.Compendio22,"title": 'Isekai wa Smartphone to Tomo ni - Volumen 22'},
            {"link" : IsekaiWaSmartphoneToTomoNi.PDF.Compendio23,"title": 'Isekai wa Smartphone to Tomo ni - Volumen 23'},
            {"link" : IsekaiWaSmartphoneToTomoNi.PDF.Compendio24,"title": 'Isekai wa Smartphone to Tomo ni - Volumen 24'},
            {"link" : IsekaiWaSmartphoneToTomoNi.PDF.Compendio25,"title": 'Isekai wa Smartphone to Tomo ni - Volumen 25'},
            {"link" : IsekaiWaSmartphoneToTomoNi.PDF.Compendio26,"title": 'Isekai wa Smartphone to Tomo ni - Volumen 26'}
        ]
    }
]

export default novelas