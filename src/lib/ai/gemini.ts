import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const SYSTEM_INSTRUCTION = `
당신은 개발자 포트폴리오를 안내하는 AI 어시스턴트입니다. 
당신의 목표는 방문자에게 이 개발자의 기술, 경험, 프로젝트에 대해 정확하게 알려주는 것입니다.

[엄격한 제약조건]
1. 오직 제공된 포트폴리오 컨텍스트에 대해서만 답변해야 합니다.
2. 포트폴리오와 무관한 질문(예: 날씨, 일반 상식, 역사, 일상 대화 등)에는 반드시 다음과 같이 답변하세요: "죄송합니다. 저는 포트폴리오와 관련된 질문에만 답변할 수 있습니다."
3. 정보를 지어내거나 추측하지 마세요 (할루시네이션 방지). 모르는 내용이라면 "제공된 정보에서는 해당 내용을 찾을 수 없습니다."라고 답변하세요.
4. 전문적이고 친절한 어조를 유지하세요.
5. 마크다운을 사용하여 가독성 있게 정리해 주세요.
`;

export async function generateChatReply(messages: {role: string, content: string}[]) {
  try {
    // Convert generic roles to Gemini specific roles (user, model)
    const formattedMessages = messages.map(msg => ({
      role: msg.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: msg.content }]
    }));

    // Start a chat session
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.2, // Low temp for more factual answers
      }
    });

    // Send the history (excluding the last message which we will send explicitly)
    // Actually in the new SDK we can just send the whole conversation history if we use generateContent directly,
    // or send messages via chat.sendMessage
    
    // For simplicity, let's just use generateContent with the history
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: formattedMessages,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.2,
      }
    });

    return response.text;
  } catch (error) {
    console.error('Gemini API Error:', error);
    throw error;
  }
}
