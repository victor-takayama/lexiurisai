export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método não permitido' })
  }

  const { pergunta } = req.body

  const respostaSimulada = `Resposta simulada para: "${pergunta}". Aqui a IA jurídica responderia com base nas leis.`

  return res.status(200).json({ resposta: respostaSimulada })
}