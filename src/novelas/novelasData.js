import Novelas from './ImEx'
//Servidor streamtape genera errores en la URL
const animes=[
    {
        "novela" : "Overlord",
        "portada" : Novelas.OverlordImg.OverlordImg,
        "volumen" : [
            {"link" : Novelas.OverlordPDF.Volumen1},
            {"link" : Novelas.OverlordPDF.Volumen2}
        ]
    }
]

export default animes