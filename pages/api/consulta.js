export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Método não permitido' });

  const { pergunta } = req.body;

  try {
    const response = await fetch("https://yuntian-deng-chatgpt4.hf.space/run/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data: [`Você é um advogado. Responda com base na legislação brasileira: ${pergunta}`] })
    });

    const result = await response.json();
    const resposta = result.data[0];

    res.status(200).json({ resposta });
  } catch (error) {
    console.error("Erro ao consultar IA:", error);
    res.status(500).json({ error: "Erro ao consultar IA" });
  }
}
