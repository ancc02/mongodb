const mongoose = require('mongoose');

const url = 'mongodb://localhost/mongo1_curso';

mongoose.connect(url, {

}).then(() => console.log('CONECTADO A MONGO'))
    .catch((e) => console.log(`el error de conexion es ${e}`));

const personaSchema = mongoose.Schema({
    nombre: String,
    edad: Number,
    pais: String
}, { versionKey: false });

const PersonaModelo = mongoose.model('personas', personaSchema);

const mostrar = async () => {
    const personas = await PersonaModelo.find();
    console.log(personas);
}

const crear = async () => {
    const persona = new PersonaModelo({
        nombre: 'marcos',
        edad: 33,
        pais: 'españa'
    });

    const resultado = await persona.save(persona);
    console.log(resultado)
}

const actualizar = async (id) => {
    const persona = await PersonaModelo.updateOne({ _id: id }, {
        $set: {
            nombre: 'marcos 3',
            edad: 45
        }
    });

    console.log(persona);
}

const eliminar = async (id) => {
    const persona = await PersonaModelo.deleteOne({ _id: id });
    console.log(persona);
}

//mostrar();

//crear();

//actualizar('6334288bcdee1c23be9774e7');

//eliminar('6334289d6d459cf0318ef2fa');