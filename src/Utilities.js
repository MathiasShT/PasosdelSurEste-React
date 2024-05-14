import { collection, getDocs, getDoc, doc, getFirestore, query, where, addDoc, serverTimestamp } from "firebase/firestore"
import { app } from "./Firebase"

export const getProducts = () => {
    const bd = getFirestore(app)
    const disciplinaCollection = collection(bd, "disciplina")
    const query = getDocs(disciplinaCollection)
    return query
      .then((resultado) => {
        const disciplinas = resultado.docs.map(doc => { 
            const disciplina = doc.data()
            disciplina.id = doc.id
            return disciplina })
        return disciplinas
      })
      .catch((error) => {
        console.log(error)
})}

export const getDescription = (id) => {
    const db = getFirestore(app)
      const disciplinaCollection = collection(db, "disciplina")
      const filtro = doc(disciplinaCollection, id)
      const consulta = getDoc(filtro)
    
      return consulta
        .then((resultado) => {
          const disciplina = resultado.data()
          disciplina.id = resultado.id
          return disciplina
        })
        .catch((error) => {
          console.log(error)
        })
    }

