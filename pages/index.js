import Head from 'next/head'
import { useState } from 'react'
import axios from 'axios'

export default function Home() {
  const [pergunta, setPergunta] = useState('')
  const [resposta, setResposta] = useState('')

  const handleConsulta = async () => {
    const res = await axios.post('/api/consulta', { pergunta })
    setResposta(res.data.resposta)
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Head><title>LexIuris AI</title></Head>
      <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-4">LexIuris AI</h1>
        <textarea 
          className="w-full p-2 border rounded mb-4"
          placeholder="Digite sua pergunta jurídica aqui..."
          value={pergunta}
          onChange={(e) => setPergunta(e.target.value)}
        />
        <button 
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={handleConsulta}
        >
          Consultar IA
        </button>
        {resposta && <div className="mt-4 p-4 bg-gray-100 rounded">{resposta}</div>}
      </div>
    </div>
  )
}